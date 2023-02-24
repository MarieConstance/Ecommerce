

let btnCon = document.querySelector('.boutonrouge');

btnCon.addEventListener('click', (e)=>{
    e.preventDefault()
    let nom = document.querySelector('.nom').value
    let adressemail = document.querySelector('.email').value
    let motdepasse = document.querySelector('.mdp').value
    // let user = localStorage.getItem()

    if (nom === localStorage.getItem('nom') && adressemail === localStorage.getItem('email') && motdepasse === localStorage.getItem('mdp')){

        console.log("ok");
        location.pathname = '../dossierhtml/indexprofil.html'
    }else{
        alert("mot de passe ou identifiant incorrecte");
        console.log("ok");
    }
})