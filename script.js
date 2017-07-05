/*global google*/
/*global map*/
/*global marker*/
/*global addMarker*/
function initMap() {
    'use strict';
    //map options 
    var options = {
            zoom: 10, //zoom level of the map when it loads
            center: { //center location of the map when it loads
                lat: 28.6315,
                lng: 77.2167
            }
        },

        map = new google.maps.Map(document.getElementById('map'), options);

    //map marker to add one loction 
    /* marker = new google.maps.Marker({
         position: {
             lat: 28.5442,
             lng: 77.3334
         },
         map: map
     });*/

    addMarker({ //location 1 
        lat: 28.5442,
        lng: 77.3334
    });
    addMarker({ // location 2 
        lat: 28.5534,
        lng: 77.1942
    });
    addMarker({ //location 3 
        lat: 28.6246,
        lng: 77.0844
    });

    function addMarker(coords) { // function to add multiple marker locations 
        var marker = new google.maps.Marker({
            position: coords,
            map: map
        });
    }
}

/*global $*/
$(function () {
    "use strict";
    $('.nav-btn').on('click',
        function () {
            $('.nav').slideToggle('open');
        });
});


/*function toggleMenu() {
    "use strict";
    var list = document.getElementById("nav");
    if (list.style.display === "none") {
        list.style.display === "block";
    } else {
        list.style.display = "none";
    }
}*/

function myFunction(x) {
    'use strict';
    x.classList.toggle("change");
}
// form validation
