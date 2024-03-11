document.querySelector("#write-post-btn").addEventListener("click", () => {
  // redirect to /create.html
  window.location.href = "/create.html";
});

document.querySelector("#save-draft-btn").addEventListener("click", () => {
  // redirect to /create.html
  window.location.href = "/manage.html";
});

document.querySelector("#publish-btn").addEventListener("click", () => {
  // redirect to /create.html
  window.location.href = "/manage.html";
});

const profile = document.querySelector(".profile");
const dropdown = document.querySelector(".dropdown-menu");

profile.addEventListener("click", (event) => {
  // Toggle the 'show' class instead of directly manipulating the style
  dropdown.classList.toggle("show");
  event.stopPropagation();
});

document.addEventListener("click", () => {
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  }
});
