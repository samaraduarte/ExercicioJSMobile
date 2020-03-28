function salvar(){
    localStorage.setItem("nome", document.getElementById("nome").value)
}
window.onload = function(){
    document.getElementById("nome").value = localStorage.getItem("nome")
    
}

if(!localStorage.getItem("nome")){
    alert("Você deve setar as suas configurações")
}

function mostrar(){

document.write('<h1>'+localStorage.getItem('nome')+'<h1>' )

}