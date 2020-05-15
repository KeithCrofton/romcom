

// Create variables targetting the relevant DOM elements here 👇
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var coverTitle = document.querySelector(".cover-title");
var coverImage = document.querySelector(".cover-image");
var randomButton = document.querySelector(".random-cover-button");


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImage.src , coverTitle.innerText, tagline1.innerText, tagline2.innerText)


// Add your event listeners here 👇



window.onload = randomBookGenerator;

randomButton.addEventListener('click', randomBookGenerator);

// Create your event handlers and other functions here 👇
function randomTitle(){
  var titleRandom = getRandomIndex(titles);
  coverTitle.innerText = titles[titleRandom];
}

function randomCoverImage(){
  var coverRandom = getRandomIndex(covers);
  coverImage.src = covers[coverRandom];
}

function randomDescriptor1(){
  var tag1Random = getRandomIndex(descriptors);
  tagline1.innerText = descriptors[tag1Random];
}

function randomDescriptor2(){
  var tag2Random = getRandomIndex(descriptors);
  tagline2.innerText = descriptors[tag2Random];
}

function randomBookGenerator() {
  randomTitle();
  randomCoverImage();
  randomDescriptor1();
  randomDescriptor2();
  }





// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// function getRandomIndex(array) {
//   var i = Math.floor(Math.random() * array.length);
//   return array[i]
// }
// works for titles, descriptors (returns one),covers
