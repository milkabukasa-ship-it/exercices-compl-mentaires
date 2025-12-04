let nombreachat = prompt("Entrer un montant d'achat");
let z = Number(nombreachat);

if (z < 50) {
    alert("Montant achat : " + z);
} else if (z >= 50 && z <= 100) {
    alert("Montant achat : " + ((z * 90) / 100));
} else if (z >= 101 && z <= 200) {
    alert("Montant achat : " + ((z * 85) / 100));
} else {
    alert("Montant achat : " + ((z * 80) / 100));
}
