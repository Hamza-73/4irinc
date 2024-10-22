// // // ==================MIC CODE 

let mic = document.querySelector(".mic");
let visualizer = document.querySelector(".visualizer");
let micIcon = document.querySelector(".mic i");
const micText = document.querySelector('.mic_text')

let audioContext, analyser, dataArray, source;
let isRecording = false;

mic.addEventListener("click", function () {
    if (!isRecording) {
        startRecording();
    } else {
        stopRecording();
    }
});

function startRecording() {
    micText.textContent = 'Listening!'
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            source = audioContext.createMediaStreamSource(stream);
            source.connect(analyser);
            analyser.fftSize = 256;
            dataArray = new Uint8Array(analyser.frequencyBinCount);

            visualizer.style.display = 'block';
            micIcon.style.display = 'none';
            isRecording = true;

            draw();
        })
        .catch(function (err) {
            console.error('Error accessing microphone:', err);
        });
}

function stopRecording() {
    if (audioContext) {
        audioContext.close();
        micText.textContent = 'Give it a try!'
    }
    visualizer.style.display = 'none';
    micIcon.style.display = 'block';
    isRecording = false;
}
function draw() {
    if (!isRecording) return;

    requestAnimationFrame(draw);

    analyser.getByteFrequencyData(dataArray);

    let ctx = visualizer.getContext('2d');
    ctx.clearRect(0, 0, visualizer.width, visualizer.height);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;

    let barWidth = visualizer.width / dataArray.length;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
        let barHeight = (dataArray[i] / 255) * (visualizer.height / 2);

        ctx.beginPath();
        ctx.moveTo(x, visualizer.height / 2 - barHeight);
        ctx.lineTo(x, visualizer.height / 2 + barHeight);
        ctx.stroke();

        x += barWidth;
    }
}

var vapiInstance = null;
        const assistant = "188cb978-f0a6-4a63-a787-6b2d571a5900"; // Replace with your assistant ID
        const apiKey = "5b4a8f5d-5463-4be3-be41-f484e8516043"; // Replace with your Public key from Vapi Dashboard

        (function (d, t) {
            console.log("t is ",t)
            var g = document.createElement(t),
                s = d.getElementsByTagName(t)[0];
            g.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
            g.defer = true;
            g.async = true;
            console.log("s is actualyy", s)
            console.log("s is actualyy", s.parentNode)
            s.parentNode.insertBefore(g, s);
            // document.getElementById("mic_div").appendChild(g)
            // console.log(document.getElementById("mic_div"))
            console.log("g is ",g)
            console.log("s is ",s)
            

            g.onload = function () {
                vapiInstance = window.vapiSDK.run({
                    apiKey: apiKey,
                    assistant: assistant,
                    config: {
                        hideButton: true
                    }
                });

                // Add click event listener to your microphone button
                document.getElementById('vapiButton').addEventListener('click', function () {
                    console.log("clicked")
                    if (vapiInstance) {
                        vapiInstance.start();
                    }
                });

                vapiInstance.on('speech-start', () => {
                    console.log('Speech has started');
                });

                vapiInstance.on('speech-end', () => {
                    console.log('Speech has ended');
                });
                // Optional: Add event listeners
                vapiInstance.on('call-start', () => {
                    console.log('Call has started');
                    // You can add code here to change the microphone button appearance
                    document.getElementById('vapiButton').classList.add('active');
                });

                vapiInstance.on('call-end', () => {
                    console.log('Call has stopped');
                    // You can add code here to reset the microphone button appearance
                    document.getElementById('vapiButton').classList.remove('active');
                });
            };
        })(document, "script");



// =============TESTING CODE===============

// var vapiInstance = null;

// const assistant = {
//     model: {
//         provider: "openai",
//         model: "gpt-3.5-turbo",
//         systemPrompt:
//             "You're a versatile AI assistant named Vapi who is fun to talk with.",
//     },
//     voice: {
//         provider: "11labs",
//         voiceId: "paula",
//     },
//     firstMessage: "Hi, I am Vapi how can I assist you today?",
// };
// const assistant = "188cb978-f0a6-4a63-a787-6b2d571a5900";

// const apiKey = "5b4a8f5d-5463-4be3-be41-f484e8516043"; // Substitute with your Public key from Vapi Dashboard.
// const buttonConfig = {
//     position: "bottom-right", // "bottom" | "top" | "left" | "right" | "top-right" | "top-left" | "bottom-left" | "bottom-right"
//     offset: "40px", // decide how far the button should be from the edge
//     width: "50px", // min-width of the button
//     height: "50px", // height of the button
//     idle: { // button state when the call is not active.
//       color: `rgb(93, 254, 202)`, 
//       type: "pill", // or "round"
//       title: "Have a quick question?", // only required in case of Pill
//       subtitle: "Talk with our AI assistant", // only required in case of pill
//       icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
//     },
//     loading: { // button state when the call is connecting
//       color: `rgb(93, 124, 202)`,
//       type: "pill", // or "round"
//       title: "Connecting...", // only required in case of Pill
//       subtitle: "Please wait", // only required in case of pill
//       icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
//     },
//     active: { // button state when the call is in progress or active.
//       color: `rgb(255, 0, 0)`,
//       type: "pill", // or "round"
//       title: "Call is in progress...", // only required in case of Pill
//       subtitle: "End the call.", // only required in case of pill
//       icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
//     },
//   };
  

// (function (d, t) {
//     var g = document.createElement(t),
//         s = d.getElementsByTagName(t)[0];
//     g.src =
//         "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
//     g.defer = true;
//     g.async = true;
//     s.parentNode.insertBefore(g, s);

//     g.onload = function () {
//         vapiInstance = window.vapiSDK.run({
//             apiKey: apiKey, // mandatory
//             assistant: assistant, // mandatory
//             config: buttonConfig, // optional
//         });
//     };
// })(document, "script");



