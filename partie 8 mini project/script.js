const nametach = document.getElementById("name");
const btnadd = document.getElementById("btnadd");

let taches 

if (localStorage.getItem("taches")!==null) {
    taches = JSON.parse(localStorage.getItem("taches"));
}
else{
    taches = [];
}

let conteur;

if (localStorage.getItem("conteur")!==null) {
    conteur = JSON.parse(localStorage.getItem("conteur"));
}
else{
    conteur = 0;
}
function ajoutertache(e){
    if(nametach.value.trim() === ""){
        alert("entrez name du tache")
        return
    }
   e.preventDefault();
  conteur ++;
  localStorage.setItem("conteur",JSON.stringify(conteur));

        let tach ={
            id: conteur,
            name:nametach.value,
            situation:"non terminer"
        }
        taches.push(tach);
        localStorage.setItem("taches",JSON.stringify(taches))
        nametach.value = ""
        affichertach();
    }

btnadd.addEventListener("click",ajoutertache)

const listtaches = document.getElementById("taches")
function affichertach(){
   listtaches.innerHTML =""
   taches.forEach(e => {
    listtaches.innerHTML +=`
    <div class="tache">
       <p>name du tache : <b>${e.name}</b></p>
       <p>situation :<b> ${e.situation}</b></p>
        <button class="sup" data-id="${e.id}">suppirer</button>
        <button class="edit" data-id="${e.id}">edit</button>`
   });
}

function suppirer(id){
let idx = taches.findIndex(e=> e.id == id) 
if (idx !== -1) {
    taches.splice(idx,1)
    localStorage.setItem("taches",JSON.stringify(taches));
    affichertach(); 
    console.log(taches);      
}
}
function findidsup(){
listtaches.addEventListener("click",function(e){
  if (e.target.classList.contains("sup")) {
    let id = e.target.getAttribute("data-id");
    console.log(id)
       suppirer(id);
    }
});
 }

findidsup();

const fomredit = document.getElementById("form-display")
function findidedit(){
    listtaches.addEventListener("click",function(e){
        if (e.target.classList.contains("edit")) {
            let id = e.target.getAttribute("data-id")
            edit(id);
        }
    })
}
findidedit();

let tachid = null

const newname = document.getElementById("newname");
const newsituation = document.getElementById("situation")

function edit(id){
 fomredit.style.display = "block";
   const tache = taches.find(e=> e.id == id);
   newname.value = tache.name;
   newsituation.value = tache.situation;

   
const btnsave = document.getElementById("save");

btnsave.addEventListener("click",function(){
    if (newname.value.trim()==="") {
        alert("entre nom de tache")
        return
    }
    if (newsituation.value.trim()==="") {
        alert("entre nom de tache")
        return
    }

  let idx = taches.findIndex(e=>e.id = id)
  taches[idx].name = newname.value;
  taches[idx].situation = newsituation.value;

  localStorage.setItem("taches",JSON.stringify(taches))
  fomredit.style.display = "none"
  affichertach();
})
}


affichertach();