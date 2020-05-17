

// Create variables targetting the relevant DOM elements here 👇
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");
var coverTitle = document.querySelector(".cover-title");
var coverImage = document.querySelector(".cover-image");
var randomButton = document.querySelector(".random-cover-button");
var homeButton = document.querySelector(".home-button");
var makeYourOwnCoverButton = document.querySelector(".make-new-button");
var viewSavedCoverButton = document.querySelector(".view-saved-cover");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view")
var saveCoverButton = document.querySelector(".save-cover-button");
var savedCoversSection = document.querySelector(".saved-covers-section");
var viewSavedCoversButton = document.querySelector(".view-saved-button");
var formMakeMyBookButton = document.querySelector(".create-new-book-button");
var formUserCoverInput = document.querySelector(".user-cover");
var formUserTitleInput = document.querySelector(".user-title");
var formUserDescript1Input = document.querySelector(".user-desc1");
var formUserDescript2Input = document.querySelector(".user-desc2");

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
formMakeMyBookButton.addEventListener("click", formUserMakeBook);
saveCoverButton.addEventListener("click", saveHomeCover);

// Create your event handlers and other functions here 👇
function saveHomeCover(){
  saveCover(currentCover.title,
            currentCover.cover,
            currentCover.tagline1,
            currentCover.tagline2);
}

function isUniqueCover(currentCover){
  for (var i = 0; i < savedCovers.length; i++) {
    if((currentCover.title === savedCovers[i].title) &&
    (currentCover.cover === savedCovers[i].cover) &&
    (currentCover.descr1 === savedCovers[i].descr1) &&
    (currentCover.descr2 === savedCovers[i].descr2));
return false;
  };
}

function formUserMakeBook(event) {
  event.preventDefault();
  var userCover = formUserCoverInput.value;
  var userTitle = formUserTitleInput.value;
  var userDescr1 = formUserDescript1Input.value;
  var userDescr2 = formUserDescript2Input.value;
  pushCover(userCover, userTitle, userDescr1, userDescr2);
  //saveCover(userCover, userTitle, userDescr1, userDescr2);
  displayCover(userCover, userTitle, userDescr1, userDescr2);
  clearForm();
  takesYouHome();
  currentCover = new Cover(userCover, userTitle, userDescr1, userDescr2);
}

function saveCover(cover, title, desc1, desc2){
  savedCovers.push(new Cover(cover, title, desc1, desc2));
}

function clearForm(){
  formUserCoverInput.value = "";
  formUserTitleInput.value = "";
  formUserDescript1Input.value = "";
  formUserDescript2Input.value = "";
}

function pushCover(cover, title, desc1, desc2){
  covers.push(cover);
  titles.push(title);
  descriptors.push(desc1);
  descriptors.push(desc2);
}

function displayCover(cover, title, descriptor1, descriptor2){
  coverImage.src = cover;
  coverTitle.innerText = title;
  tagline1.innerText = descriptor1;
  tagline2.innerText = descriptor2;
}

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
