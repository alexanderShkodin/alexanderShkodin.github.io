const productsContainer = document.querySelector("#products-container");
// Запускаем функцию getProducts
getProducts();

// Асинхронная функция получения данных из файла product.json
async function getProducts() {
  // Получаем данные из product.json
  const response = await fetch("./js/products.json");
  // Парсим данные из JSON в js
  const productsArray = await response.json();
  // Запускаем функцию рендера (отображения товаров)
  renderProducts(productsArray)
}

// функция рендера подставляем item значения в див разметку

function renderProducts(productsArray) {
  productsArray.forEach(function (item) {
    const productHTML = `<div class="col-md-6">
    <div class="card mb-4" data-id="${item.id}">
      <img class="product-img" src="${item.imgSrc}" alt="">
      <div class="card-body text-center">
        <h4 class="item-title">${item.title}</h4>
        <p><small data-items-in-box class="text-muted">${item.itemsInBox} шт.</small></p>




        <div class="details-wrapper">
          <!-- Счетчик  товара start -->
          <div class="items counter-wrapper">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current" data-counter>1</div>
            <div class="items__control" data-action="plus">+</div>
          </div>
          <!-- Счетчик  товара end-->
          <div class="price">
            <div class="price__weight">${item.weight} г.</div>
            <div class="price__currency">${item.price} ₽</div>
          </div>
        </div>

        <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

      </div>
    </div>
  </div>`
    productsContainer.insertAdjacentHTML("beforeend", productHTML)
  })

}