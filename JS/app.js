/*
    JS FOR THE CURRENCY CONVERTER PROJECT AT THE MASTERMIND ACADEMY
*/

//Initialization of var, objects, DOM
const currencyinput = document.getElementById("currency").value;
const currency_resultinput=document.getElementById("currency_result").value;
const contentinput= parseInt(document.getElementById("content").value)
const error=document.getElementById("error");
var euro = 1;
var dolar = 1.10;
var converting = 0;
//Event functions

function convert(){
    console.log(contentinput);
}