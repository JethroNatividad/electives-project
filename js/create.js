function handleFiles(files) {
  if (files.length > 0) {
    const file = files[0];
    if (file.type.match(/image\/png|image\/jpeg|image\/webp/)) {
      const reader = new FileReader();
      reader.onloadend = function (e) {
        document.getElementById("preview").style.backgroundImage =
          "url(" + e.target.result + ")";
        document.getElementById("preview").style.display = "block";
        document.getElementById("removeButton").style.display = "block"; // Show the remove button
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file (PNG, JPG, JPEG, or WEBP).");
    }
  }
}

// Add an event listener for the remove button
document.getElementById("removeButton").addEventListener("click", function () {
  document.getElementById("preview").style.backgroundImage = ""; // Clear the background image
  document.getElementById("preview").style.display = "none"; // Hide the preview area
  document.getElementById("removeButton").style.display = "none"; // Hide the remove button
});
