function createBookCard(imgSrc, title, date, tiktokLink) {
    const grid = document.querySelector('.book-grid');

    const cardHTML = `
        <div class="book-card">
            <div class="image-frame">
                <img src="${imgSrc}" alt="${title}" class="book-img">
            </div>
            <div class="book-info">
                <h3 class="mrmen-title">${title}</h3>
                <p class="date-read">Read on: ${date}</p>
                <a href="${tiktokLink}" target="_blank" class="tiktok-link">View on TikTok</a>
            </div>
        </div>
    `;

    // This adds the new card to the end of your grid
    grid.innerHTML += cardHTML;
}

// --- HOW TO USE IT ---
// You just call it like this for every new book:
createBookCard("../../assets/img/thumbnails/tickledragonM.png", "Mr. Tickle and the Dragon", "22/04/2026", "https://www.tiktok.com/@carpenterhethan/video/7631323781679582487?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/worryM.png", "Mr. Worry", "21/04/2026", "https://www.tiktok.com/@carpenterhethan/video/7630993335041199382?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/sneezeM.png", "Mr. Sneeze", "20/04/2026", "https://www.tiktok.com/@carpenterhethan/video/7630278330276695318?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/meanM.png", "Mr. Mean", "29/09/2024", "https://www.tiktok.com/@carpenterhethan/video/7420166030544080161?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/wrongM.png", "Mr. Wrong", "02/09/2024", "https://www.tiktok.com/@carpenterhethan/video/7409919895984524577?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/messyM.png", "Mr. Messy", "14/08/2024", "https://www.tiktok.com/@carpenterhethan/video/7402810073946311969?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/cheerfulM.png", "Mr. Cheerful", "22/07/2024", "https://www.tiktok.com/@carpenterhethan/video/7394560121919065376?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/happyM.png", "Mr. Happy", "19/07/2024", "https://www.tiktok.com/@carpenterhethan/video/7393476865886932257?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/tickleM.png", "Mr. Tickle", "15/07/2024", "https://www.tiktok.com/@carpenterhethan/video/7391665812131679520?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/daydreamM.png", "Mr. Daydream", "11/07/2024", "https://www.tiktok.com/@carpenterhethan/video/7390343581187263776?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/strongM.png", "Mr. Strong", "06/07/2024", "https://www.tiktok.com/@carpenterhethan/video/7388372203382836513?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/bumpM.png", "Mr. Bump", "05/07/2024", "https://www.tiktok.com/@carpenterhethan/video/7388135547564215584?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/quietM.png", "Mr. Quiet", "03/07/2024", "https://www.tiktok.com/@carpenterhethan/video/7387373489499491616?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");
createBookCard("../../assets/img/thumbnails/braveM.png", "Mr. Brave", "01/07/2024", "https://www.tiktok.com/@carpenterhethan/video/7386445024902335776?is_from_webapp=1&sender_device=pc&web_id=7612023730004526614");