console.log(firebase);

let email = document.getElementById('email');
let password = document.getElementById('password');
let signin = document.getElementById('signin');

signin.addEventListener("click", async function asyn(){
    await firebase.auth().signInWithEmailAndPassword(email.value,password.value)
    .then((user)=>{
     console.log(user.user.uid)
     localStorage.setItem("userId",user.user.uid)
     window.location.replace("index.html")    
 
    })
    .catch((error)=>{
       localStorage.clear()
 
 
     alert(error.message)
    })
    
 })