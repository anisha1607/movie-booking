function validate(){
  var username=document.myform.username.value;
  var password=document.myform.password.value; 
  var x=document.myform.email.value;  
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");
  var secondpassword=document.myform.cpassword.value;
  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){ 
    document.getElementById("femail").style.color="red";
    document.getElementById("femail").style.padding="45px";
    document.getElementById("femail").innerHTML= "Please enter a valid email!";  
  return false;
  }  
  else{
    document.getElementById("femail").innerHTML= "";
  }
  
  if(password.length<6){  
    document.getElementById("fpass").style.color="red";
    document.getElementById("fpass1").style.color="red";
    document.getElementById("fpass").style.margin="45px";
    document.getElementById("fpass1").style.margin="45px";
    document.getElementById("fpass").innerHTML="Password must be at least 6 characters ";
    document.getElementById("fpass1").innerHTML="long!!";
    return false;  
  }

  else{
    document.getElementById("fpass").innerHTML="";
    document.getElementById("fpass1").innerHTML="";
  }
  
  if(password==secondpassword){  
    return true;  
  }  
  if(password!=secondpassword){  
    document.getElementById("fcpass").style.color="red";
    document.getElementById("fcpass").style.padding="45px";
    document.getElementById("fcpass").innerHTML="Password must be same!!";  
    return false;  
  }
}

function showPass(){
  var x = document.getElementById("pass");
  var y = document.getElementById("cpass");

  if (x.type === "password") {
    x.type = "text";
    y.type = "text";
  } 

  else {
    x.type = "password";
    y.type = "password";
  }
}