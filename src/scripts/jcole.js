
// --- SELECTORS & SHARED STATE ---
const parentDoc = window.parent.document;
const getParentEl = (id) => parentDoc.getElementById(id);
const albums = window.parent.getAlbums(); 

const CARD_W = 160; 
const CASSETTE_W = 60;
const HOVER_DROP = 40;

let audio = window.parent.getAudio(); // Access the audio from index.js



function getPlatterCenter() {
    const outer = getParentEl('platterOuter');
    if (!outer) return { x: 0, y: 0, size: 120 };
    
    const r = outer.getBoundingClientRect();
    const iframePos = window.frameElement.getBoundingClientRect();
    
    // Returns coordinates relative to the iframe's viewport
    return { 
        x: r.left - iframePos.left, 
        y: r.top - iframePos.top, 
        size: r.width 
    };
}

function setPlatter(cover, img) {
    const platter = getParentEl('platterLabel');
    if (!platter) return;

    platter.style.backgroundColor = cover.style.backgroundColor;
    const old = platter.querySelector('img');
    if (old) old.remove();

    if (img && img.src) {
        const pc = document.createElement('img');
        pc.src = img.src;
        pc.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;border-radius:50%;';
        platter.insertBefore(pc, platter.querySelector('.platter-center'));
    }
}

function pickAlbum(key, slot, cover, img) {
    if (window.parent.getSelectedKey() === key) return;
    if (window.parent.getSelectedKey()) returnCard(false);
    window.parent.setSelectedKey(key);

    const album = albums.find(a => a.key === key);
    const slotRect = slot.getBoundingClientRect();

    slot.classList.add('is-selected');
    
    // LOCAL DOM updates (in iframe)
    document.getElementById('playerSection').classList.add('visible');
    document.getElementById('hint').style.opacity = '0';
    document.getElementById('overlay').classList.add('active');
    
    showPlayer(album);
    setPlatter(cover, img);

    // Animation logic
    requestAnimationFrame(() => {
        const target = getPlatterCenter();
        const flying = document.createElement('div');
        flying.className = 'flying-card';
        flying.style.cssText = `left:${slotRect.left}px;top:${slotRect.top}px;width:${CARD_W}px;height:${CARD_W}px;z-index:9999;`;
        
        const inner = document.createElement('div');
        inner.className = 'fc-inner';
        inner.style.backgroundColor = cover.style.backgroundColor;
        
        if (img.src) {
            const ic = document.createElement('img');
            ic.src = img.src;
            ic.style.cssText = 'width:100%;height:100%;object-fit:cover;';
            inner.appendChild(ic);
        }
        
        flying.appendChild(inner);
        document.body.appendChild(flying);

        requestAnimationFrame(() => {
            flying.style.transition = 'all 0.55s cubic-bezier(0.34,1.15,0.64,1)';
            flying.style.left = target.x + 'px';
            flying.style.top = target.y + 'px';
            flying.style.width = target.size + 'px';
            flying.style.height = target.size + 'px';
            flying.style.borderRadius = '50%';
        });

        setTimeout(() => {
            flying.remove();
            getParentEl('platterLabel').classList.add('spinning');
        }, 550);

        const path = `../../assets/music/Cole/${album.title}/J. Cole - ${album.tracks[0]}.mp3`;
        window.parent.currentlyPlayingTrack(album, album.tracks[0]);
        window.parent.loadTrack(path);
    });
}

function showPlayer(album) {
    document.getElementById('albumName').textContent = album.title;
    document.getElementById('albumYear').textContent = album.year;
    const list = document.getElementById('trackList');
    list.innerHTML = '';
    
    album.tracks.forEach((t, i) => {
        const div = document.createElement('div');
        div.className = 'track-item';
        div.onclick = () => {
            const path = `../../assets/music/Cole/${album.title}/J. Cole - ${t}.mp3`;
            window.parent.currentlyPlayingTrack(album, t);
            window.parent.loadTrack(path);
        };
        div.innerHTML = `<span class="track-num">${String(i+1).padStart(2,'0')}</span><span>${t}</span>`;
        list.appendChild(div);
    });
}


