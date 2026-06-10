const totalVideos = 10; 
const folderPath = "../../assets/vids/JJK Exports/";

const selector = document.getElementById('video-selector');
const video = document.getElementById('main-video');
const download = document.getElementById('download-link');
const title = document.getElementById('version-title');

function init() {
    for (let i = totalVideos; i >= 1; i--) {
        const fileName = `try ${i}.mp4`;
        const option = document.createElement('option');
        option.value = folderPath + fileName;
        option.text = (i === totalVideos) ? `Version ${i} (Latest)` : `Version ${i}`;
        selector.appendChild(option);
    }
    updatePlayer(false); 
}

function updatePlayer(shouldPlay = true) {
    const selectedPath = selector.value;
    const selectedText = selector.options[selector.selectedIndex].text;

    video.src = selectedPath;
    video.muted = true; // Extra safety to keep it muted on swap
    download.href = selectedPath;
    title.innerText = "JJK: " + selectedText;

    if (shouldPlay) {
        video.play();
    }
}

init();