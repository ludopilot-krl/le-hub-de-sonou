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

const ForumulaireInscription = sectionConnexion.querySelector('#formulaire-inscription');
console.log(ForumulaireInscription)

const ForumulaireInscriptionEnseignants = sectionConnexion.querySelector('#formulaire-inscription-enseignant');
console.log(ForumulaireInscriptionEnseignants)

const ForumulaireConnexion = sectionConnexion.querySelector('#formulaire-connexion')
console.log(ForumulaireInscription)

const DivConnexionInscription = sectionConnexion.querySelector('.div-btn-inscription-connexion')
console.log(DivConnexionInscription);




///selection des élements de la div formulaire connexion
const champsElementsInscription = ForumulaireInscription.querySelectorAll('input');
console.log(champsElementsInscription)

//selection des éléments de la div formulaire connexion ENSEIGNANTS



//selection des éléments de la div formulaire inscription
const champsElementsConnexion = ForumulaireConnexion.querySelectorAll('input');
console.log(champsElementsConnexion);

//selection des éléments de la div des bouttons inscriptions et connexions
const bouttonInscription = DivConnexionInscription.querySelector('.inscription');
console.log(bouttonInscription);
const bouttonConnexion = DivConnexionInscription.querySelector('.connexion');
console.log(bouttonConnexion);


const etatboutton = (active, noActive) => {
    active.classList.replace('style-boutton-no-active', 'style-boutton-active');
    noActive.classList.replace('style-boutton-active', 'style-boutton-no-active');
}
const elementVisibility = (display, hide) => {
    display.classList.remove('hidden');
    hide.classList.add('hidden');

}
nav.addEventListener('click', (e) => {
    if (e.target === bouttonEtudiant) {
        if (e.target.classList.contains('style-boutton-no-active')) {
            etatboutton(bouttonEtudiant, bouttonEnseignant);
            elementVisibility(ForumulaireInscription, ForumulaireInscriptionEnseignants)
            // bouttonEtudiant.classList.replace('style-boutton-no-active', 'style-boutton-active');
            // bouttonEnseignant.classList.replace('style-boutton-active', 'style-boutton-no-active');
            // ForumulaireInscription.classList.remove('hidden');
            // ForumulaireInscriptionEnseignants.classList.add('hidden');

        }
    }
    if (e.target === bouttonEnseignant) {
        if (e.target.classList.contains('style-boutton-no-active')) {
            etatboutton(bouttonEnseignant, bouttonEtudiant)
            elementVisibility(ForumulaireInscriptionEnseignants, ForumulaireInscription)

            // bouttonEnseignant.classList.replace('style-boutton-no-active', 'style-boutton-active');
            // bouttonEtudiant.classList.replace('style-boutton-active', 'style-boutton-no-active');
            // ForumulaireInscription.classList.add('hidden');
            // ForumulaireInscriptionEnseignants.classList.remove('hidden');
        }
    }
}

)