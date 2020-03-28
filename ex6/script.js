window.onload = function(){
    document.getElementById("memoria").innerHTML = navigator.deviceMemory
    let conexao = document.getElementById("conexao")
    if(navigator.online){
        conexao.innerHTML = "online"
    }else {
        conexao.innerHTML = "offline"
    }
    document.getElementById("linguagem").innerHTML = navigator.language
    document.getElementById("userAgent").innerHTML = navigator.userAgent
}