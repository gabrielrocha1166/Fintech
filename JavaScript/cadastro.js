const btn_enviar = document.querySelector(".concluir")

btn_enviar.onclick = function () {
   if(document.querySelector(".nome").value=="" ||
   document.querySelector(".nome").value.length < 2)
   {
   alert( "Preencha campo NOME corretamente!" );
   document.querySelector(".nome").focus();
   return false;
   }

   open('painel_de_controle.html')
}
