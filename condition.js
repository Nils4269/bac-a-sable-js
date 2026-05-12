/*
// exo 1 
//Ecrivez une expression JavaScript pour vérifier si un nombre est strictement égal à 10

console.log(9 === 10)

// exo 2
//Ecrivez une expression JavaScript pour vérifier si la chaîne de caractères "Hello" est différente de la chaîne "hello"

console.log("Hello" !== "hello")

//exo 3

//Ecrivez une expression JavaScript pour vérifier si 8 est strictement supérieur a 12

console.log(8 > 12);

// si b = b -> bien joué
// sinon ->dommage

let b = 5;
let c = 6;

if (b === c) {
    console.log("bien joué !")
} else {
    console.log("dommage")
}



if (b === c) {
    console.log("c'est pareil")
} else if (b > c) {
    console.log("b est supérieur a c");
} else {
    console.log("b est inférieur a c")
}

let connect = true;

if (connect === true) {
    console.log("l'utilisateur est connecté")
} else {
    console.log("l'utilisateur n'est pas connecté")
}

// EXO 4 : 

if (nbr % 2 === 0) {
    console.log("nombre pair !")
} else {
    console.log("impair")
}

// EXO 5 :

let météo = 2;
let soleil = 0;
let pluie = 1;
let neige = 2;

if (météo === soleil) {
    console.log("Prends une casquette")
} else if (météo === pluie) {
    console.log("N'oublie pas ton parapluie")
} else {
    console.log("Met des bottes")
}

// EXO 6 : 


if (age < 12) {
    console.log("enfant");
}

else if (age >= 12 && age <= 18) {
    console.log("adolescent")
} else if (age > 18 && age <= 70) {
    console.log("adulte")
} else;




// EXO 7 : 
// triangle 

let a = 5
let b = 5
let c = 5 
// 3 trucs sont pareils : 
if (a=== b && b!=c && a===c){
    console.log("equilateral")
}else if(a!= b && b!=c && a!=c){
    // 3 trucs différents 
    console.log("quelconque")
}else{
    console.log("isocele")
}


/*

// EXO 8 : 

// si la personne a plus de 18 :

if (age>18){
    // Si la personne est membre OU a fais plus de 100€ d'achat

    if (membre === true || achat > {
        // reduction accordée 
        return "reduction accordée"
    }
}

*/

//EXO FEU TRICOLORE

//Demandez a mon utilisateur de quelle couleurs est mon feu


let reponse = prompt("De quelles couleurs est mon feu ?")

// On aura besoin d'un prompt et stocker la réponse dans une variable 



// Si la réponse de mon utilisateur est vert,
// Il affiche dans la console passe.
if(reponse === "vert"){
    console.log("Tu passes !")
}


//Si la réponse de mon utilisateur est orange 
//La console affiche on freine.
else if(reponse === "orange"){
    console.log("Tu freine !")
}

//Si la réponse de mon utilisateur est rouge 
//La console affiche je m'arrête

else if(reponse === "rouge"){
    console.log("Tut'arrête")
}

//Si non 
//la console affiche feu d'effectueux 

else {
    console.log("feu deffectueux")
}