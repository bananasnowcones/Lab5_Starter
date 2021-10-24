// expose.js
const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() {

  var audio = document.querySelector('audio');

  let dropdown = document.querySelector('#horn-select');
  dropdown.addEventListener('input', function() {
    let hornImage = document.querySelector('img[alt="No image selected"]');
    let hornChoice = dropdown.value;
    console.log(hornChoice);
    if (hornChoice == "air-horn"){
      hornImage.setAttribute('src', 'assets/images/air-horn.svg');
      audio.setAttribute('src', 'assets/audio/air-horn.mp3');
    }
    else if (hornChoice == "party-horn") {
      hornImage.setAttribute('src', 'assets/images/party-horn.svg');
      audio.setAttribute('src', 'assets/audio/party-horn.mp3');
      jsConfetti.addConfetti();
    }
    else if (hornChoice == "car-horn") {
      hornImage.setAttribute('src', 'assets/images/car-horn.svg');
      audio.setAttribute('src', 'assets/audio/car-horn.mp3');
    }
    else {
      hornImage.setAttribute('src', 'assets/images/no-image.png');
    }
    
  });

  var volume = document.querySelector('#volume-controls');
  var volImg = document.querySelector('img[alt="Volume level 2"]');
  volume.addEventListener('change', function() {
    let volumeLevel = volume.value;
    console.log(volume.value);
    if (volumeLevel == 0) {
      volImg.setAttribute('src', 'assets/icons/volume-level-0.svg');
      audio.volume = 0;
    } else if (volumeLevel < 33) {
      volImg.setAttribute('src', 'assets/icons/volume-level-1.svg');
      audio.volume = volumeLevel/100;
    } else if (volumeLevel < 67) {
      volImg.setAttribute('src', 'assets/icons/volume-level-2.svg');
      audio.volume = volumeLevel/100;
    } else {
      volImg.setAttribute('src', 'assets/icons/volume-level-3.svg');
      audio.volume = volumeLevel/100;
      if (volumeLevel > 100) {
        audio.volume = 1;
      }
    }
  });

  let button = document.querySelector('button');
  button.addEventListener('click', function() {
    audio.play();
  });



}
