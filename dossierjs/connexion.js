

let btnCon = document.querySelector('.boutonrouge');

btnCon.addEventListener('click', (e)=>{
    e.preventDefault()
    let nom = document.querySelector('.nom').value
    let adressemail = document.querySelector('.email').value
    let motdepasse = document.querySelector('.mdp').value

    if (nom === localStorage.getItem('nom') && adressemail === localStorage.getItem('email') && motdepasse === localStorage.getItem('mdp')){

        location.pathname = '../dossierhtml/indexprofil.html'
    }
})