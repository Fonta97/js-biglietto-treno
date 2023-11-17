// richiesta input ad utente su lunghezza viaggio e età
const wthIsAKilometer = prompt("Quant'è la lunghezza del tuo viaggio in Km?");
const userAge = prompt("Quanti anni hai?");

console.log(wthIsAKilometer, userAge)


// dichiarazione variabili costanti prezzo per km e scontistiche in base all'età
var priceKm = (wthIsAKilometer * 0.21)
var discount =
if userAge < 18
                discount = 0.8
else if userAge > 65
            discount = 0.6
else
    discount = 1

console.log(priceKm, discount)

let finalPrice = priceKm * discount;

console.log(finalPrice)

document.getElementById("ticket_price").innerHTML = "PAGAH:" + finalPrice;