console.log(firebase);

let email = document.getElementById('email');
let password = document.getElementById('password');
let  nameuser = document.getElementById('name');
let age = document.getElementById('age');

// _____ buttons call_____

var signup = document.getElementById('signup');
var signIn = document.getElementById('signIn');

signup.addEventListener("click", async function () {
    await firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
   .then(async(user)=>{

    
    var userObject = {
        name:nameuser.value,
        email:email.value,
        password:password.value,
        userId : user.user.uid,
        age:age.value
      }
      await   firebase.database().ref("users").child(user.user.uid).set(userObject)
  alert("user save database")
  window.location.href="loginPage.html"
  
   })

   .catch((error)=>{
    alert(error.message)
   })



})

// signIn.addEventListener("click", async function asyn(){
//     await firebase.auth().signInWithEmailAndPassword(email.value,password.value)
//     .then((user)=>{
//      console.log(user.user.uid)
//     //  localStorage.setItem("userId",user.user.uid)
//     //  window.location.replace("mainpage.html")
 
//     })
//     .catch((error)=>{
//        localStorage.clear()
 
 
//      alert(error.message)
//     })
    
//  })
