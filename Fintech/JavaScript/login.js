const btn_login = document.querySelector("button#btn_login")
const btn_esqueci = document.querySelector("button#btn_esqueci")

btn_login.onclick = function () {
    open('painel_de_controle.html')
 }

 btn_esqueci.onclick = function () {
    open('esqueci_minha_senha.html')
 }