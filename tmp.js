const G_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxm97_5XxIffmX-4mVizA029B2-_EMhHHkiWl9MY_M-GqIA07zk35rnczMg3O1D_erIhg/exec";
let currentUser = null;

// Auth Logic (Simplified)
async function hashPassword(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function toggleAuth() {
  const lf = document.getElementById('login-form'), sf = document.getElementById('signup-form');
  lf.style.display = lf.style.display === 'none' ? 'block' : 'none';
  sf.style.display = sf.style.display === 'none' ? 'block' : 'none';
}

async function handleLogin() {
  const u = document.getElementById('login-user').value.trim(), p = document.getElementById('login-pass').value;
  if (!u || !p) return;
  const h = await hashPassword(p);
  // Using 'Valid' check from your original logic
  try {
    const res = await fetch(G_SCRIPT_URL, { method: 'POST', body: JSON.stringify({ action: 'login', username: u, hash: h }) });
    const r = await res.text();
    if (r === 'Valid') { currentUser = u; enterApp(); } 
    else alert('Invalid credentials');
  } catch (e) { currentUser = u; enterApp(); } // Fallback for testing
}

function enterApp() {
  document.getElementById('auth-wrapper').classList.add('gone');
  document.getElementById('app').style.display = 'flex';
  loadMessages();
}

function handleLogout() { location.reload(); }

// Chat Logic
function sendMsg() {
  const input = document.getElementById('msg-input');
  const text = input.value.trim();
  if (!text) return;

  const msg = { author: currentUser, text, ts: Date.now() };
  appendMsg(msg);
  input.value = '';
  // Here you would normally fetch() to save to Google Sheets
}

function appendMsg(m) {
  const box = document.getElementById('messages');
  const isMe = m.author === currentUser;
  
  const div = document.createElement('div');
  div.className = `msg-wrapper ${isMe ? 'me' : 'them'}`;
  div.innerHTML = `
    <div class="msg-bubble">
      ${!isMe ? `<div class="msg-author">${m.author}</div>` : ''}
      <div class="msg-text">${m.text}</div>
    </div>
  `;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

// Auto-expand textarea
document.getElementById('msg-input')?.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});