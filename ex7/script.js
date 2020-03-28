fetch('https://ipapi.co/json')
    .then(function(response){
        return response.json()
    })
    .then(function(dados){
        document.write(JSON.stringify(dados))
    })