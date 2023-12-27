/*
    JS FOR THE CURRENCY CONVERTER PROJECT AT THE MASTERMIND ACADEMY
*/

//Initialization of var, objects, DOM
const currencyinput = document.getElementById("currency");
const currency_resultinput=document.getElementById("currency_result");
const contentinput= parseInt(document.getElementById("content"));
const error=document.getElementById("error");
var euro = 1;
var dolar = 1.10;
var converting = 0;
//Event functions

function convert(currencyinput,currency_resultinput,contentinput) {
    if(currencyinput.value != "euro" && currency_resultinput.value != "dolar"){
        console.log("hola");
    }
}