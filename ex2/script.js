function initMap() {
    navigator.geolocation.getCurrentPosition(function (location) {
    var local = {lat: location.coords.latitude, lng: location.coords.longitude};
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 10, center: local});
      var marker = new google.maps.Marker({position: local, map: map});
  })}