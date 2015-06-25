angular.module('starter.controllers', [])

<<<<<<< HEAD
       
    .controller('MapCtrl', function($scope, $ionicLoading, $timeout) {
  
})
	
	
.controller('cameraCtrl', function($ionicPlatform, $rootScope, $scope, $cordovaCamera) {
    $ionicPlatform.ready(function() {
       
	   
	    var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $scope.takePicture = function() {
            $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.imgSrc = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                console.log(err);
=======
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
>>>>>>> origin/master
            });
        }
<<<<<<< HEAD
 
    });
});
=======


       // window.addEventListener("onload", initialize);
        google.maps.event.addDomListener(window, "load", initialize);
        console.log("end");
    });
>>>>>>> origin/master
