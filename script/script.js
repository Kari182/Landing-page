function validarCorreo(){
    var email; 
    email=document.getElementById("txtemail").value;
    if (email===""){
      alert("el email esta vacio");
      document.getElementById("txtemail").focus();
      return false;
    } else{
      alert("Gracias por vender con nosotros");
      document.getElementById("txtemail").value="";
      document.getElementById("txtemail").focus();
      return false;
    }
       }