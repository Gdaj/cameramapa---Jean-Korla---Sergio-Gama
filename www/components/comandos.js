var click = new Audio();
click.src = 'sound/click.mp3';

function mudarParaFoto(){
  document.getElementById("imgCamera").src = "img/camera.gif";
  click.play();
  window.setTimeout('location.href = "foto.html"', 1000);
}

$(document).on("click", "#btnFoto", function(){
  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL, saveToPhotoAlbum:true, });

  function onSuccess(imageData) {
      click.play();
      var image = document.getElementById('imgFoto');
      image.src = "data:image/jpeg;base64," + imageData;


          var onSuccess = function(position) {
            $ ("#valLat").val(position.coords.latitude);
            $ ("#valLng").val(position.coords.longitude);
        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

       function mapa(position){

          L.mapquest.key = 'Tb4mQvnfzr5SSkAldnGNtLUzzpQTaaaL';

          var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
          });

          L.marker([position.coords.latitude, position.coords.longitude], {
              icon: L.mapquest.icons.marker(),
              draggable: false
            }).bindPopup('Denver, CO').addTo(map);

            L.circle([position.coords.latitude, position.coords.longitude], { radius: 200 }).addTo(map);

          map.addControl(L.mapquest.control());
        };
        navigator.geolocation.getCurrentPosition(mapa);
  }
  function onFail(message) {
      alert('Failed because: ' + message);
  }

});
function voltar(){
  location.href = "index.html";
}