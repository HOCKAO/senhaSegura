const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaisculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('forca');


botoes [0].onclick = diminuiTamanho;
botoes  [1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha >1){
    
         tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if(tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}


function geraSenha() {
     let alfabeto = '';
     if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
     }
     if (checkbox[1].checked) {
        alfabeto = alfabeto + letraesMinusculas;
     }
     if (checkbox[2].checked) {
        alfebeto = alfabeto + numeros;
     }
     if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
     }




     if (alfabeto)

     


}