/*
    JS FOR THE CURRENCY CONVERTER PROJECT AT THE MASTERMIND ACADEMY
*/

//Initialization of var, objects, DOM
const contentinput=parseFloat(document.getElementById("content").value);
const currencyinput=document.getElementById("currency");
console.log(currencyinput);
var content_resultinput=parseFloat(document.getElementById("currency_result").value);
const currency_resultinput=document.getElementById("currency_result");
const error=document.getElementById("error");

//Event functions


function convert(event){
    if(currencyinput.value === currency_resultinput.value){
        error.innerText="Por favor , Utilice una moneda diferente"
        return false;
    }
    else{
        switch(currency_resultinput.value){
            case "€":{
            currency_resultinput.value = contentinput.value * 0.60;
            return currency_resultinput.value;
        }
    }
    }
}
console.log(convert());
