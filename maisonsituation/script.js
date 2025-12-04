const dataContent = document.getElementById("dataContent");

let data = [
    {
        id: 1,
        firstname: "Tayeb",
        lastname: "SOUINI",
        email: "Tayeb@gmail.com"
    }
]


function afficherData() {
    dataContent.innerHTML = "";
    data.forEach(e=>{
        dataContent.innerHTML +=`
              <tr>
                    <th scope="row">${e.firstname}</th>
                    <td>${e.lastname}</td>
                    <td>${e.email}</td>
                    <td>
                        <button id="${e.id}" class="btn btn-danger">Delete</button>
                        <button id="${e.id}" class="btn btn-info">Update</button>
                    </td>
                </tr>
                `;
        
    })
};
 const firstname = document.getElementById("firstname")
 const lastname = document.getElementById("lastname")
 const email = document.getElementById("email")
const btnajou = document.getElementById("ajouter");

let conteur = JSON.parse(localStorage.getItem("conteur")) || 1;

function ajouterdata(e){
    e.preventDefault();
    conteur++;
    localStorage.setItem("conteur",JSON.stringify(conteur))
    let user = {
        id:conteur,
        firstname:firstname.value,
        lastname:lastname.value, 
        email:email.value
    };
    data.push(user)

afficherData();


}
btnajou.addEventListener("click", ajouterdata)

console.log(1);

// const btnsup = dataContent.querySelectorAll("btn btn-danger");
// btnsup.forEach(e=>{
//     e.addEventListener("click",function(){
//         let id = this.getAttribut("id")
//        supprime(id);
//        console.log(data);
//        afficherData();

//     })
// })
//  function supprime(id){
//     let idx = data.findIndex(e=>e.id == id)
//    data.splice(idx,1)
//  }

function findid(){
    dataContent.addEventListener("click",function(e){
        if(e.target.classList === "btn btn-danger"){
            let id = e.getAttribut("id")
            supprime(id);
        }
    });
}
function supprime(id){
    let idx = data.findIndex(e=>e.id == id)
    data.splice(idx,1)
}
findid();
afficherData();

// ---------------------------

const serche = document.getElementById("serche");

function filter(){
    let datafil = data.filter(e=> e.firstname === serche.value)
    console.log(datafil)
}
const serchebtn = document.getElementById("serchebtn")
serche.addEventListener("input",filter)



