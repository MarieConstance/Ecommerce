
let btnIns = document.querySelector('.boutonrose');

btnIns.addEventListener('click', (e)=>{
    e.preventDefault()
    let nom = document.querySelector('.nom').value
    let nomutilisateur = document.querySelector('.nomutilisateur').value
    let adressemail = document.querySelector('.email').value
    let motdepasse = document.querySelector('.mdp').value

    localStorage.setItem('nom',nom);
    localStorage.setItem('nomutilisateur',nomutilisateur);
    localStorage.setItem('email',adressemail);
    localStorage.setItem('mdp',motdepasse);

    window.location.href = '../dossierhtml/connexion.html'
})