
//role : calculer une moyenne
//parametre : 4 notes
//return : la moyenne 

const { useInsertionEffect } = require("react");

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

//role: afficher si l'adresse mail contient ou non un @
//parametre : l'adresse mail a verifier
//return : rien car elle affiche 

function verifMail(mailAverif){
    console.log(mailAverif.includes("@"))
}
verifMail("contact@gmail.com")







// EXO 7 


// role : poser une question 
//parametre : la question
//return: la reponse de l'utilisateur

function poserQuestion(question){
   let rep = prompt(question)
   return rep 
}

poserQuestion("LE CIEL EST T'IL BLEU")

console.log(reponse)
console.log(question)


//EXO 8 : 

//role : convertir un prix en dollar 
//parametre : le prix a convertir et le taux de change 
//return : le prix convertit

function convertion(prix, taux){
    return prix * taux;
}

let resultat = conversion(3, 1.17)

console.log(`le prix convertit est de ${resultat} dollars`)
