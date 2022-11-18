const btn_enviar = document.querySelector(".concluir")

btn_enviar.onclick = function () {
   if(document.querySelector("#nome_completo").value=="" ||
   document.querySelector("#nome_completo").value.length < 2)
   {
   alert( "Preencha campo NOME corretamente!" );
   document.querySelector("#nome_completo").focus();
   return false;
   }

   if(document.querySelector("#data_de_nascimento").value=="" ||
   document.querySelector("#data_de_nascimento").value.length < 8)
   {
   alert( "Preencha campo DATA DE NASCIMENTO corretamente!" );
   document.querySelector("#data_de_nascimento").focus();
   return false;
   }

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
   alert( "Preencha campo SENHA com no mínimo 8 caracteres!" );
   document.querySelector("#Senha").focus();
   return false;
   }

   open('painel_de_controle.html')
}
