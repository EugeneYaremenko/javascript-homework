const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("change", handleInputChange);

function handleInputChange(event) {
  if (event.target.value.length > 6) {
    inputRef.classList.add("invalid");
  }

  if (event.target.value.length <= 6) {
    inputRef.classList.replace("invalid", "valid");
  }

  inputRef.classList.add("valid");
}
