const G_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAOR053e53jQ_jsf3qBpjHKDZ-oP18ht4GI63nU4NzewGHJF0htzHGzlkwYDTP4TgbTg/exec";
const ADMIN_USERNAME = "Ethan Henry Carpenter"; 

// Global State
let currentUser = null;
let currentChatOffset = 0;
const CHAT_LIMIT = 5000;
let pollInterval;

// Queue Management for Sequential Sending
const messageQueue = [];
let isSending = false;

document.addEventListener('DOMContentLoaded', () => {
    (function checkSession() {
        const savedUser = localStorage.getItem('chatSessionUser');
        if (savedUser) {
            currentUser = savedUser;
            enterApp();
            const wrapper = document.getElementById('auth-wrapper');
            if (wrapper) wrapper.style.display = "none";
        }
    })();
});

/**
 * AUTHENTICATION & UTILS
 */
async function hashPassword(s) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function toggleAuth(fromSignup = false, username = '') {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const container = document.getElementById('auth-container');
    const errorBox = document.getElementById('error-box');

    const inputs = container.querySelectorAll('input');
    inputs.forEach(input => input.value = "");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
    errorBox.style.display = "none";

    if (fromSignup) {
        document.getElementById('login-user').value = username;
        document.getElementById('login-pass').focus();
    }
}

async function handleLogin(event) {
    event.preventDefault();
    const u = document.getElementById('login-user').value.trim();
    const p = document.getElementById('login-pass').value;
    if (!u || !p) return;

    showLoading(true);
    const h = await hashPassword(p);
    try {
        const res = await fetch(G_SCRIPT_URL, { method: 'POST', body: JSON.stringify({ action: 'login', username: u, hash: h }) });
        const r = await res.text();
        showLoading(false);
        if (r === 'Valid') { 
            currentUser = u; 
            localStorage.setItem('chatSessionUser', u);
            enterApp(); 
        } else {
            showError(r);
        }
    } catch (e) { 
        showError('Network error. Please try again.');
        showLoading(false);
    } 
}

async function handleSignup(event) {
    event.preventDefault();
    const u = document.getElementById('signup-user').value.trim();
    const p = document.getElementById('signup-pass').value;
    if (!u || !p) return;

    showLoading(true);
    const h = await hashPassword(p);
    try {
        const res = await fetch(G_SCRIPT_URL, { method: 'POST', body: JSON.stringify({ action: 'signup', username: u, hash: h }) });
        const r = await res.text();
        showLoading(false);
        if (r === 'Success') { 
            showError('Account created successfully!'); 
            toggleAuth(true, u); 
        } else if (r === 'User Exists') {
            showError('Please choose another username.');
        } else {
            showError(r);
        }
    } catch (e) { 
        showError('Network error. Please try again.');
        showLoading(false);
    } 
}

function logout() {
    localStorage.removeItem('chatSessionUser');
    location.reload(); 
}

function showError(message) {
    const errorBox = document.getElementById('error-box');
    errorBox.textContent = message;
    errorBox.style.display = 'block';
}

function showLoading(show) {
    const loader = document.getElementById('loader-container');
    const bar = document.getElementById('loader-bar');
    const errorBox = document.getElementById('error-box');

    if (show) {
        errorBox.style.display = 'none';
        loader.style.display = 'block';
        bar.style.width = '0%';
        setTimeout(() => { bar.style.width = '90%'; }, 50);
    } else {
        bar.style.width = '100%';
        setTimeout(() => {
            loader.style.display = 'none';
            bar.style.width = '0%';
        }, 400); 
    }
}

/**
 * APP CORE LOGIC
 */
function enterApp() {
    const container = document.getElementById('auth-container');
    const wrapper = document.getElementById('auth-wrapper');
    
    container.classList.add('slide-off');
    
    setTimeout(() => {
        if (wrapper) wrapper.style.display = "none";
        document.getElementById('chat-wrapper').style.display = "flex"; 
        
        loadChats();

        if (pollInterval) clearInterval(pollInterval); 
        pollInterval = setInterval(() => {
            loadChats(false, true); 
        }, 3000);

    }, 800); 
}

let allMessages = []; // This stores the "Client Side" master list

function scrollToBottom() {
    const display = document.getElementById('messages');
    display.scrollTop = display.scrollHeight;
}

/**
 * SENDING LOGIC (Sequential + Optimistic)
 */
function handleSend(event) {
    event.preventDefault();
    const input = document.getElementById('message-input');
    const msg = input.value.trim();
    if (!msg) return;

    const display = document.getElementById('messages');
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const localId = 'msg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);

    const optimisticHtml = `
        <div class="msg-wrapper user-own pending" id="${localId}" data-msg="${msg.replace(/"/g, '&quot;')}">
            <div class="msg-info"><strong>${currentUser}</strong> • ${time} (sending...)</div>
            <div class="msg-text">${msg}</div>
        </div>
    `;
    
    display.insertAdjacentHTML('beforeend', optimisticHtml);
    scrollToBottom();

    messageQueue.push({ localId, msg });
    processQueue();

    input.value = ''; 
}

