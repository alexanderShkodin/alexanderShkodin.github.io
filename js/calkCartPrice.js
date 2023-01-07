function calcCartPriceAndDelivery() {
  const cartWrapper = document.querySelector('.cart-wrapper');
  const priceElements = cartWrapper.querySelectorAll('.price__currency');
  const totalPriceEl = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDelivery = document.querySelector('[data-cart-delivery]');

  // Общая стоимость товаров
  let priceTotal = 0;

  // Обходим все блоки с ценами в корзине
  priceElements.forEach(function (item) {
    // Находим количество товара
    const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
    // Добавляем стоимость товара в общую стоимость (кол-во * цену)
    priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
  });

  // Отобраэаем цену на странице
  totalPriceEl.innerText = priceTotal;

  // Скрываем / показываем блок  с стоомостью доставки

  if (priceTotal > 0) {
    cartDelivery.classList.remove("none")
  } else {
    cartDelivery.classList.add("none")
  }

  // Указываем стоиость доставки

  if (priceTotal > 800) {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "бесплатно"

  } else {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "250 ₽"
  }
}