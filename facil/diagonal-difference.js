/*
    Dada uma matriz quadrada, calcule a diferença absoluta da soma de suas diagonais.
  exemplo:
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
  
  a soma da diagonal esquerda-direita = 1 + 5 + 9 = 15
  a soma da diagonal direita-esquerda = 3 + 5 +7  = 17
  
  | 15 17 | = 2;
*/


function findLeftDiagonal(arr) {
    let leftDiagonal = [];
    
    for (let i = 0; i < arr.length; i++) {
        leftDiagonal.push(arr[i][i]);
    };
    
    return leftDiagonal;
}

function findRightDiagonal(arr) {
    let rightDiagonal = [];
    let count = arr.length - 1;
    
    for (let i = 0; i < arr.length; i++) {
        rightDiagonal.push(arr[i][count]);
        count--;  
    };
    
    return rightDiagonal;
}

function diagonalDifference(arr) {
    const leftDiagonal = findLeftDiagonal(arr);
    const rightDiagonal = findRightDiagonal(arr);
    
    const sumLeftDiagonal = leftDiagonal.reduce((total, value) => total + value );
    const sumRightDiagonal = rightDiagonal.reduce((total, value) => total + value);
    
    const diagonalDifference = Math.abs(sumLeftDiagonal - sumRightDiagonal);
    
    return diagonalDifference;
}
