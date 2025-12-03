const nom = document.getElementById("nom");
const email = document.getElementById("email");
const telephone = document.getElementById("téléphone");
const btnadd = document.getElementById("btnadd");


let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

let conteur =  JSON.parse(localStorage.getItem("conteur")) || 0;

function ajouter(e){
 if(nom.value.trim() === ""){
        alert("entrez nom")
        return
    }
if(email.value.trim() === ""){
        alert("entrez email")
        return
    } 
if(telephone.value.trim() === ""){
        alert("entrez téléphone")
        return
    }
    e.preventDefault();
    conteur++;
   localStorage.setItem("conteur",JSON.stringify(conteur));
   let contact ={
    id:conteur,
    nom:nom.value,
    email:email.value,
    telephone:telephone.value
   }
   contacts.push(contact);
  localStorage.setItem("contacts",JSON.stringify(contacts))
  affichercontact();   
}
const listcont = document.getElementById("contacts");
function affichercontact(){

    listcont.innerHTML ="";
    contacts.forEach(e => {
        listcont.innerHTML +=`
        <div class="card-contact">
        <p>${e.nom}</p>
        <p>${e.email}</p>
        <p>${e.telephone}</p>
        <button data-id="${e.id}" class="edit">edit</button>
        <button data-id="${e.id}" class="sup">supprimer</button>
        </div>
        `
    });
}
btnadd.addEventListener("click",ajouter)

function findidedit(){
 listcont.addEventListener("click",function(e){
   if (e.target.classList.contains("edit")) {
    let id = e.target.getAttribute("data-id");
    edit(id);
   }
});
}

 const newname = document.getElementById("newnom");
 const newemail = document.getElementById("newemail");
 const newtele = document.getElementById("newtele");
const formedit = document.getElementById("form-display");

function edit(id){
formedit.style.display = "block"
let contact = contacts.find(e=>e.id == id)
    newname.value = contact.nom;
    newemail.value = contact.email;
    newtele.value = contact.telephone;

    
const btnsave = document.getElementById("save");
btnsave.addEventListener("click",function(){
if(newname.value.trim() === ""){
        alert("entrez nom")
        return
    }
if(newemail.value.trim() === ""){
        alert("entrez email")
        return
    } 
if(newtele.value.trim() === ""){
        alert("entrez téléphone")
        return
    }
    let idx = contacts.findIndex(e=>e.id == id)
    contacts[idx].nom = newname.value;
    contacts[idx].email = newemail.value;
    contacts[idx].telephone = newtele.value;
  localStorage.setItem("contacts",JSON.stringify(contacts))
  formedit.style.display = "none"
    affichercontact();
  })
}

findidedit();



function findidsup(){
 listcont.addEventListener("click",function(e){
   if (e.target.classList.contains("sup")) {
    let id = e.target.getAttribute("data-id");
    suppirer(id);
   }
 });
}

function suppirer(id){
let idx = contacts.findIndex(e=>e.id == id)
if(idx !==-1){
    contacts.splice(idx,1);
    localStorage.setItem("contacts",JSON.stringify(contacts))
    console.log(contacts)
  affichercontact();

}
}
findidsup();

function tricroison(){
  let connttri = contacts.sort((a, b) => a.nom.localeCompare(b.nom));
      console.log(connttri)
      listcont.innerHTML = "";
      connttri.forEach(e=>{
        listcont.innerHTML +=`
        <div class="card-contact">
         <p>${e.nom}</p>
         <p>${e.email}</p>
         <p>${e.telephone}</p>
         <button data-id="${e.id}" class="edit">edit</button>
         <button data-id="${e.id}" class="sup">supprimer</button>
        </div>
        `
      })
}
const triAZ = document.getElementById("triAZ");
triAZ.addEventListener("click",tricroison)


function tridecroison(){
  let connttri = contacts.sort((a, b) => b.nom.localeCompare(a.nom));
      console.log(connttri)
      listcont.innerHTML = "";
      connttri.forEach(e=>{
        listcont.innerHTML +=`
        <div class="card-contact">
         <p>${e.nom}</p>
         <p>${e.email}</p>
         <p>${e.telephone}</p>
         <button data-id="${e.id}" class="edit">edit</button>
         <button data-id="${e.id}" class="sup">supprimer</button>
        </div>
        `
      })
}

const triZA = document.getElementById("triZA");
triZA.addEventListener("click",tridecroison)

// recherche

const inprecherche = document.getElementById("recherche") 
function recherche(){
  let listrech = contacts.filter(e=>e.nom.includes(inprecherche.value))
  if (inprecherche.value.trim() === "") {
    affichercontact();
  }
  else{
  listcont.innerHTML = "";
  listrech.forEach(e=>{
    listcont.innerHTML +=`
      <div class="card-contact">
         <p>${e.nom}</p>
         <p>${e.email}</p>
         <p>${e.telephone}</p>
         <button data-id="${e.id}" class="edit">edit</button>
         <button data-id="${e.id}" class="sup">supprimer</button>
        </div>
    `
  
  });
}
}

inprecherche.addEventListener("input",recherche)

affichercontact();