async function processQueue() {
    if (isSending || messageQueue.length === 0) return;

    isSending = true;
    const currentItem = messageQueue[0];

    try {
        const res = await fetch(G_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify({
                action: 'sendChat',
                username: currentUser,
                message: currentItem.msg
            })
        });

        const result = await res.json(); // Assuming server returns the saved message object

        if (res.ok) {
            // OPTIONAL: Add the confirmed message to allMessages immediately 
            // so we don't have to wait for the next poll to see it.
            if (result.messageData) {
                const exists = allMessages.some(m => 
                    m[0] === result.messageData[0] && 
                    m[1] === result.messageData[1] && 
                    m[2] === result.messageData[2]
                );
                if (!exists) allMessages.push(result.messageData);
            }

            // SUCCESS: Remove from queue and update UI
            messageQueue.shift();
            const el = document.getElementById(currentItem.localId);
            if (el) {
                el.classList.remove('pending');
                el.classList.add('sent-confirmed');
                // Update the "sending..." text to actual time
                const info = el.querySelector('.msg-info');
                if (info) info.innerHTML = `<strong>${currentUser}</strong> • Just now`;
            }
            
            // Re-render to ensure grouping is updated
            renderMessages();
        } else {
            throw new Error("Server rejected message");
        }

    } catch (e) {
        console.error("Send failed, keeping in queue for retry:", e);
        // We do NOT shift() here, so the next processQueue() call retries the same message.
        // Add a small delay before retrying to prevent infinite rapid loops during outages.
        await new Promise(resolve => setTimeout(resolve, 5000));
    } finally {
        isSending = false;
        // Only trigger next one if the queue actually moved or we want to retry
        if (messageQueue.length > 0) processQueue();
    }
}

/**
 * LOADING LOGIC (Lazy Load + Reconciliation)
 */
async function loadChats(isLoadMore = false, isPolling = false) {

    const display = document.getElementById('messages');
    const wasAtBottom = display.scrollHeight - display.scrollTop <= display.clientHeight + 100;
    // If it's a fresh load (not polling or loading more), reset everything
    if (!isLoadMore && !isPolling) {
        currentChatOffset = 0;
        allMessages = [];
    }

    try {
        const res = await fetch(G_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify({ 
                action: 'getChats',
                limit: CHAT_LIMIT,
                offset: isLoadMore ? currentChatOffset : 0 
            })
        });
        
        const data = await res.json();
        const serverMessages = data.messages || []; 

        if (serverMessages.length === 0 && isLoadMore) {
            console.log("No more messages to load.");
            return;
        }

        // --- MERGE LOGIC ---
        serverMessages.forEach(msg => {
            // Unique key based on user + text + timestamp
            const exists = allMessages.some(m => m[0] === msg[0] && m[1] === msg[1] && m[2] === msg[2]);
            if (!exists) {
                if (isLoadMore) {
                    allMessages.unshift(msg); // Add older messages to the top
                } else {
                    allMessages.push(msg); // Add new messages to the bottom
                }
            }
        });

        // Update offset for the NEXT "Load More" click
        if (isLoadMore) {
            currentChatOffset += serverMessages.length;
        } else if (!isPolling) {
            // On first load, set the initial offset to the number of messages we just got
            currentChatOffset = serverMessages.length;
        }

        renderMessages(isLoadMore, wasAtBottom, isPolling);

    } catch (e) {
        console.error("Fetch error:", e);
    }
}

function renderMessages(isLoadMore = false, wasAtBottom = false, isPolling = false) {
    const display = document.getElementById('messages');
    const oldHeight = display.scrollHeight;
    
    allMessages.sort((a, b) => new Date(a[2]) - new Date(b[2]));
    // 1. Group the messages for the "single bubble" look
    const grouped = [];
    allMessages.forEach((msg) => {
        const lastGroup = grouped[grouped.length - 1];
        if (lastGroup && lastGroup.user === msg[0]) {
            lastGroup.texts.push(msg[1]);
            lastGroup.time = msg[2];
        } else {
            grouped.push({ user: msg[0], texts: [msg[1]], time: msg[2] });
        }
    });

    // 2. Build the HTML for confirmed messages
    const htmlRows = grouped.map(group => {
        const isOwn = (group.user === currentUser) ? 'user-own' : '';
        const isAdmin = (group.user === ADMIN_USERNAME) ? 'admin-msg' : '';
        const time = new Date(group.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const joinedText = group.texts.map(t => 
            `<span style="display:block">${String(t).replace(/\n/g, '<br>')}</span>`
        ).join('');
        console.log("Rendering message for user:", group.user, "with texts:", group.texts);
        return `
            <div class="msg-wrapper ${isOwn} ${isAdmin}">
                <div class="msg-info"><strong>${group.user}</strong> • ${time}</div>
                <div class="msg-text">${joinedText}</div>
            </div>
        `;
    }).join('');

    // 3. Collect and build the HTML for pending (unsent) messages
    const pendingElements = Array.from(document.querySelectorAll('.msg-wrapper.pending'));
    const stillPendingHtml = pendingElements
        .filter(p => {
            const text = p.getAttribute('data-msg');
            // Don't show the pending bubble if the real message is now in allMessages
            return !allMessages.some(m => m[1] === text && m[0] === currentUser);
        })
        .map(p => p.outerHTML)
        .join('');

    const finalContent = htmlRows + stillPendingHtml;

    // 4. SMART RENDER: Only touch the DOM if something actually changed
    if (display.innerHTML !== finalContent) {
        display.innerHTML = finalContent;

        // 5. SMART SCROLL: Decision logic
        if (isLoadMore) {
            // Keep the user looking at the same messages after loading history
            display.scrollTop = display.scrollHeight - oldHeight;
        } else if (!isPolling) {
            // Snap to bottom if they were already at the bottom OR if it's the first load
            scrollToBottom();
        }
        // If isPolling is true but wasAtBottom is false, we do NOTHING.
        // This leaves the user's scroll position exactly where they left it.
    }
}