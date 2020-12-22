/*
      Dado uma lista de inteiros, calcule a fração dos elementos que são positivos, negativos e zeros.
    mostre na tela cada fração em uma linha e com 6 digitos depois da virgula.
    
    exemplo de entrada: [ 1, 1, 0, -1, -1 ]
    
    resultado esperado: 0.400000
                        0.400000
                        0.200000
*/


function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeros    = 0; 
    let size = arr.length;
    
    arr.forEach((element) => {
        if (element > 0) positives++;
        if (element === 0) zeros++;
        if (element < 0) negatives++;
    });
    
    const positiveRatio = (positives / size).toFixed(6);
    const negativeRatio = (negatives / size).toFixed(6);
    const zeroRatio = (zeros / size).toFixed(6);
    
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
};
