let conversionRate = {
  DZD: { EUR: 0.0047, USD: 0.0056 },
  EUR: { DZD: 147.79, USD: 1.08 },
  USD: { DZD: 136.7, EUR: 0.92 },
};
let fromMoney = document.querySelector(".from-input");
fromMoney.addEventListener("input", function (event) {
  //étape 1 : récupérer la quantité d'argent a convertir
  let moneyToConvert = event.target.value;
  //étape 2 : récupérer la monnaie de l'argent à convertir (monnaie de départ)
  let fromCurrency = document.querySelector(".from-currency").value;
  //étape 3 : récupérer la monnaie de l'argent converti (monnaie cible)
  let toCurrency = document.querySelector(".to-currency").value;
  //étape 4 : récupérer le taux de conversion de la monnaie cible
  let convRate = conversionRate[fromCurrency.toUpperCase()];
  //étape 5 : calculer la conversion de l'argent de départ.
  let convertedMoney = moneyToConvert * convRate[toCurrency.toUpperCase()];
  //étape 6 : afficher l'argent converti dans son champ de texte à droite
  toMoney = document.querySelector(".to-input");
  toMoney.value = convertedMoney;
  //étape 7 : afficher le taux de conversion en bas de mon application
  let rateText = document.querySelector(".conversion-rate");
  rateText.innerText = `1 ${fromCurrency.toUpperCase()} = ${
    convRate[toCurrency.toUpperCase()]
  }  ${toCurrency.toUpperCase()}`;
});

let liste = {
  USD: 10,
  DZD: 25,
  EUR: 40,
};
liste["YUAN"] = 98;

window.addEventListener("scroll", function (event) {});
