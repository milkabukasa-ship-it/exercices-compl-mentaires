let n = prompt("Entrer un numéro (0.Quitter | 1.Addition | 2.Soustraction | 3.Multiplication | 4.Division)");

if (n == "0") {
    alert("Programme terminé");
}

else if (n >= 1 && n <= 4) {
    let message = prompt("Entrer le 1er nombre :");
    let mess = prompt("Entrer le 2ème nombre :");

    const a = Number(message);
    const b = Number(mess);

    if (isNaN(a) || isNaN(b)) {
        alert("Erreur : entrez des nombres valides.");
    } 
    else {
        let s = a + b;
        let d = a - b;
        let m = a * b;
        let div = a / b;

        switch (Number(n)) {
            case 1:
                alert("Résultat : " + s);
                break;
            case 2:
                alert("Résultat : " + d);
                break;
            case 3:
                alert("Résultat : " + m);
                break;
            case 4:
                if (b === 0) {
                    alert("Erreur : division par zéro");
                } else {
                    alert("Résultat : " + div);
                }
                break;
        }
    }
}

else {
    alert("Option invalide");
}