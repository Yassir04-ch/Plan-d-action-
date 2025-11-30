 const joueurs = [
   {
      id:1,
      name:"yassir",
      age:21,
   },  
   {
      id:2,
      name:"amine",
      age:21,
   },  {
      id:3,
      name:"soufian",
      age:19,
   }
 ]
 localStorage.setItem("joueurs",JSON.stringify(joueurs))

 for(let i = 0 ; i<joueurs.length ;i++){
   if(joueurs[i].id == 2){
      joueurs[i].name = "anas"
   }
 }
 localStorage.setItem("joueurs",JSON.stringify(joueurs))


function ajoutee(id,adname,adage){
   let joueur = {
      id:id,
      name:adname,
      age:adage
   }
   joueurs.push(joueur)
   localStorage.setItem("joueurs",JSON.stringify(joueurs))
   afficher()
}

 function afficher(){
   console.log( "les joueurs est", joueurs); 
 }

 function supprimer(idx){
   for (let i = 0; i < joueurs.length; i++) {
       if (joueurs[i].id == idx) {
         joueurs.splice(idx-1,0)
       }
   }
   afficher();
 }
 function modifier(id,newname){
      for(let i = 0 ;i< joueurs.length ; i++){
         if(joueurs[i].id == id){
            joueurs[i].name = newname
         }
      }
      localStorage.setItem("joueurs",JSON.stringify(joueurs))
      afficher()
 }

//  partie 5

const btnajout = document.getElementById("ajouter")
const formajou = document.getElementById("form-none")
const btnclose = document.getElementById("close")

btnajout.addEventListener("click",function(){
   formajou.style.display = "block"
})
btnclose.addEventListener("click",function(){
   formajou.style.display = "none"
})

const inputname = document.getElementById("name")
const inputage = document.getElementById("age")

//  partie 7
let joueurss;

if (localStorage.getItem("joueurss") !== null) {
     joueurss = JSON.parse(localStorage.getItem("joueurss"))
}
else{
     joueurss = []
}

const save = document.getElementById("save")
const form = document.querySelector("div form");

let conteur;
if (localStorage.getItem("conteur") !== null) {
   conteur = JSON.parse(localStorage.getItem("conteur"))
} 
else{
   conteur = 0 ;
}
function ajouteejoueur(e){
   if (inputname.value.trim() === "") {
      alert("entrez name");
      return
   }
     if (inputage.value.trim() === "") {
      alert("entrez age");
      return
   }
   e.preventDefault();
   conteur ++;
   localStorage.setItem("conteur",JSON.stringify(conteur))
   let joueur = {
      id:conteur,
      name : inputname.value,
      age:inputage.value
   };

   joueurss.push(joueur)
   localStorage.setItem("joueurss",JSON.stringify(joueurss))
   
   affichjour();
}
const listjoueurs = document.getElementById("list")
   
function affichjour(){
listjoueurs.innerHTML = ""

joueurss.forEach(e => {
   listjoueurs.innerHTML +=`
   <div class="joueur">
     <p>${e.name}</p>
     <p>${e.age}</p>
     <button data-id="${e.id}"> Supprimer</button>
   </div>
   `
});
}
save.addEventListener("click",ajouteejoueur)
affichjour();
console.log(joueurss);

// partie 6

// function supprimer joueur 
function supprimer(id){
   let idx = joueurss.findIndex(j=> j.id == id);
   if (idx !== -1) {
       joueurss.splice(idx,1)
       localStorage.setItem("joueurss",JSON.stringify(joueurss));
       affichjour();
   }
}
 const btnsup =  listjoueurs.querySelectorAll("button")
 btnsup.forEach(e=>{
   e.addEventListener("click",function(){
      const id = this.getAttribute("data-id");
      supprimer(id)
   })
 })



