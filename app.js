
let signUp=()=>{
    
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    

    //Firebase signup method 


    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
   
}

let Login=()=>{
    let email=document.getElementById('userName').value
    let password=document.getElementById('userPass').value
    

    //Firebase Login method

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    alert("login sucessfully")  
    window.open('./Home.html')
    console.log("sucessfully login......")  
    
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}


// function Login(){
    
//     var loginuser=document.getElementById('userName').value
//     var password=document.getElementById('userPass').value
    
   
// }



