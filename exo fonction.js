
//role : calculer une moyenne
//parametre : 4 notes
//return : la moyenne 

/*EXO 1 */

let notes = moyenne(13, 15, 18, 20);


function moyenne(a, b, c, d) {
    return (a + b + c + d) / 4;
}

console.log(`La moyenne de l'élève est : ${notes}`);

/*EXO 2*/

let stock = 4;

function decremente() {
    (stock--);
}
decremente();
decremente();


console.log(`La quantité de fruits restant est de : ${stock}`);


/*EXO 3 */

let mot = "paquebot"

function derniereLettre(mot) {
    let pos = mot.length - 1;
    console.log(mot[pos])
}

derniereLettre(mot)