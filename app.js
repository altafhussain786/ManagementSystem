
function signUp(){
    
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    

    
    var databse=firebase.database().ref('Users')
    var key=databse.push().key
    
    var Users={
        key:key,
        email:email,
        password:password
    }
    

    firebase.database().ref('Users/'+key).set(Users)

   
}


function Login(){
    firebase.database().ref('Users/').on('child_added',function(userdata){
        console.log(userdata.val().key.email)
        

    var loginuser=document.getElementById('userName').value
    var password=document.getElementById('userPass').value
    console.log(userdata.val().email)

        if(userdata.val().key.email == loginuser && userdata.val().key.password==password)
            { window.open('./Home.html')}
        else
        {   
           
            window.open('./Error.html')
        }
    })
   
}



