// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.При нажатии на кнопку Очистить,
//     коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector("[data-create]");
const destBtnEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input[type=number]");
const boxesEl = document.querySelector("#boxes");
const minValue = Number(inputEl.getAttribute("min"));
const maxValue = Number(inputEl.getAttribute("max"));

const getValue = function () {
  let value = Number(inputEl.value);

  if (value > maxValue || value < minValue) {
    alert(`Ввведите число в диапазоне от ${minValue} до ${maxValue}`);
    return;
  }
  createBoxes(value);
};

const createBoxes = function (value) {
  let height = 30;
  let width = 30;

  for (let i = 0; i < value; i++) {
    let el = document.createElement("div");
    el.style.backgroundColor = getRandomHexColor();
    el.style.height = `${height}px`;
    el.style.width = `${height}px`;
    el.style.border = "1px dashed black"

    height += 10;
    width += 10;

    boxesEl.append(el);
  }
};

const removeBoxes = function () {
  boxesEl.textContent = "";
};

createBtnEl.addEventListener("click", getValue);
destBtnEl.addEventListener("click", removeBoxes);
