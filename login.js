function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="user"){
        alert("ingreso correcto");
        return false;
    }
    else{
        alert("ingreso incorrecto");
    }

}





