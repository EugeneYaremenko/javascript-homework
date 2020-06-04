let counterValue = 0;

const counterValueRef = document.querySelector("#value");
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

const decrementFn = () => (counterValue -= 1);
const incrementFn = () => (counterValue += 1);

decrementBtnRef.addEventListener("click", () => {
  decrementFn();
  counterValueRef.textContent = counterValue;
});

incrementBtnRef.addEventListener("click", () => {
  incrementFn();
  counterValueRef.textContent = counterValue;
});
