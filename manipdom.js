/*MANIPULATION DOM NIVEAU 1 EXERCICE 1
var divCouleurH1 = document.createElement('div');
var inputCouleurH1 = document.createElement('input');
inputCouleurH1.innerHTML = 'Changer la couleur du titre h1';
inputCouleurH1.id = 'inputCouleurH1';
inputCouleurH1.setAttribute('onclick', 'couleurH1()');
inputCouleurH1.setAttribute('type', 'color');
var boutonCouleurH1 = document.createElement('button');
boutonCouleurH1.innerHTML = 'Valider';
boutonCouleurH1.setAttribute('onclick', 'couleurH1()');
document.body.appendChild(divCouleurH1);
divCouleurH1.appendChild(inputCouleurH1);
divCouleurH1.appendChild(boutonCouleurH1);
 
function couleurH1() {
    var h1 = document.getElementById('h1');
    value = document.getElementById('inputCouleurH1').value;
    h1.style.color = value;
} */
let button = document.getElementById("button");
let div = document.getElementById("div");

div.addEventListener("click", () => {
    if(getComputedStyle(div).display != "none"){
        div.style.display ="none";
    } else {
        div.style.display = "block";
    }
})
