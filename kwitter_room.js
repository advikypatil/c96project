var firebaseConfig = {
    apiKey: "AIzaSyDRxIRma3p574U2otTqmj5ZPtY-u8LcliI",
    authDomain: "kwitter-e8371.firebaseapp.com",
    databaseURL: "https://kwitter-e8371-default-rtdb.firebaseio.com",
    projectId: "kwitter-e8371",
    storageBucket: "kwitter-e8371.appspot.com",
    messagingSenderId: "623288265607",
    appId: "1:623288265607:web:8c3ea6f2ee8a03a8b10122"
  };
  
  
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");


document.getElementById("user_name").innerHTML = "Welcome" +  user_name +"!"    

function addRoom()
{
    room_names = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_names).update({
    purpose : "adding room name"
    } )
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
    
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_names);

    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

       document.getElementById("output").innerHTML+=row;


    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html"
}


function logout()
{
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
}