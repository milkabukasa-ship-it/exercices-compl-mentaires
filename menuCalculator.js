let n = prompt("entrer un numéro (1.Addition;2.Soustraction;3.Multiplication;4.Division)")
if (n == "0") {
    alert("programme terminé")
} else if (n >= 1 && n <= 4) {
    let message = prompt("entrer 2 nombres ");
    let mess = prompt("le 2ème nombre");
    const a = number(message);
    const b = number(mess);
    let s = a + b;
    let d = a - b;
    let m = a * b;
    let div = a / b;
    switch (Number(n)) {
        case 1:
            alert(s)
            break;
        case 2:
            alert(d)
            break;
        case 3:
            alert(m)
            break;
        case 4:
            alert(div)
            break;
    }
}
else alert(" option invalide");