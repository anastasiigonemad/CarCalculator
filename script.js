const brand = document.querySelector("#carBrand");
// Тип топлива:
const petrol = document.querySelector("#petrol");
const electro = document.querySelector("#electro");
const diesel = document.querySelector("#diesel");
const gas = document.querySelector("#gas");

// Модели автомобилей:
const modelMercedes = document.querySelector("#carModelMercedes");
const modelTesla = document.querySelector("#carModelTesla");
const modelBmw = document.querySelector("#carModelBmw");
const modelLada = document.querySelector("#carModelLada");

// Объем двигателя:
const engineCapacity = document.querySelector("#engine-capacity");

// Состояние автомобиля:
const carNew = document.querySelector("#new-condition");
const carUsed = document.querySelector("#used-condition");

// Количество владельцев:
const oneUser = document.querySelector("#used-1");
const twoUser = document.querySelector("#used-2");
const threeUser = document.querySelector("#used-3");

// Тип оплаты:
const cashPayment = document.querySelector("#cash-payment");
const cardPayment = document.querySelector("#card-payment");
const entityPayment = document.querySelector("#entity-payment");

// Кнопка для отображения моделей авто:
const modelBtn = document.querySelector("#models-btn");
// Кнопка для отображения стоимости на экран:
const btn = document.querySelector(".submit-btn");
// Форма:
const form = document.querySelector(".mainForm");

// ОБРАБОТКА КНОПКИ ДЛЯ ВЫБОРА МОДЕЛИ АВТОМОБИЛЯ:
modelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const modelError = document.querySelector(".models-error");
  //   Обработка событий для марки MERCEDES:
  if (brand.selectedIndex === 0 && (petrol.checked || diesel.checked)) {
    modelMercedes.classList.add("active");
    modelError.textContent = "Выберите модель авто:";
  } else if (brand.selectedIndex === 0 && (electro.checked || gas.checked)) {
    modelMercedes.classList.remove("active");
    modelError.textContent = "По данному типу топлива нет подходящих моделей!";
  } else if (brand.selectedIndex === 1 && electro.checked) {
    modelTesla.classList.add("active");
    modelError.textContent = "Выберите модель авто:";
  }
  //   Обработка событий для марки TESLA:
  else if (
    brand.selectedIndex === 1 &&
    (petrol.checked || diesel.checked || gas.checked)
  ) {
    modelTesla.classList.remove("active");
    modelError.textContent =
      "По данному типу топлива нет подходящих автомобилей";
  }
  //   Обработка событий для марки BMW:
  else if (brand.selectedIndex === 2 && (petrol.checked || diesel.checked)) {
    modelBmw.classList.add("active");
    modelError.textContent = "Выберите модель авто:";
  } else if (brand.selectedIndex === 2 && (electro.checked || gas.checked)) {
    modelBmw.classList.remove("active");
    modelError.textContent =
      "По данному типу топлива нет подходящих автомобилей";
  }
  //   Обработка событий для марки LADA:
  else if (brand.selectedIndex === 3 && (petrol.checked || gas.checked)) {
    modelLada.classList.add("active");
    modelError.textContent = "Выберите модель авто:";
  } else if (brand.selectedIndex === 3 && (electro.checked || diesel.checked)) {
    modelLada.classList.remove("active");
    modelError.textContent =
      "По данному типу топлива нет подходящих автомобилей";
  }
});

// АВТОМАТИЧЕСКОЕ ПЕРЕКЛЮЧЕНИЕ ОБЪЕМА ДВИГАТЕЛЯ ИСХОДЯ ИЗ ВАБРАННЫХ ПАРАМЕТРОВ МAРКА - ТИП ТОПЛИВА - МОДЕЛЬ:

// ДОБАВЛЕНИЕ РАСШИРЕНИЯ ДЛЯ Б/У АВТО:
carUsed.addEventListener("change", () => {
  if (carUsed.checked) {
    carUsed.checked = true;
    document.querySelector(".car-condition-used").classList.add("active");
  }
});

carNew.addEventListener("change", () => {
  if (carNew.checked) {
    carNew.checked = true;
    document.querySelector(".car-condition-used").classList.remove("active");
  }
});

