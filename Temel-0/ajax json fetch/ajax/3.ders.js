document.getElementById("change").addEventListener("click", change);

function change() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=291c262ce308fc58d0db3b0ecd9029b2&format=1");

    xhr.onload = () => {
        if(xhr.status) {
            const response = JSON.parse(xhr.responseText);
            const rateTry = response.rates.TRY           
            const amountEur = Number(document.getElementById("amountEur").value);
            document.getElementById("tlEur").value = amountEur * rateTry;
            console.log(response.rates.TRY);
           ;
        }
    }

    xhr.send();
}