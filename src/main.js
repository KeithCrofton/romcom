

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
var currentCover;

// Add your event listeners here 👇
randomButton.addEventListener("click", randomBookGenerator;


// Create your event handlers and other functions here 👇
function randomBookGenerator(){
  tagline1.innerText = descriptors.getRandomIndex();
  tagline1.innerText = descriptors.getRandomIndex();
  coverTitle.innerText = titles.getRandomIndex();
  coverImage.innerText = covers.getRandomIndex();

}

// function randomBookGenerator() {
//   new Cover (coverImgSrc, title, descriptor1, descriptor2)
//       this.id = Date.now();
//       this.cover = covers.getRandomIndex(covers)
//       this.title = titles.getRandomIndex(titles)
//       this.tagline1 = descriptors.getRandomIndex(descriptor1)
//       this.tagline2 = descriptors.getRandomIndex(descriptor2)
    // }



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// function getRandomIndex(array) {
//   var i = Math.floor(Math.random() * array.length);
//   return array[i]
// }
// works for titles, descriptors (returns one),covers
