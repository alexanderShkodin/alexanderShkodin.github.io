// Div внутри корзины  в который мы добавляем  товары 

const cartWrapper = document.querySelector(".cart-wrapper")


//  Отслеживаем клик на странице

window.addEventListener("click", function (event) {

  // Проверяем условия , что клик был совершен по кнопке добавить в корзину
  if (event.target.hasAttribute("data-cart")) {
    //Находим карточку товара внутри которой был совершен клик 
    const card = event.target.closest(".card");
    // Собираем данные с этого товара  и записываем их в единный обьект  productInfo
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,

    };
    // ПРоверяем есть ли такой товар уже в корзине
    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);



    // Если товар есть в корзине

    if (itemInCart) {
      const counterEl = itemInCart.querySelector("[data-counter]");
      counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);

    } else {
      //если товара нет в корзине то мы


      // Собранные данные собираем  в шаблон для товара в магазине
      const cardItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
      <div class="cart-item__top">
      <div class="cart-item__img">
        <img src="${productInfo.imgSrc}" alt="">
      </div>
      <div class="cart-item__desc">
        <div class="cart-item__title">${productInfo.title}</div>
        <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

        <!-- cart-item__details -->
        <div class="cart-item__details">

          <div class="items items--small counter-wrapper">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current" data-counter="">${productInfo.counter}</div>
            <div class="items__control" data-action="plus">+</div>
          </div>

          <div class="price">
            <div class="price__currency">${productInfo.price}</div>
          </div>

        </div>
        <!-- // cart-item__details -->

      </div>
    </ >
  </div > `;
      // Отобразим товар в корзине

      cartWrapper.insertAdjacentHTML("beforeend", cardItemHTML);

    }

    //Сбрасываем счетчик добавленого товара на 1 

    card.querySelector("[data-counter]").innerText = "1";

    // Отоброжения статусы корзины Пустая / Полная
    toggleCartStatus();

    // Пересчет общей стоимости товара в корзине 
    calcCartPriceAndDelivery();
  }

})