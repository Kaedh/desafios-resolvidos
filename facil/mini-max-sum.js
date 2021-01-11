/*
    Dado uma lista de números inteiros, descubra o valor máximo e mínimo que pode ser calculado
  ao retirar um elemento da lista.
  
  Ex:
    arr = [1,3,5,7,9]
   
   
   Resultado:
    16 24
    
    
    Obs.O desafio original dizia que a lista dada seria sempre com 5 elementos, quis fazer essa alteração
        para que este desafio ficasse mais interessante.
*/

function miniMaxSum(arr) {
    const sortedArray = arr.sort ( (a,b) => { return a - b });
    const lastElementIndex = arr.length - 1;

    const maxSumArray = sortedArray.slice(1);
    const minSumArray = sortedArray.slice(0, lastElementIndex);
    
    const maxSum = maxSumArray.reduce((a, b) => a + b, 0);
    const minSum = minSumArray.reduce((a, b) => a + b, 0);
    
    console.log(minSum, maxSum); 
}
