//selection de la nav et de ses élements
const nav = document.querySelector('nav');
console.log(nav);

const DivbouttonChoix = nav.querySelector('#div-choix-btn');
console.log(DivbouttonChoix);

const bouttonEtudiant = DivbouttonChoix.querySelector('#etudiant');
console.log(bouttonEtudiant);
const bouttonEnseignant = DivbouttonChoix.querySelector('#enseignant')
console.log(bouttonEnseignant);

//selection de la section de connexion et d'inscription
const sectionConnexion = document.querySelector('#contenaire-inscription');
console.log(sectionConnexion);
const h1 = sectionConnexion.querySelector('h1');
console.log(h1);




const formulaireInscription = document.getElementById('formulaire-inscription');
console.log(formulaireInscription);
const divFormulaireInscription = sectionConnexion.querySelector('#div-formulaire-inscription');
// console.log(divFormulaireInscription)


const formulaireInscriptionEnseignants = document.getElementById('formulaire-inscription-enseignant');
const divFormulaireInscriptionEnseignants = sectionConnexion.querySelector('#div-formulaire-inscription-enseignant');
console.log(formulaireInscriptionEnseignants)


const formulaireConnexion = sectionConnexion.querySelector('#formulaire-connexion')
const divFormulaireConnexion = sectionConnexion.querySelector('#div-formulaire-connexion')
console.log(formulaireConnexion)

const DivConnexionInscription = sectionConnexion.querySelector('.div-btn-inscription-connexion')
console.log(DivConnexionInscription);

/********************************************** */

///selection des élements de la div formulaire connexion
const champsElementsInscription = divFormulaireInscription.querySelectorAll('input');
console.log(champsElementsInscription)

//selection des éléments de la div formulaire connexion ENSEIGNANTS



//selection des éléments de la div formulaire inscription
const champsElementsConnexion = divFormulaireConnexion.querySelectorAll('input');
console.log(champsElementsConnexion);

//selection des éléments de la div des bouttons inscriptions et connexions
const bouttonInscription = DivConnexionInscription.querySelector('.inscription');
console.log(bouttonInscription);
const bouttonConnexion = DivConnexionInscription.querySelector('.connexion');
console.log(bouttonConnexion);

//////////////////////////////////////////////////////////////////////

const personnesInscris = [

];


class Utilisateur {
    constructor(name, prenom, email, password) {
        this.name = name;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
    }
}

const connexionUtilisateur = (formulaire) => {
    const p = document.querySelector('p')
    let name = formulaire.querySelector('.name');
    name = name.value.trim()
    let prenom = formulaire.querySelector('.prenom');
    prenom = prenom.value.trim()

    let email = formulaire.querySelector('.email');
    email = email.value.trim()

    let password = formulaire.querySelector('.password');
    password = password.value.trim()

    let champs = formulaire.querySelectorAll('input')
    champs = Array.from(champs)
    console.log(champs);
    //nouvel utilisateur
    const nouvelUtilisateur = new Utilisateur(name, prenom, email, password);

    //cherche si les données existe dejà dans le tableau des inscrits
    const utilisateurExiste = personnesInscris.some(personne => {
        return personne.email.toUpperCase() === nouvelUtilisateur.email.toUpperCase();
    })
    //cherche s'il y a des champs de saisis qui sont vides
    const inputIsEmpty = champs.some(champ => {
        return champ.value === ''
    })

    //veirifications des champs de saisi
    if (inputIsEmpty) {
        console.log('cest pas rempli');
        p.textContent = 'Veuillez remplir tous les champs'
        p.style.color = 'red';
        p.style.textAlign = 'center';
    }
    // verifier si l'utilisateur existe deja
    if (utilisateurExiste) {
        console.log(`c'est utilisateur existe deja`);
        p.textContent = 'Cet utilisateur existe dejà'
        p.style.color = 'red';
        p.style.textAlign = 'center';
    }

    //si les champs ne sont pas vides et que l'utilisateur n'existe pas
    if (!inputIsEmpty && !utilisateurExiste) {
        personnesInscris.push(nouvelUtilisateur)
        console.log('nouvele utilisateur creer', personnesInscris)
        p.textContent = 'Enregistré'
        p.style.color = 'green';
        p.style.textAlign = 'center';
        formulaire.reset()
    }


}
/**////////////////////********************** */ */



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!/

const changeEtatBoutton = (active, noActive) => {
    active.classList.replace('style-boutton-no-active', 'style-boutton-active');
    noActive.classList.replace('style-boutton-active', 'style-boutton-no-active');
}
const elementVisibility = (display, hide1, hide2) => {
    display.classList.remove('hidden');
    hide1.classList.add('hidden');
    hide2.classList.add('hidden');

}


/***********evenement sur la nav et ses bouttons////////////// */
nav.addEventListener('click', (e) => {
    let elementCliquer = e.target;

    //verifies si le boutton cliquer n'est pas dejà dejà actif et change son état en conséquence
    const verifierEtatBoutton = (elementCliquer, noActive) => {
        if (elementCliquer.classList.contains('style-boutton-no-active')) {
            changeEtatBoutton(elementCliquer, noActive);
        }
    }

    if (elementCliquer === bouttonEtudiant) {
        verifierEtatBoutton(elementCliquer, bouttonEnseignant)
        if (bouttonInscription.classList.contains('style-boutton-active')) {
            elementVisibility(divFormulaireInscription, divFormulaireInscriptionEnseignants, divFormulaireConnexion)
        }
        else {
            elementVisibility(divFormulaireConnexion, divFormulaireInscriptionEnseignants, divFormulaireInscription)

        }
    }

    //Active le formulaire d'inscription d'enseignant 
    if (e.target === bouttonEnseignant) {
        verifierEtatBoutton(elementCliquer, bouttonEtudiant)

        if (bouttonInscription.classList.contains('style-boutton-active')) {
            elementVisibility(divFormulaireInscriptionEnseignants, divFormulaireInscription, divFormulaireConnexion)
        }
        else {
            elementVisibility(divFormulaireConnexion, divFormulaireInscriptionEnseignants, divFormulaireInscription)

        }
    }

}

)
/*****evenement sur les sections*************/
sectionConnexion.addEventListener('click', (e) => {
    let elementCliquer = e.target;

    //verifies si le boutton cliquer n'est pas dejà dejà actif et change son état en conséquence
    const verifierEtatBoutton = (elementCliquer, noActive) => {
        if (elementCliquer.classList.contains('style-boutton-no-active')) {
            changeEtatboutton(elementCliquer, noActive);
        }
    }

    //Active le formulaire de connexion
    if (e.target === bouttonConnexion) {
        verifierEtatBoutton(elementCliquer, bouttonInscription)
        h1.textContent = 'Connexion';
        bouttonConnexion.textContent = 'Me connecter';
        elementVisibility(divFormulaireConnexion, divFormulaireInscription, divFormulaireInscriptionEnseignants)
    }
    //Active le formulaire d'inscription 

    if (e.target === bouttonInscription) {
        verifierEtatBoutton(elementCliquer, bouttonConnexion)
        h1.textContent = 'Inscription'
        bouttonConnexion.textContent = 'Connexion';

        if (bouttonEtudiant.classList.contains('style-boutton-active')) {
            elementVisibility(divFormulaireInscription, divFormulaireConnexion, divFormulaireInscriptionEnseignants)
        }
        else {
            elementVisibility(divFormulaireInscriptionEnseignants, divFormulaireConnexion, divFormulaireInscription)

        }
    }
})

/////////////////////////////////////////////////////
