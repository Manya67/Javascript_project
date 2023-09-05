const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const generateRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
btn.addEventListener("click", function () {
  const random_number = generateRandomNumber();
  document.body.style.backgroundColor = colors[random_number];
  color.textContent = colors[random_number];
});
