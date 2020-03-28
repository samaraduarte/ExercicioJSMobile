// JSON.stringify () pega um objeto JavaScript e o transforma em uma string JSON.
// JSON.parse () pega uma string JSON e a transforma em um objeto JavaScript.
function salvar(){
    localStorage.setItem('nome', JSON.stringify(document.getElementById("nome").value)),
    localStorage.setItem('data', JSON.stringify(document.getElementById("data").value)),
    localStorage.setItem('qtdCampus', JSON.stringify(document.getElementById("qtdCampus").value)),
    localStorage.setItem('qtdAlunos', JSON.stringify(document.getElementById("qtdAlunos").value)),
    localStorage.setItem('qtdProf', JSON.stringify(document.getElementById("qtdProf").value)),
    localStorage.setItem('qtdCursos', JSON.stringify(document.getElementById("qtdCursos").value)),
    localStorage.setItem('mec', JSON.stringify(document.getElementById("mec").value))
}

window.onload = function(){
    if(!localStorage.getItem("nome")){
    }else{
        const nome = localStorage.getItem("nome", JSON.stringify(document.getElementById("nome").value))
        const nomeToObj = JSON.parse(nome)
        console.log("O nome é: " + nomeToObj)
        document.getElementById("nome").value = nomeToObj

        const data = localStorage.getItem("data", JSON.stringify(document.getElementById("data").value))
        const dataToObj = JSON.parse(data)
        console.log("A data é: " + dataToObj)
        document.getElementById("data").value = dataToObj

        const qtdCampus = localStorage.getItem("qtdCampus", JSON.stringify(document.getElementById("qtdCampus").value))
        const qtdCampusToObj = JSON.parse(qtdCampus)
        console.log("A quantidade de campus é: " + qtdCampusToObj)
        document.getElementById("qtdCampus").value = qtdCampusToObj

        const qtdAlunos = localStorage.getItem("qtdAlunos", JSON.stringify(document.getElementById("qtdAlunos").value))
        const qtdAlunosToObj = JSON.parse(qtdAlunos)
        console.log("A quntidade de alunos é: " + qtdAlunosToObj)
        document.getElementById("qtdAlunos").value = qtdAlunosToObj

        const qtdProf = localStorage.getItem("qtdProf", JSON.stringify(document.getElementById("qtdProf").value))
        const qtdProfToObj = JSON.parse(qtdProf)
        console.log("A quantidade de professores é: " + qtdProfToObj)
        document.getElementById("qtdProf").value = qtdProfToObj

        const qtdCursos = localStorage.getItem("qtdCursos", JSON.stringify(document.getElementById("qtdCursos").value))
        const qtdCursosToObj = JSON.parse(qtdCursos)
        console.log("A quantidade de cursos é: " + qtdCursosToObj)
        document.getElementById("qtdCursos").value = qtdCursosToObj

        const mec = localStorage.getItem("mec", JSON.stringify(document.getElementById("mec").value))
        const mecToObj = JSON.parse(mec)
        console.log("O melhor curso do MEC é: " + mecToObj)
        document.getElementById("mec").value = mecToObj
    }
}