function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="1234"){
        window.alert("successful entry");
        return false;
    }
    else{
        window.alert("invalid credentials");
    }
}