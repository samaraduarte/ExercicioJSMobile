function localizacao() {
    let mapa = document.getElementById('map')
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (location) {
          mapa.innerHTML = '<p>Suas cordenadas é: </p> Latitude: ' + location.coords.latitude + ' Longitude: ' + location.coords.longitude
        })
    } else {
      mapa.innerText = 'API não suportada'
    }
    
  };