
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


/*EXO 4 */

function nouvelleOffre(nouveauProduit, listeInitial){
    console.log(listeInitial.replace("bubble tea",nouveauProduit))
}

nouvelleOffre("matcha","café,bubble tea, tisane")

//role : Afficher des balises a ma page html
// parametre : la balise a ajouter
// return : rien

function ajouterBalise(balise){
    document.querySelector("body").innerHTML+= balise
}

ajouterBalise("<h1>Coucou</h1>")

//role : afficher l'addition de deux chiffres
//parametre : les chiffres a additionner
//return : rien

function afficherAddition(a, b){
    ajouterBalise(`<p> ${a+b} </p>`)
}

afficherAddition(7,5)

//role :afficher le prénom dans le body 
//parametre : prenom
//return : rien 
let David = "David"
function affichePrenom(prenom){
    ajouterBalise (`<p> Salut ${prenom}, comment ça va ? </p>`)
}

affichePrenom("David")