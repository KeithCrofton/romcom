

// Create variables targetting the relevant DOM elements here 👇
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var coverTitle = document.querySelector(".cover-title");
var coverImage = document.querySelector(".cover-image");
var randomButton = document.querySelector(".random-cover-button");
var homeButton = document.querySelector(".home-button");
var makeYourOwnCoverButton = document.querySelector(".make-new-button");
var viewSavedCoverButton = document.querySelector(".view-saved-cover");
var makeMyBookButton = document.querySelector(".create-new-book-button");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view")
var saveCoverButton = document.querySelector(".save-cover-button");
var savedCoversSection = document.querySelector(".saved-covers-section");
var viewSavedCoversButton = document.querySelector(".view-saved-button");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.onload = randomBookGenerator;

randomButton.addEventListener("click", randomBookGenerator);
makeYourOwnCoverButton.addEventListener("click", makeACover);
homeButton.addEventListener("click", takesYouHome);
viewSavedCoversButton.addEventListener("click", showSavedCovers);

// Create your event handlers and other functions here 👇
function makeACover() {
  homeView.classList.add("hidden");
  formView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
  randomButton.classList.add("hidden");
}
function takesYouHome() {
  homeView.classList.remove("hidden");
  formView.classList.add("hidden");
  savedView.classList.add("hidden");
  homeButton.classList.add("hidden");
  saveCoverButton.classList.remove("hidden");
  randomButton.classList.remove("hidden");
}
function showSavedCovers() {
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  savedView.classList.remove("hidden");
  savedCoversSection.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
  randomButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
}


function randomBookGenerator() {
  var coverIndex = getRandomIndex(covers);
  coverImage.src = covers[coverIndex];

  var titleIndex = getRandomIndex(titles);
  coverTitle.innerText = titles[titleIndex];

  var tag1Index = getRandomIndex(descriptors);
  tagline1.innerText = descriptors[tag1Index];

  var tag2Index = getRandomIndex(descriptors);
  tagline2.innerText = descriptors[tag2Index];

  currentCover = new Cover(covers[coverIndex], titles[titleIndex], descriptors[tag1Index], descriptors[tag2Index])
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
