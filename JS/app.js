/*
    JS FOR THE CURRENCY CONVERTER PROJECT AT THE MASTERMIND ACADEMY
*/

// Conversion rates between different currencies
const conversionRates = {
    euro: {
        dolar: 1.10,
        yuan: 7.05,
        libra: 0.85,
        peso: 24.72,
        franco: 1.06,
        dolar_canadiense: 1.32,
        yuan_chino: 6.37,
        corona_danesa: 7.44,
        corona_noruega: 9.85
    },
    dolar: {
        euro: 1 / 1.10,
        yuan: 6.42,
        libra: 0.77,
        peso: 22.57,
        franco: 0.94,
        dolar_canadiense: 1.23,
        yuan_chino: 5.95,
        corona_danesa: 6.96,
        corona_noruega: 9.22
    },
    yuan: {
        euro: 1 / 7.05,
        dolar: 1 / 6.42,
        libra: 0.12,
        peso: 3.48,
        franco: 0.13,
        dolar_canadiense: 0.20,
        yuan_chino: 0.96,
        corona_danesa: 1.13,
        corona_noruega: 1.50
    },
    libra: {
        euro: 1 / 0.85,
        dolar: 1 / 0.77,
        yuan: 8.22,
        peso: 29.46,
        franco: 1.11,
        dolar_canadiense: 1.72,
        yuan_chino: 8.34,
        corona_danesa: 9.77,
        corona_noruega: 12.94
    },
    peso: {
        euro: 1 / 24.72,
        dolar: 1 / 22.57,
        yuan: 0.29,
        libra: 0.034,
        franco: 0.038,
        dolar_canadiense: 0.059,
        yuan_chino: 0.28,
        corona_danesa: 0.33,
        corona_noruega: 0.44
    },
    franco: {
        euro: 1 / 1.06,
        dolar: 1 / 0.94,
        yuan: 7.67,
        libra: 0.90,
        peso: 26.11,
        dolar_canadiense: 1.55,
        yuan_chino: 7.48,
        corona_danesa: 8.76,
        corona_noruega: 11.61
    },
    dolar_canadiense: {
        euro: 1 / 1.32,
        dolar: 1 / 1.23,
        yuan: 5.02,
        libra: 0.58,
        peso: 16.97,
        franco: 0.65,
        yuan_chino: 4.82,
        corona_danesa: 5.65,
        corona_noruega: 7.48
    },
    yuan_chino: {
        euro: 1 / 6.37,
        dolar: 1 / 5.95,
        yuan: 1.04,
        libra: 0.12,
        peso: 3.62,
        franco: 0.13,
        dolar_canadiense: 0.21,
        corona_danesa: 1.17,
        corona_noruega: 1.55
    },
    corona_danesa: {
        euro: 1 / 7.44,
        dolar: 1 / 6.96,
        yuan: 0.85,
        libra: 0.10,
        peso: 3.02,
        franco: 0.11,
        dolar_canadiense: 0.18,
        yuan_chino: 0.85,
        corona_noruega: 1.32
    },
    corona_noruega: {
        euro: 1 / 9.85,
        dolar: 1 / 9.22,
        yuan: 0.64,
        libra: 0.077,
        peso: 2.28,
        franco: 0.086,
        dolar_canadiense: 0.13,
        yuan_chino: 0.64,
        corona_danesa: 0.76
    }
    // Add more conversion rates as needed
};

// DOM element initialization
const currencyinput = document.getElementById("currency");
const currency_resultinput = document.getElementById("currency_result");
const contentinput = document.getElementById("content");
const resultElement = document.getElementById("result");
const errorElement = document.getElementById("error");

// Conversion function
function convert() {
    const fromCurrency = currencyinput.value;
    const toCurrency = currency_resultinput.value;

    // Check if conversion rates are set for the selected currencies
    if (conversionRates[fromCurrency] && conversionRates[fromCurrency][toCurrency]) {
        errorElement.textContent = undefined;
        if (parseFloat(contentinput.value) === 0){
            errorElement.textContent = "El numero debe deser mayor a 1";
            return convert();
        }
        else if(isNaN(parseFloat(contentinput.value))){
            errorElement.textContent = "Debe ingresar algun numero";
            return convert();
        }
        else{
            // Multiply the value of the source currency by the conversion rate
            const converting = parseFloat(contentinput.value) * conversionRates[fromCurrency][toCurrency];
            resultElement.value = converting.toFixed(2); // Limit decimals to two places
        }
    }
    else {
        // Handling cases where there is no defined conversion rate
        console.error("Tasa de conversión no definida para la ruta seleccionada.");
        resultElement.value = 0; // Or you can set a default value
        errorElement.textContent = "Tasa de conversión no definida para la ruta seleccionada.";
        return convert();
    }
}