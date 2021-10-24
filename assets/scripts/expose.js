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


var dropdown = document.querySelectorAll('select')[0];
console.log(dropdown);
dropdown.addEventListener('change', function() {
  let hornImage = document.querySelectorAll('img[alt="No image selected"]');
  let hornChoice = dropdown.options;
  
  if (hornChoice.value == "air-horn"){
    hornImage.setAttribute("src", "air-horn.svg");
  }
  else if (hornChoice.value == "party-horn") {
    hornImage.setAttribute("src", "party-horn.svg");
  }
  else if (hornChoice.value == "car-horn") {
    hornImage.setAttribute("src", "car-horn.svg");
  }
  else {
    hornImage.setAttribute("src", "assets/images/no-image.png");
  }
 
})

}