
let mesicon = document.querySelectorAll(".mesicons");
let recup = localStorage.getItem("valeur");

let number = document.getElementById('number')

function recuperation() {

    let ajoutpanier = localStorage.getItem('ajout')
    let convpan = JSON.parse(ajoutpanier);
    if (convpan === null) {
        number.textContent = 0;
    }else{
        number.textContent = convpan.length;
    }
   
}
recuperation();

mesicon.forEach((element) => element.addEventListener("click", (e) =>{
    console.log(e);
    let data = e.target;
    // recup = JSON.parse(recup);
    if(recup === null){
        recup = [];
        recup.push(data); 
        localStorage.setItem("ajout", JSON.stringify(recup));
        recuperation();
    }
    else{
        recup.push(data) ;
        localStorage.setItem("ajout", JSON.stringify(recup));
        recuperation();
    }
}))

let moko = localStorage.getItem('ajout')




