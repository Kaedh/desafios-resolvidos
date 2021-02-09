/* 
  Dado uma lista de inteiros retorne a some de todos os elementos, lembrando que alguns desses números podem ser muito grandes.
  exemplo de input: [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
  resultado esperado: 5000000015
*/

function aVeryBigSum(lista) {
  let somaDosElementos = 0;
  
  lista.forEach( (elemento) => {
    somaDosElementos += elementos;
  });
  
  return somaDosElementos;
};

/* https://www.hackerrank.com/challenges/a-very-big-sum/problem */
