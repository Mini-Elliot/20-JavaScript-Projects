// JavaScript goes here
const videoElement = document.getElementById("video");
const btn = document.getElementById("button");

async function getMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(`Whoops, Error here: ${error}`);
  }
}

btn.addEventListener("click", async () => {
  // disable button
  btn.disabled = true;
  // Request picture in picture
  videoElement.requestPictureInPicture();
  // Enable button
  btn.disabled = false;
});

getMediaStream();
