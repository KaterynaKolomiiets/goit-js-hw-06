// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const incrEl = document.querySelector('button[data-action="increment"]');
const decrEl = document.querySelector('button[data-action="decrement"]');
const counterEl = document.querySelector("#value");

let counterValue = 0;

const onIncrease = function () {
  counterValue++;
  counterEl.textContent = counterValue;
};

const onDecrease = function () {
  counterValue--;
  counterEl.textContent = counterValue;
};

incrEl.addEventListener("click", onIncrease);
decrEl.addEventListener("click", onDecrease);
