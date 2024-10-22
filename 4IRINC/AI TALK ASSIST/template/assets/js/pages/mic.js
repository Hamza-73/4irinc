let playButton = document.querySelector(".mic");
let visualizer = document.querySelector(".visualizer");
let playIcon = document.querySelector(".mic i");
const playText = document.querySelector('.mic_text');

let audioContext, analyser, dataArray, source;
let isPlaying = false;
let isLoading = false; // Flag to check if the audio is loading

// Audio file URL - replace with your actual audio file URL
const audioFileURL = '/assets/audio/heather-audio.wav';

playButton.addEventListener("click", function () {
    if (isLoading) {
        stopLoading(); // Stop loading if clicked during loading
    } else if (!isPlaying) {
        startPlayback();
    } else {
        stopPlayback();
    }
});

function startPlayback() {
    // Set loading state
    isLoading = true;

    // Change icon to loading spinner and show loading text
    playIcon.className = 'fas fa-spinner fa-spin'; // Replace mic icon with spinner
    playText.textContent = 'Loading...'; // Show 'Loading...' text

    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256; // Adjust this for more or fewer bars
    dataArray = new Uint8Array(analyser.frequencyBinCount);

    fetch(audioFileURL)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
            if (!isLoading) return; // If loading is stopped, prevent playback

            source = audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(analyser);
            analyser.connect(audioContext.destination);

            source.start(0);
            isPlaying = true;
            isLoading = false; // Reset loading state after audio starts

            visualizer.style.display = 'block';
            playIcon.style.display = 'none'; // Hide icon when audio starts
            playText.textContent = '....'; // Clear 'Loading...' text after loading

            draw();

            source.onended = () => {
                stopPlayback();
            };
        })
        .catch(error => {
            console.error('Error loading audio file:', error);
            playText.textContent = 'Error loading audio';
            playIcon.className = 'fas fa-exclamation-triangle'; // Show error icon on failure
            isLoading = false; // Reset loading state on error
        });
}

function stopLoading() {
    // Stop any loading processes and reset to default
    isLoading = false;
    isPlaying = false;
    visualizer.style.display = 'none';
    playIcon.className = 'fas fa-microphone'; // Reset to microphone icon
    playIcon.style.display = 'block';
    playText.textContent = 'Give it a try'; // Reset text
}

function stopPlayback() {
    if (source) {
        source.stop();
    }
    if (audioContext) {
        audioContext.close();
    }
    visualizer.style.display = 'none';
    playIcon.className = 'fas fa-microphone'; // Reset to microphone icon
    playIcon.style.display = 'block';
    isPlaying = false;
    playText.textContent = 'Give it a try';
}

function draw() {
    if (!isPlaying) return;

    requestAnimationFrame(draw);

    analyser.getByteFrequencyData(dataArray);

    let ctx = visualizer.getContext('2d');
    ctx.clearRect(0, 0, visualizer.width, visualizer.height);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;

    let barWidth = visualizer.width / dataArray.length;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
        let barHeight = (dataArray[i] / 255) * visualizer.height;

        ctx.beginPath();
        ctx.moveTo(x, visualizer.height / 2);
        ctx.lineTo(x, visualizer.height / 2 - barHeight / 2);
        ctx.moveTo(x, visualizer.height / 2);
        ctx.lineTo(x, visualizer.height / 2 + barHeight / 2);
        ctx.stroke();

        x += barWidth;
    }
}

// Set default text when the page loads
window.addEventListener('load', () => {
    playText.textContent = 'Give it a try';
    playIcon.className = 'fas fa-microphone';
});
