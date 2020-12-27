

function login(){
    var username=document.getElementById('userName').value
    var userPass=document.getElementById('userPass').value
    if(username=='abc' || userPass=='123'){
        window.open('./Home.html')
        
    }
    else{
        window.open('./Error.html')
    }
}