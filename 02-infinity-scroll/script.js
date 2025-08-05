const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

let totalImages = 0;
let ready = false;
let imageLoaded = 0;

// Unsplash API
let count = 5;
const apiKey = "xLfLFkN3HJZwPkvzoJiLa3lop2HLt74W2eijOc8kQtY";
let apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function imagesLoaded() {
  imageLoaded++;
  if (imageLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 10;
    apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
  }
}

// display photos
function displayPhotos() {
  imageLoaded = 0;
  totalImages = photosArray.length;
  console.log("total Images: ", totalImages);
  // run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    // add event listener
    img.addEventListener("load", imagesLoaded);

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // catch error here
    console.log(error);
  }
}

// Function to check if the user has reached the bottom, load more images.
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
