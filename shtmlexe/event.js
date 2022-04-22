
const cookieBox=document.querySelector(".wrapper"),
acceptbtn=cookieBox.querySelector(".buttons button");
acceptbtn.onclick=()=>{
    document.cookie="CookieBy=istore; max-age="+60*60*24*30;
    if(document.cookie){
        cookieBox.classList.add("hide");
    }
    else{
        alert("cookie cant be set");
    }
}
let checkcookie=document.cookie.indexOf("CookieBy=istore");
checkcookie !=1 ? cookieBox.classList.add("hide"):cookieBox.classList.remove("hide");