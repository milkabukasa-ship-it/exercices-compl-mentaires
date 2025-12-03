let nombreachat = prompt("Entrer un montant d'achat");
let a = Number(nombreachat);

if (a < 50) {
    alert("Montant achat : " + a);
} else if (a >= 50 && a <= 100) {
    alert("Montant achat : " + ((a * 10) / 100));
} else if (a >= 101 && a <= 200) {
    alert("Montant achat : " + ((a * 15) / 100));
} else {
    alert("Montant achat : " + ((a * 20) / 100));
}
