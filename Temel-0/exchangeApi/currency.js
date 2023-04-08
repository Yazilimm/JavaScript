class Currency{
    constructor(firstCurrency,secondCurrency) {
        firstCurrency = firstCurrency;
        secondCurrency = secondCurrency;
        amount=null;
    }
    exchange(){
        fetch("http://api.exchangeratesapi.io/v1/latest?access_key=6d3ecb3c7b390bb5611b5aa7a7e2d78c",this.firstCurrency).then(response => response.json())
        .then(data => console.log(data)).catch(err => console.log(err));
    }
}
