
const botao_enviar = document.getElementById("bt-enviar");
const botao_limpar = document.getElementById("bt-limpar");
const nome = document.getElementById("txt-nome");
const mensagem = document.getElementById("txt-mensagem");
const p_erros = document.getElementById("erros");

botao_enviar.addEventListener("click", function(event){
    if(nome.value == ""){
        // Cometario: bloc de codigo que excuta caso o if seja verdadeiro
        //alert("O nome não pode estar em branco");
        p_erros.innerHTML = "O nome não pode estar em branco!";
        event.preventDefault();
    }
});
