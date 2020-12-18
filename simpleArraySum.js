/*
  Dada uma lista de de inteiros, encontre a soma de todos os seus elementos.
  
  exemplo de input: [ 1, 2, 3 ]
  resultado esperado: 6
*/


function simpleArraySum(lista) {
  let elementosSomados = 0;
  
  lista.forEach( (elemento) => {
    elementosSomados += elemento;
  });
  
  return elementosSomados;
};



