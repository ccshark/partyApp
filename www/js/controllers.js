angular.module('starter.controllers', [])

    .controller('MapCtrl', function($scope) {

        function initialize() {
            console.log("check");
            var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            //Test to see if the map is draggable
            var rendererOptions = {
                draggable: true
            };
            console.log("loo");
            var map = new google.maps.Map(document.getElementById("map"), mapOptions, rendererOptions);

            navigator.geolocation.getCurrentPosition(function(pos) {
                map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                var myLocation = new google.maps.Marker({
                    position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                    map: map,
                    title: "My Location"
                });
                console.log("loo");
            });

            $scope.map = map;
        }


       // window.addEventListener("onload", initialize);
        google.maps.event.addDomListener(window, "load", initialize);
        console.log("end");
    });