//ПОДСЧЕТ СТОИМОСТИ:
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const priceText = document.querySelector(".price-text");
  //MERCEDES-BENZ
  //модель :a-class; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 1550000;
    const max = 2300000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 1550000 + (1550000 * 10) / 100;
    const max = 2300000 + (2300000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 1550000 + (1550000 * 20) / 100;
    const max = 2300000 + (2300000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :a-class; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 1800000;
    const max = 2500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 1800000 + (1800000 * 10) / 100;
    const max = 2500000 + (2500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 1800000 + (1800000 * 20) / 100;
    const max = 2500000 + (2500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :a-class; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 1400000;
    const max = 1700000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 1400000 + (1400000 * 10) / 100;
    const max = 1700000 + (1700000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 1400000 + (1550000 * 20) / 100;
    const max = 1700000 + (2300000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :a-class; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 1600000;
    const max = 1900000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 1600000 + (1600000 * 10) / 100;
    const max = 1900000 + (1900000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 1600000 + (1600000 * 20) / 100;
    const max = 1900000 + (1900000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :a-class; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 1300000;
    const max = 1500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 1300000 + (1300000 * 10) / 100;
    const max = 1500000 + (1500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 1300000 + (1300000 * 20) / 100;
    const max = 1500000 + (1500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :a-class; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 1400000;
    const max = 1600000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 1400000 + (1400000 * 10) / 100;
    const max = 1600000 + (1600000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 1400000 + (1400000 * 20) / 100;
    const max = 1600000 + (1600000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :a-class; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 1200000;
    const max = 1400000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 1200000 + (1200000 * 10) / 100;
    const max = 1400000 + (1400000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 1200000 + (1200000 * 20) / 100;
    const max = 1400000 + (1400000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :a-class; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 1300000;
    const max = 1500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 1300000 + (1300000 * 10) / 100;
    const max = 1500000 + (1500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 1300000 + (1300000 * 20) / 100;
    const max = 1500000 + (1500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } //модель :c-class; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 1750000;
    const max = 2300000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 1750000 + (1750000 * 10) / 100;
    const max = 2300000 + (2300000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 1750000 + (1750000 * 20) / 100;
    const max = 2300000 + (2300000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :c-class; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 2000000;
    const max = 2500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 2000000 + (2000000 * 10) / 100;
    const max = 2500000 + (2500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 2000000 + (2000000 * 20) / 100;
    const max = 2500000 + (2500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :c-class; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 1700000;
    const max = 1900000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 1700000 + (1700000 * 10) / 100;
    const max = 1700000 + (1900000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 1700000 + (1700000 * 20) / 100;
    const max = 1900000 + (1900000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :c-class; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 1800000;
    const max = 2000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 1800000 + (1800000 * 10) / 100;
    const max = 2000000 + (2000000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 1800000 + (1800000 * 20) / 100;
    const max = 2000000 + (2000000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :c-class; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 1500000;
    const max = 1700000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 1500000 + (1500000 * 10) / 100;
    const max = 1700000 + (1700000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 1500000 + (1500000 * 20) / 100;
    const max = 1700000 + (1700000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :c-class; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 1400000;
    const max = 1600000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 1400000 + (1400000 * 10) / 100;
    const max = 1600000 + (1600000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 1400000 + (1400000 * 20) / 100;
    const max = 1600000 + (1600000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :c-class; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 1300000;
    const max = 1500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 1300000 + (1300000 * 10) / 100;
    const max = 1500000 + (1500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 1300000 + (1300000 * 20) / 100;
    const max = 1500000 + (1500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :c-class; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 1400000;
    const max = 1600000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 1400000 + (1600000 * 10) / 100;
    const max = 1600000 + (1600000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 1400000 + (1400000 * 20) / 100;
    const max = 1600000 + (1600000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :gle-class; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :gle-class; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 3000000;
    const max = 3500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 3000000 + (3000000 * 10) / 100;
    const max = 3500000 + (3500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 3000000 + (3000000 * 20) / 100;
    const max = 3500000 + (3500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :gle-class; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :gle-class; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 2800000;
    const max = 2500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 2800000 + (2800000 * 10) / 100;
    const max = 2500000 + (2500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 2800000 + (2800000 * 20) / 100;
    const max = 2500000 + (2500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :gle-class; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :gle-class; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 2500000;
    const max = 2700000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 2500000 + (2500000 * 10) / 100;
    const max = 2700000 + (2700000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 2500000 + (2500000 * 20) / 100;
    const max = 2700000 + (2700000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :gle-class; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :gle-class; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 2300000;
    const max = 2500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 2300000 + (2300000 * 10) / 100;
    const max = 2500000 + (2500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 2300000 + (2300000 * 20) / 100;
    const max = 2500000 + (2500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :s-class; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :s-class; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 5000000;
    const max = 5500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 5000000 + (5000000 * 10) / 100;
    const max = 5500000 + (5500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 5000000 + (5000000 * 20) / 100;
    const max = 5500000 + (5500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :s-class; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :s-class; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 4700000;
    const max = 4900000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 4700000 + (4700000 * 10) / 100;
    const max = 4900000 + (4900000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 4700000 + (4700000 * 20) / 100;
    const max = 4900000 + (4900000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :s-class; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :s-class; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 4500000;
    const max = 4700000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 4500000 + (4500000 * 10) / 100;
    const max = 4700000 + (4700000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 4500000 + (4500000 * 20) / 100;
    const max = 4700000 + (4700000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :s-class; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :s-class; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 4300000;
    const max = 4500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 4300000 + (4300000 * 10) / 100;
    const max = 4500000 + (4500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelMercedes.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 4300000 + (4300000 * 20) / 100;
    const max = 4500000 + (4500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //TESLA
  //модель :modelS; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :modelS; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 16000000;
    const max = 16500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 16000000 + (16000000 * 10) / 100;
    const max = 16500000 + (16500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 16000000 + (16000000 * 20) / 100;
    const max = 16500000 + (16500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :modelS; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :modelS; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 15000000;
    const max = 15500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 15000000 + (15000000 * 10) / 100;
    const max = 15500000 + (15500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 15000000 + (15000000 * 20) / 100;
    const max = 15500000 + (15500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :modelS; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :modelS; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 14500000;
    const max = 14000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 14500000 + (14500000 * 10) / 100;
    const max = 14000000 + (14000000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 14500000 + (14500000 * 20) / 100;
    const max = 14000000 + (14000000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :modelS; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :modelS; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 13500000;
    const max = 13000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 13500000 + (13500000 * 10) / 100;
    const max = 13000000 + (13000000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 13500000 + (13500000 * 20) / 100;
    const max = 14000000 + (14000000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :modelY; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :modelY; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 5700000;
    const max = 8300000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 5700000 + (5700000 * 10) / 100;
    const max = 8300000 + (8300000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 5700000 + (5700000 * 20) / 100;
    const max = 8300000 + (8300000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :modelY; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :modelY; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 5300000;
    const max = 8100000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 5300000 + (5300000 * 10) / 100;
    const max = 8100000 + (8100000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 5300000 + (5300000 * 20) / 100;
    const max = 8100000 + (8100000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :modelY; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :modelY; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 5100000;
    const max = 7900000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 5100000 + (5100000 * 10) / 100;
    const max = 7900000 + (7900000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 5100000 + (5100000 * 20) / 100;
    const max = 7900000 + (7900000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :modelY; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :modelY; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 4900000;
    const max = 75000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 4900000 + (4900000 * 10) / 100;
    const max = 7500000 + (7500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :model3; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :model3; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 5700000;
    const max = 7800000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 5700000 + (5700000 * 10) / 100;
    const max = 7800000 + (7800000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 5700000 + (5700000 * 20) / 100;
    const max = 7800000 + (7800000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :model3; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :model3; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 5300000;
    const max = 7500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 5300000 + (5300000 * 10) / 100;
    const max = 7500000 + (7500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 5300000 + (5300000 * 20) / 100;
    const max = 7500000 + (7500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :model3; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :model3; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 5100000;
    const max = 7300000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 5100000 + (5100000 * 10) / 100;
    const max = 7300000 + (7300000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 5100000 + (5100000 * 20) / 100;
    const max = 7300000 + (7300000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :model3; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :model3; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 4900000;
    const max = 71000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 4900000 + (4900000 * 10) / 100;
    const max = 7100000 + (7100000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelTesla.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 4900000 + (4900000 * 20) / 100;
    const max = 7100000 + (7100000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //BMW
  //модель :X1; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 4500000;
    const max = 5700000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 4500000 + (4500000 * 10) / 100;
    const max = 4700000 + (5700000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 4500000 + (4500000 * 20) / 100;
    const max = 5700000 + (5700000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X1; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 5000000;
    const max = 5500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 5000000 + (5000000 * 10) / 100;
    const max = 5500000 + (5500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 5000000 + (5000000 * 20) / 100;
    const max = 5500000 + (5500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X1; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 4200000;
    const max = 4500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 4200000 + (4200000 * 10) / 100;
    const max = 4500000 + (4500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 4200000 + (4200000 * 20) / 100;
    const max = 4500000 + (5500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X1; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 4500000;
    const max = 4700000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 4500000 + (4500000 * 10) / 100;
    const max = 4700000 + (4700000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 4500000 + (4700000 * 20) / 100;
    const max = 4500000 + (4700000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X1; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 4000000;
    const max = 4200000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 4000000 + (4000000 * 10) / 100;
    const max = 4200000 + (4200000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 4000000 + (4000000 * 20) / 100;
    const max = 4200000 + (4200000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X1; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 4200000;
    const max = 4400000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 4200000 + (4400000 * 10) / 100;
    const max = 4200000 + (4400000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 4200000 + (4400000 * 20) / 100;
    const max = 4400000 + (4400000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X1; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 3900000;
    const max = 4100000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 3900000 + (3900000 * 10) / 100;
    const max = 4100000 + (4100000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 3900000 + (3900000 * 20) / 100;
    const max = 4100000 + (4100000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X1; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 4100000;
    const max = 4200000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 4100000 + (4100000 * 10) / 100;
    const max = 4200000 + (4200000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 4100000 + (4200000 * 20) / 100;
    const max = 4100000 + (4200000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }

  //модель :X3; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :X3; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 7800000;
    const max = 11000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 7800000 + (7800000 * 10) / 100;
    const max = 11000000 + (11000000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 7800000 + (7800000 * 20) / 100;
    const max = 11000000 + (11000000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X3; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :X3; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 7500000;
    const max = 10000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 7500000 + (47500000 * 10) / 100;
    const max = 10000000 + (10000000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 7500000 + (7500000 * 20) / 100;
    const max = 10000000 + (1000000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X3; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :X3; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 7200000;
    const max = 9000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 7200000 + (7200000 * 10) / 100;
    const max = 9000000 + (9000000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 7200000 + (7200000 * 20) / 100;
    const max = 9000000 + (9000000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X3; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :X3; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 6900000;
    const max = 7100000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 6900000 + (6900000 * 10) / 100;
    const max = 7100000 + (7100000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 6900000 + (6900000 * 20) / 100;
    const max = 7100000 + (7100000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X5; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :X5; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 11500000;
    const max = 16500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 11500000 + (11500000 * 10) / 100;
    const max = 16500000 + (16500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 11500000 + (11500000 * 20) / 100;
    const max = 16500000 + (16500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X5; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :X5; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 10000000;
    const max = 130000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 10000000 + (10000000 * 10) / 100;
    const max = 13000000 + (13000000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 10000000 + (10000000 * 20) / 100;
    const max = 13000000 + (13000000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X5; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :X5; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 9500000;
    const max = 10000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 9500000 + (9500000 * 10) / 100;
    const max = 10000000 + (1000000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 9500000 + (9500000 * 20) / 100;
    const max = 10000000 + (1000000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X5; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :X5; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 8500000;
    const max = 9000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 8500000 + (8500000 * 10) / 100;
    const max = 9000000 + (9000000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 8500000 + (8500000 * 20) / 100;
    const max = 9000000 + (9000000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X7; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :X7; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 20000000;
    const max = 28500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 20000000 + (20000000 * 10) / 100;
    const max = 28500000 + (28500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 20000000 + (20000000 * 20) / 100;
    const max = 28500000 + (28500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X7; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :X7; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 18000000;
    const max = 200000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 18000000 + (18000000 * 10) / 100;
    const max = 20000000 + (20000000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 18000000 + (18000000 * 20) / 100;
    const max = 20000000 + (20000000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X7; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :X7; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 16000000;
    const max = 18000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 16000000 + (16000000 * 10) / 100;
    const max = 18000000 + (18000000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 16000000 + (1600000 * 20) / 100;
    const max = 18000000 + (1800000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :X7; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина среднелитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :X7; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 14000000;
    const max = 18000000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 14000000 + (14000000 * 10) / 100;
    const max = 18000000 + (18000000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelBmw.selectedIndex === 3 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 16000000 + (16000000 * 20) / 100;
    const max = 18000000 + (18000000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //LADA
  //модель :vesta; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 1200000;
    const max = 1800000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 1200000 + (1200000 * 10) / 100;
    const max = 1800000 + (1800000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 1200000 + (1200000 * 20) / 100;
    const max = 1800000 + (1800000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :vesta; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :vesta; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 900000;
    const max = 950000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 900000 + (900000 * 10) / 100;
    const max = 950000 + (950000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 900000 + (900000 * 20) / 100;
    const max = 950000 + (950000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :vesta; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :vesta; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 600000;
    const max = 650000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 600000 + (600000 * 10) / 100;
    const max = 650000 + (650000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 600000 + (600000 * 20) / 100;
    const max = 650000 + (650000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :vesta; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :vesta; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 450000;
    const max = 500000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 450000 + (450000 * 10) / 100;
    const max = 500000 + (500000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 450000 + (450000 * 20) / 100;
    const max = 500000 + (500000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :vesta; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 0 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :granta; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 800000;
    const max = 1200000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 800000 + (800000 * 10) / 100;
    const max = 1200000 + (1200000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 800000 + (800000 * 20) / 100;
    const max = 1200000 + (1200000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :granta; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :granta; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 600000;
    const max = 900000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 600000 + (600000 * 10) / 100;
    const max = 900000 + (900000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 600000 + (600000 * 20) / 100;
    const max = 900000 + (900000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :granta; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :granta; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 400000;
    const max = 600000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 400000 + (400000 * 10) / 100;
    const max = 600000 + (600000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 400000 + (400000 * 20) / 100;
    const max = 600000 + (600000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :granta; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :granta; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 250000;
    const max = 300000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 250000 + (250000 * 10) / 100;
    const max = 300000 + (300000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 250000 + (250000 * 20) / 100;
    const max = 300000 + (300000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :granta; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 1 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }

  //модель :priora; объем двигателя 1.1; новая; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    const min = 300000;
    const max = 600000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    const min = 300000 + (300000 * 10) / 100;
    const max = 600000 + (600000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    const min = 300000 + (300000 * 20) / 100;
    const max = 600000 + (600000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :priora; объем двигателя 1.8; новая; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    carNew.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :priora; объем двигателя 1.1; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    const min = 250000;
    const max = 450000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    const min = 250000 + (250000 * 10) / 100;
    const max = 450000 + (450000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    const min = 250000 + (250000 * 20) / 100;
    const max = 945000 + (450000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :priora; объем двигателя 1.8; 1 владелец; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    oneUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :priora; объем двигателя 1.1; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    const min = 150000;
    const max = 250000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    const min = 150000 + (150000 * 10) / 100;
    const max = 450000 + (450000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    const min = 150000 + (150000 * 20) / 100;
    const max = 450000 + (450000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :priora; объем двигателя 1.8; 2 владельца; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    twoUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
  //модель :priora; объем двигателя 1.1; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    const min = 80000;
    const max = 150000;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    const min = 80000 + (80000 * 10) / 100;
    const max = 150000 + (150000 * 10) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 0 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    const min = 80000 + (80000 * 20) / 100;
    const max = 150000 + (150000 * 20) / 100;
    const randomNumber = (
      Math.floor(Math.random() * (max - min + 1)) + min
    ).toLocaleString("ru-RU");
    priceText.textContent = `${randomNumber} рублей`;
  }
  //модель :priora; объем двигателя 1.8; 3 владельца; оплата: нал, б/н, юр
  else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cashPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    cardPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  } else if (
    modelLada.selectedIndex === 2 &&
    engineCapacity.selectedIndex === 1 &&
    threeUser.checked &&
    entityPayment.checked
  ) {
    priceText.textContent = `Данная машина малолитражная, мы не можем отобразить цену по выбранным параметрам. Выберите другой литраж`;
  }
});
