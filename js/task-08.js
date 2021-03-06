// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login - form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//     что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//     где имя поля будет именем свойства, а значение поля - значением свойства.Для доступа
//     к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector(".login-form");

const onFormSubmit = function (e) {
  e.preventDefault();

  const inputs = Array.from(e.currentTarget.elements).filter(
    (item) => item.tagName !== "BUTTON"
  );

  const objFormData = {};

  for (const input of inputs) {
    if (!input.value) {
      alert("Все поля должны быть заполнены!");
      return
    }
    objFormData[input.name] = input.value;
  }
  console.log(objFormData);
  formEl.reset();
};

formEl.addEventListener("submit", onFormSubmit);
