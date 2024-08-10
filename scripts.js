
const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector("#money")
const url = " https://v6.exchangerate-api.com/v6/dbf5965b9693bec2ef7ff11c/latest/USD"
fetch (url)


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valorConvertido = document.getElementById("converted")

    const dolarToday = 5.2
    const euroToday = 6.12

  
     
   

    if (currencySelect .value == "dolar" ) {
        convertedValueDolar = inputCurrencyValue / dolarToday
        convertedValueDolar = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency: "USD"
        }).format( convertedValueDolar);
        valorConvertido.value =  convertedValueDolar
    }
    if (currencySelect .value == "euro" ) {
        convertedValueEuro = inputCurrencyValue / euroToday
        convertedValueEuro = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "EUR"
        }).format(convertedValueEuro);
        valorConvertido.value = convertedValueEuro
       
    }
    }



convertButton.addEventListener("click", convertValues)

/*inputCurrencyValue = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency: "BRL"
}).format( inputCurrencyValue);*/