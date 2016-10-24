$(document).ready(function(){
  document.addEventListener("backbutton", onBackKeyDown, false);
//  document.addEventListener("ondeviceready",onDeviceReady,false);
  document.addEventListener("deviceready",onDeviceReady, false);
  //document.addEventListener("pause",onPause, false);
  document.addEventListener("resume",onResume, false);


  $('.but1').click(function(){
    window.location.href="../www/text.html";
  });
});

function fcm(){
  FCMPlugin.onNotification(
    function(data){
      if(data.wasTapped){
        //Notification was received on device tray and tapped by the user.
        alert( JSON.stringify(data) );
      }else{
        //Notification was received in foreground. Maybe the user needs to be notified.
        alert( JSON.stringify(data) );
      }
    },
    function(msg){
      console.log('onNotification callback successfully registered: ' + msg);
    },
    function(err){
      console.log('Error registering onNotification callback: ' + err);
    }
  );
}

function onDeviceReady(){
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyAZwm70FFT2Q8yEzjQoEhQCOKzFqAlgQh4',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'
  };
  firebase.initializeApp(config);
  fcm();
}

function onPause(){
  alert("OnPause");
  fcm();
}

function onResume(){
  alert("OnResume");
  fcm();
}

function onBackKeyDown(e) {
   e.preventDefault();
   navigator.app.clearCache();
   navigator.app.clearHistory();
   navigator.app.exitApp();
}
