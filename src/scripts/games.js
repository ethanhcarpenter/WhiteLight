// ============================================================
//  ADD YOUR GAMES HERE
//  Each game needs:
//    title   - name shown on the card
//    href    - link to the game
//
//  Optional:
//    credit  - who made it (shown as "by Name")
//    thumb   - path to a thumbnail image
//    emoji   - fallback icon if no thumb (default 🎮)
//    section - group name. Games with the same section are
//              grouped together. Omit for "Featured" at top.
// ============================================================
const GAMES = [

    // ── Custom games (no section = Featured) ──────────────────
    {
        title:  "Pacman",
        credit: "Me",
        href:   "../../games/pacman/index.html",
        thumb:  "../../assets/img/games/pacman.png",
        emoji:  "👾",
    },
    {
        title:  "Who Is Pine?",
        credit: "Antoni",
        href:   "../../games/Who Is Pine/game/index.html",
        thumb:  "../../assets/img/games/pine.png",
        emoji:  "🌲",
    },
    {
        title:  "im your evil daddy",
        credit: "Nat",
        href:   "../../games/evil/index.html",
        thumb:  "../../assets/img/games/evil.png",
        emoji:  "😈",
    },

    // ── Riddle School ─────────────────────────────────────────
    {
        title:   "Riddle School 1",
        section: "Riddle School",
        href:    "../../src/pages/flash.html?game=../../../games/flash/riddle/riddleschool.swf",
        emoji:   "🏫",
    },
    {
        title:   "Riddle School 2",
        section: "Riddle School",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/riddle/riddleschool2.swf",
        emoji:   "🏫",
    },
    {
        title:   "Riddle School 3",
        section: "Riddle School",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/riddle/riddleschool3.swf",
        emoji:   "🏫",
    },
    {
        title:   "Riddle School 4",
        section: "Riddle School",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/riddle/riddleschool4.swf",
        emoji:   "🏫",
    },
    {
        title:   "Riddle School 5",
        section: "Riddle School",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/riddle/riddleschool5.swf",
        emoji:   "🏫",
    },
    {
        title:   "Riddle School 5",
        section: "Riddle School",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/riddle/riddleschool5.swf",
        emoji:   "🏫",
    },
    {
        title:   "Riddle School Transfer",
        section: "Riddle School",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/riddle/riddletransfer.swf",
        emoji:   "🏫",
    },
    {
        title:   "Riddle School Transfer 2",
        section: "Riddle School",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/riddle/riddletransfer2.swf",
        emoji:   "🏫",
    },


    // ── Bloons ────────────────────────────────────────────────
    {
        title:   "Bloons",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloons.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons 2",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloons2.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons 2 Spring",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloons2spring.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons 2 Xmas",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloons2xmas.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons Insanity",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonsinsanity.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons Player Pack 1",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonspp1.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons Player Pack 2",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonspp2.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons Player Pack 3",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonspp3.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons Player Pack 4",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonspp4.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons Player Pack 5",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonspp5.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons Super Monkey",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonssupermonkey.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons TD ",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonstd.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons TD 2",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonstd2.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons TD 3",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonstd3.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons TD 4",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonstd4.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons TD 5",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonstd5.swf",
        emoji:   "🎈",
    },
    {
        title:   "Bloons TD Battles",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/bloonstdbattles.swf",
        emoji:   "🎈",
    },
    {
        title:   "More Bloons",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/morebloons.swf",
        emoji:   "🎈",
    },
    {
        title:   "Even More Bloons",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/evenmorebloons.swf",
        emoji:   "🎈",
    },
    {
        title:   "Hot Air Bloons",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/hotairbloons.swf",
        emoji:   "🎈",
    },
    {
        title:   "Pop Three",
        section: "Bloons",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloons/popthree.swf",
        emoji:   "🎈",
    },

    // ── Henry Stickmin ────────────────────────────────────────
    {
        title:   "Crossing the Pit",
        section: "Henry Stickmin",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/henry/pit.swf",
        emoji:   "🏃",
    },
    {
        title:   "Breaking the Bank",
        section: "Henry Stickmin",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/henry/bank.swf",
        emoji:   "🏃",
    },
    {
        title:   "Escaping the Prison",
        section: "Henry Stickmin",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/henry/prison.swf",
        emoji:   "🏃",
    },
    {
        title:   "Stealing the Diamond",
        section: "Henry Stickmin",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/henry/diamond.swf",
        emoji:   "🏃",
    },
    {
        title:   "Infiltrating the Airship",
        section: "Henry Stickmin",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/henry/airship.swf",
        emoji:   "🏃",
    },
    {
        title:   "Fleeing the Complex",
        section: "Henry Stickmin",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/henry/complex.swf",
        emoji:   "🏃",
    },
    
    // ── Mario ─────────────────────────────────────────────────
    {
        title:   "Super Mario Flash",
        section: "Mario",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/mario/super-mario.swf",
        emoji:   "🍄",
    },

    // ── Papers Please ─────────────────────────────────────────
    {
        title:   "Papers Please",
        section: "Papers Please",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/papers/papersplease2.swf",
        emoji:   "📋",
    },
    {
        title:   "Unsolicited",
        section: "Papers Please",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/papers/unsolicited.swf",
        emoji:   "📋",
    },

    // ── Misc ──────────────────────────────────────────────────
    {
        title:   "Bloxorz",
        section: "Misc",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/bloxorz_0.swf",
        emoji:   "🟫",
    },
    {
        title:   "Desktop Tower Defense",
        section: "Misc",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/DesktopTowerDefence.swf",
        emoji:   "🗼",
    },
    {
        title:   "Meat Boy",
        section: "Misc",
        href:    "../../src/pages/flash.html?game=../../../../games/flash/meatboy.swf",
        emoji:   "🩸",
    },

 

];
// ============================================================


function makeCard(game) {
    const a = document.createElement('a');
    a.className = 'game-card';
    a.href = game.href;
    a.target = 'content-frame';

    const thumb = document.createElement('div');
    thumb.className = 'thumbnail';
    if (game.thumb) {
        const img = document.createElement('img');
        img.src = game.thumb;
        img.alt = game.title;
        img.onerror = () => { thumb.removeChild(img); thumb.textContent = game.emoji || '🎮'; };
        thumb.appendChild(img);
    } else {
        thumb.textContent = game.emoji || '🎮';
    }

    const info = document.createElement('div');
    info.className = 'game-info';
    info.innerHTML = `
        <p class="game-title">${game.title}</p>
        ${game.credit ? `<p class="game-credit">by <span>${game.credit}</span></p>` : ''}
    `;

    a.appendChild(thumb);
    a.appendChild(info);
    return a;
}

function makeSection(name) {
    const label = document.createElement('div');
    label.className = 'section-label';
    label.textContent = name;
    const grid = document.createElement('div');
    grid.className = 'game-grid';
    document.body.appendChild(label);
    document.body.appendChild(grid);
    return grid;
}

// Group games by section, preserving insertion order
const sections = {};
for (const game of GAMES) {
    const key = game.section || '__featured__';
    if (!sections[key]) sections[key] = [];
    sections[key].push(game);
}

// Featured first, then the rest in the order they appear
const order = ['__featured__', ...Object.keys(sections).filter(k => k !== '__featured__')];
for (const key of order) {
    if (!sections[key]) continue;
    const grid = makeSection(key === '__featured__' ? '★ Featured' : key);
    for (const game of sections[key]) grid.appendChild(makeCard(game));
}