function returnCard(reset = true) {
  const key = window.parent.getSelectedKey();
  if (!key) return;
  if (reset) window.parent.setSelectedKey(null);

  const sd = window.parent.getSlotData().find(s => s.album.key === key);
  if (!sd) return;

  const platter = getParentEl('platterLabel');
  platter.classList.remove('spinning');

  const target = getPlatterCenter();
  const slotRect = sd.el.getBoundingClientRect();

  const flying = document.createElement('div');
  flying.className = 'flying-card';
  flying.style.cssText = `left:${target.x}px;top:${target.y}px;width:${target.size}px;height:${target.size}px;border-radius:50%;transition:none;`;

  const inner = document.createElement('div');
  inner.className = 'fc-inner';
  inner.style.backgroundColor = sd.cover.style.backgroundColor;
  if (sd.img && sd.img.src && sd.img.naturalWidth > 0) {
    const ic = document.createElement('img');
    ic.src = sd.img.src;
    ic.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
    inner.appendChild(ic);
  }
  flying.appendChild(inner);
  document.body.appendChild(flying);


  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      flying.style.transition = 'all 0.5s cubic-bezier(0.6,-0.2,0.8,0.6)';
      flying.style.left = slotRect.left + 'px';
      flying.style.top = slotRect.top+ 'px';
      flying.style.width = CARD_W + 'px';
      flying.style.height = CARD_W + 'px';
      flying.style.borderRadius = '3px';
    });
  });

  setTimeout(() => {
    flying.remove();
    sd.el.classList.remove('is-selected');
    sd.el.style.zIndex = sd.zIdx;
    sd.el.style.transform = `translateY(${0}px)`;
  }, 520);

  document.getElementById('playerSection').classList.remove('visible');
  document.getElementById('overlay').classList.remove('active');
  document.getElementById('hint').style.opacity = '1';
  platter.style.backgroundColor = '#111';
  const oldImg = platter.querySelector('img');
  if (oldImg) oldImg.remove();
}


function makeImg(src, fallbackColor) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  img.onerror = () => { img.style.display = 'none'; };
  return img;
}

function buildShelf() {
  const shelf = document.getElementById('shelf');
  const shelfWidth = shelf.offsetWidth; // Get the real width of the container
  
  // Calculate step dynamically based on available space
  // We subtract the width of the last card so the last one stays inside the right edge
  const step = (shelfWidth - CARD_W - CASSETTE_W) / (albums.length - 1);

  albums.forEach((album, i) => {
    const left = i * step;
    const zIdx = i + 1;

    const slot = document.createElement('div');
    slot.className = 'album-slot';
    slot.dataset.key = album.key;
    slot.style.left = left + 'px';
    slot.style.zIndex = zIdx;

    // ... (rest of your existing cover creation code)
    const cover = document.createElement('div');
    cover.className = 'cover';
    cover.style.backgroundColor = album.color;
    
    // Ensure the image path matches your project structure
    const img = makeImg(`../..//assets/img/albumCovers/${album.key}.jpg`, album.color);
    cover.appendChild(img);

    const lbl = document.createElement('div');
    lbl.className = 'cover-lbl';
    lbl.textContent = album.title;
    cover.appendChild(lbl);
    slot.appendChild(cover);

    slot.addEventListener('mouseenter', () => {
      if (slot.classList.contains('is-selected')) return;
      slot.style.transform = `translateY(${HOVER_DROP}px)`;
    });
    slot.addEventListener('mouseleave', () => {
      if (slot.classList.contains('is-selected')) return;
      slot.style.transform = '';
    });
    slot.addEventListener('click', () => pickAlbum(album.key, slot, cover, img));

    shelf.appendChild(slot);
    window.parent.pushSlotData({el: slot, cover, img, left, zIdx, album});
  });

  // Position the cassette at the far right
  const cassette = document.createElement('div');
  cassette.className = 'cassette-slot';
  cassette.style.right = '0px'; // Align to the right edge of the shelf
  cassette.innerHTML = `<div class="cassette-body"><div class="cassette-reel"></div><div class="cassette-reel"></div></div><div class="cassette-lbl">Singles</div>`;
  shelf.appendChild(cassette);
}


// Build visual shelf
buildShelf();


