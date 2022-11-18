const btn_enviar = document.querySelector(".enviar")

btn_enviar.onclick = function () {
   if(document.querySelector("#E-mail").value=="" ||
   document.querySelector("#E-mail").value.indexOf('@')==-1 || 
   document.querySelector("#E-mail").value.indexOf('.')==-1
   )
   {
   alert( "Preencha campo E-mail corretamente corretamente!" );
   document.querySelector("#E-mail").focus();
   return false;
   }
   alert( "E-mail enviado! Verifique sua caixa de entrada e siga os passos para recuperar sua senha." );
}
