
var firebaseConfig = {
      apiKey: "AIzaSyBLEGcirR4xyJQYLDlj303I2SbFHIOg3qE",
      authDomain: "project93-9f0e2.firebaseapp.com",
      databaseURL: "https://project93-9f0e2-default-rtdb.firebaseio.com",
      projectId: "project93-9f0e2",
      storageBucket: "project93-9f0e2.appspot.com",
      messagingSenderId: "29629911868",
      appId: "1:29629911868:web:ee6cd3b05cf1378d6b0439"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
      user_name="";
      localStorage.clear;
      window.location="index.html"; 
      
}
function addroom()
{
      
      if (room_name.value.length == 0) {
         document.getElementById("error").innerHTML="*there isn't any name given for your classroom. Please give it a name";  
      }
      else
      {
            room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({purpose:"adding room"});
            localStorage.setItem("room_name",room_name);
      }
     
}
user_name = localStorage.getItem("user_name");
document.getElementById("hi").innerHTML="Welcome,"+user_name;
