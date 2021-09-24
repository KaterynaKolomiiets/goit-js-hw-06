// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const target = document.querySelector("#ingredients");

const createElements = function (tag, arr, className, target) {
  const newItems = arr.map((item) => {
    const li = document.createElement(tag);
    li.textContent = item;
    li.classList.add(`${className}`);
    return li;
  });

  target.append(...newItems);
};

createElements("li", ingredients, "item", target);
