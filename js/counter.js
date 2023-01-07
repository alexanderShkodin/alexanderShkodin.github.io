// Добавляем прослушку на всем окне

window.addEventListener("click", function (event) {
  //  Обьявляем переменную для счетчика
  let counter;

  // Проверяем клик строго по кнопкам,  Плюс либо минус
  if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {

    //Находим абертку счетчика затем сам счетчик и через иннертекст увеличиваем его значения на 1
    const counterWrapper = event.target.closest(".counter-wrapper");
    counter = counterWrapper.querySelector("[data-counter]");
  }
  // Проверяем являеться ли эмент  по которому был совершен клик кнопкой плюс
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText

  }
  // Проверяем являеться ли эмент по которому был совершен клик кнопкой минус
  if (event.target.dataset.action === "minus") {
    //Находим абертку счетчика затем сам счетчик и через иннертекст уменьшаем его значения на 1

    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (event.target.closest(".cart-wrapper") && parseInt(counter.innerText) === 1) {
      //Удаляем товар из нашей корзины
      event.target.closest(".cart-item").remove();
      // Отоброжения статусы корзины Пустая / Полная
      toggleCartStatus();
      // Пересчет общей стоимости товара 
      calcCartPriceAndDelivery();
    }

  }

  // Проверка на товар который находиться в корзине

  // Проверяем клик на + или - внутри корзины

  if (event.target.hasAttribute("data-action") && event.target.closest(".cart-wrapper")) {

    // Пересчет общей стоимости товара 
    calcCartPriceAndDelivery();
  }

}

)