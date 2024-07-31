/* les champs de formulaires */

var nomAnimal = document.getElementById('nom-animal');
var especeAnimal = document.getElementById('espece-animal');
var raceAnimal = document.getElementById('race-animal');
var courriel = document.getElementById('courriel');
var adresse = document.getElementById('adresse');
var ville = document.getElementById('ville');
var descrition = document.getElementById('description');


/* les span qui contiendront les erreurs */


var erreurNomAnimal = document.getElementById('erreur-nom');
var erreurEspeceAnimal = document.getElementById('erreur-espece');
var erreurRaceAnimal = document.getElementById('erreur-race');
var erreurCourriel = document.getElementById('erreur-courriel');
var erreurAdresse = document.getElementById('erreur-adresse');
var erreurVille = document.getElementById('erreur-ville');
var erreurDescription = document.getElementById('erreur-description');

var formulairesForm = document.getElementById('formulaire-form');



function contientVirgule (chaine ,virgule){
    return chaine.includes(virgule);
}

function validerVirguleNom() {

    if(contientVirgule(nomAnimal.value, ",")){
        erreurNomAnimal.innerHTML = "Ce champ ne peut contenir une virgule";
        formulairesForm.preventDefault();
    }else if (!isNaN(parseInt( nomAnimal.value))){
        erreurNomAnimal.innerHTML = "Ce champ ne peut etre que des chiffres chiffres";
    }else{
        erreurNomAnimal.innerHTML = "";
    }
}

function validerVirguleEspece() {
    if(contientVirgule(especeAnimal.value, ",")){
        erreurEspeceAnimal.innerHTML = "Ce champ ne peut contenir une virgule";
    }else{
        erreurEspeceAnimal.innerHTML = "";
    }
}
function validerVirguleRace() {
    if(contientVirgule(raceAnimal.value, ",")){
        erreurRaceAnimal.innerHTML = "Ce champ ne peut contenir une virgule";
    }else{
        erreurRaceAnimal.innerHTML = "";
    }
}
function validerVirguleCourriel() {
    if(contientVirgule(courriel.value, ",")){
        erreurCourriel.innerHTML = "Ce champ ne peut contenir une virgule";
    }else{
        erreurCourriel.innerHTML = "";
    }
}
function validerVirguleAdresse() {
    if(contientVirgule(adresse.value, ",")){
        erreurAdresse.innerHTML = "Ce champ ne peut contenir une virgule";
    }
    else{
        erreurAdresse.innerHTML = "";
    }
}
function validerVirguleVille() {
    if( contientVirgule(ville.value, ",")){
        erreurVille.innerHTML = "Ce champ ne peut contenir une virgule";
    }else{
        erreurVille.innerHTML = "";
    }
}
function validerVirguleDescription() {
    if(contientVirgule(descrition.value, ",")){
        erreurDescription.innerHTML = "Ce champ ne peut contenir une virgule";
    }else{
        erreurDescription.innerHTML = "";
    }
}







setInterval(() => {
    nomAnimal.addEventListener('input', validerVirguleNom());
    especeAnimal.addEventListener('input', validerVirguleEspece());
    raceAnimal.addEventListener('input', validerVirguleRace());
    courriel.addEventListener('input', validerVirguleCourriel());
    adresse.addEventListener('input', validerVirguleAdresse());
    ville.addEventListener('input', validerVirguleVille());
    descrition.addEventListener('input', validerVirguleDescription());
}, 100);


console.log(nomAnimal.value)
console.log(nomAnimal)