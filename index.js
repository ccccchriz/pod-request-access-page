const form = document.getElementById("form");
const input = document.getElementById("email");
const error = document.getElementById("error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  error.textContent = "";

  if (input.value == "") {
    error.textContent = "Please add your email!";
  } else if (!/.+\@.+\..+/.test(input.value)) {
    error.textContent = "Please check your email!";
  } else {
    input.value = "";
  }
});
