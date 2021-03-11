
const botao_enviar = document.getElementById("bt-enviar");
const botao_limpar = document.getElementById("bt-limpar");
const nome = document.getElementById("txt-nome");
const email = document.getElementById("txt-email");
const mensagem = document.getElementById("txt-mensagem");
const p_erros = document.getElementById("erros");

botao_enviar.addEventListener("click", function(event){
    let erros = "";
    if(nome.value == ""){
        // Cometario: bloc de codigo que excuta caso o if seja verdadeiro
        //alert("O nome não pode estar em branco");
        erros = erros + "O nome não pode estar em branco!<br>";
        event.preventDefault();
    }
    if(email.value == ""){
        erros = erros + "O e-mail não pode estar vazia!<br>";
        event.preventDefault();
    }
    if(mensagem.value == ""){
        erros = erros + "A mensagem não pode estar vazia!";
        event.preventDefault();
    }
    p_erros.innerHTML = erros;
});

/*
//Posso escrever os eventos de click do botão limpar e mudança do campo nome como abaixo
botao_limpar.addEventListener("click", function(event){
    p_erros.innerText = "";
});

nome.addEventListener("change", function(event){
    nome.value = nome.value.toUpperCase();
});
*/

//ou posso escrever od dois eventos acima da seguinte forma:

botao_limpar.onclick = function(event){
    p_erros.innerText = "";
}

nome.onchange = function(event){
    nome.value = nome.value.toUpperCase();
}