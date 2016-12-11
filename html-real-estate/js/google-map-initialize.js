
/*Property Details map*/

$(document).ready(function() {
    function initMap() {
        var uluru = {lat: -31.829086, lng:115.856431};
        var map = new google.maps.Map(document.getElementById('property-google-map'), {
            zoom: 16,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
    initMap();
});
  




