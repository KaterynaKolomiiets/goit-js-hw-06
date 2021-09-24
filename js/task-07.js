// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const sliderEl = document.querySelector("#font-size-control");
const textFieldEl = document.querySelector("#text");

const onRangeChange = function (e) {
  textFieldEl.style.fontSize = `${parseInt(e.currentTarget.value)}px`;
};

sliderEl.addEventListener("input", onRangeChange);
