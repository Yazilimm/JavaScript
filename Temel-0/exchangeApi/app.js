const amountelement = document.getElementById("amount");
const firstselect=document.getElementById("firstCurrency");
const secondselect=document.getElementById("secondCurrency");
const currency =new Currency("USD","TRY");

eventListener();
function eventListener() {
    amountelement.addEventListener("input",exchangeCurrency);
    // firstselect.onchange(function() {

    // });
    // secondselect.onchange(function() {

    // });
}

function exchangeCurrency(){
    currency.exchange();
} 

