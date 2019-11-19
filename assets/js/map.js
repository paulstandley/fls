// Initialize and add the map
function initMap() {
  // The location of medina bazar 30.413660, -9.599886
  var medina = {lat: 30.413660, lng: -9.599886};
  // The map, centered at median
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: medina});
  // The marker, positioned at medina
  var marker = new google.maps.Marker({position: medina, map: map});
}
