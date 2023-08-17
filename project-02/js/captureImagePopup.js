function captureImagePopupAllfn() {
  const captureImageButton = document.querySelector("#captureImage");
  const streamingVideo = document.querySelector("#streamingVideo");
  const captureCanvas = document.querySelector("#captureCanvas");

  navigator.mediaDevices
    .getUserMedia({
      video: {
        facingMode: "environment",
      },
    })
    .then((stream) => {
      streamingVideo.style.height = "70vh";
      streamingVideo.srcObject = stream;
    });

  streamingVideo.addEventListener("canplay", function () {
    captureCanvas.width = streamingVideo.videoWidth;
    captureCanvas.height = streamingVideo.videoHeight;
  });

  captureImageButton.addEventListener("click", function () {
    const ctx = captureCanvas.getContext("2d");
    const stream = streamingVideo.srcObject;
    const tracks = stream.getTracks();

    captureCameraSnap.style.display = "none";
    snapTitle.style.display = "none";
    dashedBox.classList.remove("p-5");
    ctx.drawImage(streamingVideo, 0, 0);

    const img = captureCanvas.toDataURL("image/png");
    document.querySelector("#preview").src = img;
    location.hash = "#artistAddNewItemPage";
    captureImage = img;
    tracks.forEach((track) => {
      track.stop();
    });
  });
}
