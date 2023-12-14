document.addEventListener('DOMContentLoaded', () => {
  // 3D Box
  const canvasContainer = document.getElementById('canvas-container');
  const box = document.createElement('div');
  box.classList.add('box');
  canvasContainer.appendChild(box);

  // Speech Recognition
  const startListeningButton = document.getElementById('start-listening');
  const stopListeningButton = document.getElementById('stop-listening');
  const speechText = document.getElementById('speech-text');

  let recognition;

  const startListening = () => {
    recognition = new webkitSpeechRecognition();
    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      speechText.innerText = result;
    };
    recognition.start();
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  startListeningButton.addEventListener('click', startListening);
  stopListeningButton.addEventListener('click', stopListening);
});
