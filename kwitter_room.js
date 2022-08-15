
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC5ajATY96ADdSPjXIxxoODyCFuZ6F6UiY",
      authDomain: "kwitter-app-a7e8a.firebaseapp.com",
      databaseURL: "https://kwitter-app-a7e8a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-a7e8a",
      storageBucket: "kwitter-app-a7e8a.appspot.com",
      messagingSenderId: "646654605908",
      appId: "1:646654605908:web:9e7ec1ae03a8985d104bc1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
    function add_room()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room name- "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log("Name-"+name);
      localStorage.setItem("room_name",name);
      window.locaion="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}