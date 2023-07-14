var botao = document.querySelector("button")
var estaDark = false

botao.addEventListener("click", ativarDark)

function ativarDark(){                                        
var body = document.querySelector("body")
if(estaDark){
    body.classList.remove("Dark")
    botao.innerText = " Ativar Dark"
    estaDark = false
}else{
body.classList.add("Dark")
botao.innerText = " Remover Dark"
estaDark = true
}
}
var botaoIngressos = document.querySelector("button#ingressos")
botaoIngressos.addEventListener("click", compraringressos)
function compraringressos() {
  var h1 = document.querySelector("h1")
  h1.innerText = "O seu número na fila é   " + Math.floor(Math.random() *800000)

  var img = document.querySelector("img")
  img.classList.remove("esconder")
}






