/*
  O objetivo deste desafio é reproduzir uma "escada" com os caracteres #.
  É dado o tamanho da escada em n, onde n seria a altura e largura da escada.
  Ex:
  
        n = 4
  
            #
           ##
          ###
         #### 

*/

function staircase(n) {
    let spacesCounter = n - 1;
    let hashtagCounter = 1;
    
    for(let i = 0; i < n ; i++) {
        console.log(' '.repeat(spacesCounter) + '#'.repeat(hashtagCounter));
        spacesCounter--;
        hashtagCounter++;
    };
}
