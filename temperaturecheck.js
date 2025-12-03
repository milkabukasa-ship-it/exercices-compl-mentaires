let temperature = prompt("entrer une température");
const t = Number(temperature);
if (t < 0) {
    alert("il gèle");
} else if (t >= 0 && t <= 15) {
    alert("froid");
} else if (t >= 16 && t <= 25) {
    alert("Agréable");
} else if (t >= 26 && t <= 35) {
    alert("Chaud");
} else (t > 35); {
    alert("Canicule");
}




