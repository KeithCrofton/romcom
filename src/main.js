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
var formUserDescriptor1Input = document.querySelector(".user-desc1");
var formUserDescriptor2Input = document.querySelector(".user-desc2");

var savedCovers = [];
var currentCover;

window.onload = randomBookGenerator;

randomButton.addEventListener("click", randomBookGenerator);
makeYourOwnCoverButton.addEventListener("click", makeACover);
homeButton.addEventListener("click", takesYouHome);
viewSavedCoversButton.addEventListener("click", showSavedCovers);
formMakeMyBookButton.addEventListener("click", makeCustomBook);
saveCoverButton.addEventListener("click", saveHomeCover);
savedCoversSection.addEventListener("dblclick", deleteCover);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
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
  currentCover = new Cover(covers[coverIndex], titles[titleIndex], descriptors[tag1Index], descriptors[tag2Index]);
  }

function saveHomeCover() {
  if (isUniqueCover(currentCover) === true) {
  saveCover(currentCover.cover, currentCover.title, currentCover.tagline1, currentCover.tagline2);
  }
}

function isUniqueCover(check) {
  for (var i = 0; i < savedCovers.length; i++) {
    if ((check.cover === savedCovers[i].cover) &&
    (check.title === savedCovers[i].title) &&
    (check.tagline1 === savedCovers[i].tagline1) &&
    (check.tagline2 === savedCovers[i].tagline2)) {
      return false;
    }
  }
  return true;
}

function saveCover(cover, title, descriptor1, descriptor2) {
  savedCovers.push(new Cover(cover, title, descriptor1, descriptor2));
  displaySavedCovers();
}

function displaySavedCovers() {
  var coverHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
    coverHTML +=
    `<section class="saved-covers-section">
    <section class="mini-cover" data-id=${savedCovers[i].id}>
    <img class="cover-image" src=${savedCovers[i].cover}>
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>
    </section>`
  }
  savedCoversSection.innerHTML = coverHTML;
}

function makeCustomBook(event) {
  event.preventDefault();
  var userCover = formUserCoverInput.value;
  var userTitle = formUserTitleInput.value;
  var userDescriptor1 = formUserDescriptor1Input.value;
  var userDescriptor2 = formUserDescriptor2Input.value;
  pushCover(userCover, userTitle, userDescriptor1, userDescriptor2);
  displayCover(userCover, userTitle, userDescriptor1, userDescriptor2);
  clearForm();
  takesYouHome();
  currentCover = new Cover(userCover, userTitle, userDescriptor1, userDescriptor2);
}

function pushCover(cover, title, descriptor1, descriptor2) {
  covers.push(cover);
  titles.push(title);
  descriptors.push(descriptor1);
  descriptors.push(descriptor2);
}

function displayCover(cover, title, descriptor1, descriptor2) {
  coverImage.src = cover;
  coverTitle.innerText = title;
  tagline1.innerText = descriptor1;
  tagline2.innerText = descriptor2;
}

function clearForm() {
  formUserCoverInput.value = "";
  formUserTitleInput.value = "";
  formUserDescriptor1Input.value = "";
  formUserDescriptor2Input.value = "";
}

function takesYouHome() {
  homeView.classList.remove("hidden");
  formView.classList.add("hidden");
  savedView.classList.add("hidden");
  homeButton.classList.add("hidden");
  saveCoverButton.classList.remove("hidden");
  randomButton.classList.remove("hidden");
}

function makeACover() {
  homeView.classList.add("hidden");
  formView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
  randomButton.classList.add("hidden");
  savedView.classList.add("hidden");
}

function showSavedCovers() {
  savedCoversSection.innerHTML = "";
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  savedView.classList.remove("hidden");
  savedCoversSection.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
  randomButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  displaySavedCovers();
}

function deleteCover(event) {
  var bookToDelete = event.target.closest(".mini-cover");
    for (var i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].id == bookToDelete.dataset.id) {
        savedCovers.splice(i, 1);
      }
    }
    showSavedCovers();
}
