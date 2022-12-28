console.log("Witam, zadanie 4, Pozdrawiam hUps;) ");

let formElement = document.querySelector(".js-form");
let inputAmountElement = document.querySelector(".js-inputAmount");
let currencyUnitElement = document.querySelector(".js-currencyUnit");
let conversionResultElement = document.querySelector(".js-conversionResult");
let rateElement = document.querySelector("js-rate");

let plnEUR = 4.69;
let plnCHF = 4.74;
let plnUSD = 4.40;
let plnGBP = 5.30;
let plnSEK = 0.42;
let plnCAD = 3.26;
let plnNOK = 0.45;
let plnAUD = 2.97;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputAmount = +inputAmountElement.value;
  let currencyUnit = currencyUnitElement.value;
  let result;
  let exchange;

  switch (currencyUnit) {
    case "EUR":
        result = inputAmount / plnEUR;
        exchange = plnEUR;
        break;
    case "CHF":
        result = inputAmount / plnCHF;
        exchange = plnCHF;
        break;
    case "USD":
        result = inputAmount / plnUSD;
        exchange = plnUSD;
        break;
    case "GBP":
        result = inputAmount / plnGBP;
        exchange = plnGBP;
        break;
    case "SEK":
        result = inputAmount / plnSEK;
        exchange = plnSEK;
        break;
    case "CAD":
        result = inputAmount / plnCAD;
        exchange = plnCAD;
        break;
    case "NOK":
        result = inputAmount / plnNOK;
        exchange = plnNOK;
        break;
    case "AUD":
        result = inputAmount / plnAUD;
        exchange = plnAUD;
}


  conversionResultElement.innerHTML = `${result.toFixed(
    2
  )} ${currencyUnit} 
   <br>
   <br>
  Przelicznik po kursie (z dnia 27.12.2022r.):  ${exchange.toFixed(2)} PLN`;
});
