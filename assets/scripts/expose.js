// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  /*
    var img = document.createElement('img');
    img.src = 'air-horn.svg';
    var audio = document.createElement('audio');
    audio.src = 'sit=horn-mp3';
  */

  //1. Add event listener function for when drop down is clicked
  //2. inside we can make sure the image displays and audio sets

  //3. Add event listener function for volume slider
  //4. Specify volume icon

  //5. Play sound event listener function
  //6. Sound plays, gif plays

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