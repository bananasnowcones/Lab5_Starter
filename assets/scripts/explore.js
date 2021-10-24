// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  var speech = window.speechSynthesis;

  var voiceDropdown = document.querySelector('#voice-select');
  var voices = [];

  window.speechSynthesis.onvoiceschanged = function() {
    voices = speech.getVoices();
    for (var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name;
      option.setAttribute('lang', voices[i].lang);
      option.setAttribute('name', voices[i].name);
      option.setAttribute('voiceNum', i);
      voiceDropdown.appendChild(option);
    }
  }

  let voiceOption = 0;

  voiceDropdown.addEventListener('change', function() {
    let selectedVoice = voiceDropdown.value;
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].name == selectedVoice) {
        voiceOption = voices[i];
      }
    }
    console.log(voiceOption.name);
  });

  let words = "";

  let textBox = document.querySelector('#text-to-speak');
  textBox.addEventListener('change', function() {
    words = textBox.value;
  });

  let face = document.querySelector('img');

  let button = document.querySelector('button');
  button.addEventListener('click', function() {
    var toSpeak = new SpeechSynthesisUtterance(words);
    toSpeak.voice = voiceOption;
    speech.speak(toSpeak);
    while (speech.speaking) {
      face.setAttribute('src', 'assets/images/smiling-open.png');
    }
    face.setAttribute('src', 'smiling.png');
  })

  

}