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

function hex2rgb(hex) {
    var c = hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgb('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
}

function txt(){
    document.write('<h1>'+localStorage.getItem("nome")+'<h1>' + '<h2>Sua idade é: '+localStorage.getItem("idade")+'</h2>' + '<p>Sua cidade é: '+localStorage.getItem("cidade")+'</p>') 
}
function cor(){
    document.body.style.backgroundColor = hex2rgb(localStorage.getItem("cor")) 
}
function initPage(){
    txt()
    cor()
}