const btn_entrar = document.querySelector(".entrar")
const btn_esqueci_minha_senha = document.querySelector(".esqueci_minha_senha")

btn_entrar.onclick = function () {
   if(document.querySelector("#E-mail").value=="" ||
   document.querySelector("#E-mail").value.indexOf('@')==-1 || 
   document.querySelector("#E-mail").value.indexOf('.')==-1
   )
   {
   alert( "Preencha campo E-mail corretamente corretamente!" );
   document.querySelector("#E-mail").focus();
   return false;
   }

   if(document.querySelector("#Senha").value=="" ||
   document.querySelector("#Senha").value.length < 8)
   {
   alert( "Preencha campo SENHA corretamente!" );
   document.querySelector("#Senha").focus();
   return false;
   }

   open('painel_de_controle.html')
}

btn_esqueci_minha_senha.onclick = function () {
   open('esqueci_minha_senha.html')
}
