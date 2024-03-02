const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

document
  .querySelector("#drop-area")
  .addEventListener("dragover", function (event) {
    event.preventDefault();
    event.stopPropagation();
  });

document.querySelector("#drop-area").addEventListener("drop", function (event) {
  event.preventDefault();
  event.stopPropagation();
  handleFiles(event.dataTransfer.files);
});

function handleFiles(files) {
  if (files.length > 0) {
    const file = files[0];
    if (file.type.match(/image\/png|image\/jpeg|image\/webp/)) {
      const reader = new FileReader();
      reader.onloadend = function (e) {
        document.querySelector("#preview-img").style.backgroundImage =
          "url(" + e.target.result + ")";
        document.querySelector("#preview").style.display = "block";
        document.querySelector(".drop-area-label").style.display = "none";
      };
      reader.readAsDataURL(file);
    }
    // Ignore other files
  }
}

// Add an event listener for the remove button
document.querySelector("#removeButton").addEventListener("click", function () {
  document.querySelector("#preview-img").style.backgroundImage = ""; // Clear the background image
  document.querySelector("#preview").style.display = "none"; // Hide the preview area
  document.querySelector(".drop-area-label").style.display = "block";
});
