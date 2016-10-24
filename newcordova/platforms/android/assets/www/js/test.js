//global variable


$(document).ready(function(){
//check deviceready than start script
  document.addEventListener("deviceready", onDeviceReady, false);
  var scrn = document.getElementById("swipe");
  onDeviceReady(scrn);
});

function onDeviceReady(scrn) {
  Hammer(scrn).on("swipeleft", function() {
    alert("swipeleft");
  });
  Hammer(scrn).on("swiperight", function() {
    alert("swiperight");
  });
  $('.homeButton').click(function(){
    window.location.href="../www/index.html";
  });
}


/* write function */
