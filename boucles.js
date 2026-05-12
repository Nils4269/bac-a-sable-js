//role : ecrire 50 fois "cnsbd"
// parametre : non 
// return : non car elle affiche 

function punition() {
    for (let i = 1; i <= 50; i++) {
        console.log("i will not waste chalk")
    }
}

//role : epeller le mot 
// parametre : le mot a epeler 
// return : rien car elle affiche 

function epele(mot) {

    console.log(`le mot ${mot} contient ${mot.length} lettres`)

    for (let i = 0; i <= mot.length; i++) {

        console.log(mot.charAt(i))
    }

}

//créer un tableau "panierFruits" contenant 6 fruits 
// afficher dans la console le premier et dernier fruit du tableau 
// " le premier fruit du tableau est ... et le dernier est ..."


const panierFruits = ["banane", "pêche", "poire", "mangue", "framboise"]

console.log(`le premier fruit est ${panierFruits[0]} le dernier fruit du tableau est ${panierFruits[panierFruits.length - 1]}`)

panierFruits.push("pastéque");
console.log(panierFruits)

panierFruits.pop();
console.log(panierFruits)

panierFruits.shift();
console.log();



panierFruits.forEach(fruit => {
    console.log(fruit)
});



tableauNotes.forEach(notes => {
    console.log(notes)
})

//role: calculer la moyenne a partir d'un tableau de notes 
//parametre : le tableau de note 
//return : la moyenne 

// créer une fonction 
function calculerMoyenne(tableauNotes) {

}


//récuperer les notes une par une dans les tableau 
tableauNotes.forEach(note => { })
//quand il en a une, il l'additionne dans une variable ( a l'origine une variable vide)
// on divise la somme obtenue par le nbr de valeur dans le tableau c a d la longueur du tableau
//retrouner le resultat



//role : afficher le resultat retourné par la fonction 1
//parametre : du résultat
//return : retourner le resultat




// mon tableau représentant mon panier de fruits 
let panier = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes",
    "pommes", "poires", "cerises"];

for (let i = ; i <= ; i++)


    // role : compter les nbr de chaque fruits
    //parametre : le tableau de fruits 
    //return : le nbr total de chaque fruit 


    function compteFruits(tableauFruit) {
        let compteurPommes = 0;
        let compteurCerises = 0;
        let compteurPoires = 0;
        let compteurBananes = 0;

        tableauFruit.forEach(fruit => {
            if (fruit === "pommes") {
                compteurPommes++
            } else if (fruit === "cerises") {
                compteurCerises++
            }
            else if (fruit === "poires")
                compteurPoires++
        } else if (fruit === "bananes")



            return `
            
        

        });
}


for( let i =0; i< motAencoder.length; i++){

let posLettreActuelle = motAencoder.charAt (i)

}

function scenario (motAencoder){
let motEncode = codeCesar(mot)}




// créer une fonction 
// role : choisir 3 emojis 
//parrametre : tableau avec tous les emojis possibles (entre 3 et 5 )
// return : les 3 emojis selectionné 

function emojiAlea(tableauEmoji){

//créer le tableau d'emoji
// tirer 3 chiffres aleatoirement --> Math.random()*3)
//attribuer un emojis a chaque chiffre tiré --> si on tire 0 on va chercher l'emojis a la position 0 dans le tableau 

//stocker mes emojis dansu une boite 

// retouner les emojis pioché 

function emojisAlea(tableauEmoji){
}






//role: comparer les emojis pour définir si victoire
//parametre : les emojis piochés --> un tableau 
//return : true/false -> boolean 


//role : afficher le resultat dans le body 
//parametre : les emojis pioché,et le resultat 
//return : rien car elle affiche 