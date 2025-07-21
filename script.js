function speakMessage() {
  const message = "Bienvenido al portal de sanación. Tu clon espiritual te acompaña. Respira y escucha.";
  const speech = new SpeechSynthesisUtterance(message);
  speech.lang = "es-MX";
  speech.pitch = 1;
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}

window.addEventListener('load', () => {
  speakMessage();
});