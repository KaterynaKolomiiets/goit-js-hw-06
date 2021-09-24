// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.
//   Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorEl = document.querySelector(".change-color");
const colorValueEl = document.querySelector(".color");

const changeOnClick = function () {
  const randomColor = getRandomHexColor();
  colorValueEl.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
};
changeColorEl.addEventListener("click", changeOnClick);
