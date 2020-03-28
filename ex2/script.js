function initMap() {      
    var localizacao = navigator.geolocation.getCurrentPosition(initMap)
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: localizacao});
    var marker = new google.maps.Marker({position: localizacao, map: map});
    }