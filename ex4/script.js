function salvar(){
    localStorage.setItem("nome", document.getElementById("nome").value)
    localStorage.setItem("cor", document.getElementById("cor").value)
    localStorage.setItem("idade", document.getElementById("idade").value)
    localStorage.setItem("cidade", document.getElementById("cidade").value)
}
window.onload = function(){
    document.getElementById("nome").value = localStorage.getItem("nome")
    document.getElementById("cor").value = localStorage.getItem("cor")
    document.getElementById("idade").value = localStorage.getItem("idade")
    document.getElementById("cidade").value = localStorage.getItem("cidade")
   
}

if(!localStorage.getItem("nome")){
    alert("Você deve setar as suas configurações")
}else{
    initPage()
}

function txt(){
    document.write('<h1>'+localStorage.getItem("nome")+'<h1>' + '<h2>Sua idade é: '+localStorage.getItem("idade")+'</h2>' + '<p>Sua cidade é: '+localStorage.getItem("cidade")+'</p>') 
}
function cor(){
    document.body.style.backgroundColor = localStorage.getItem("cor")
}
function initPage(){
    txt()
    cor()
}