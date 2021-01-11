/*
    Você é o responsavél por um bolo de aniversário, e decidiu que o bolo terá uma vela
  para cada ano da criança, ela conseguirá soprar apenas as velas mais altas. Dado uma 
  lista com a altura das velas, retorne a quantidade velas que a criança irá soprar.
  
  Ex: 
  
  entrada: velas = [4, 4, 1, 3 ]
  retorne: 2
  
  a vela mais alta desta lista tem o valor 4, portanto a criança irá soprar duas velas.

*/

function birthdayCakeCandles(candles) {
    const tallestCandle = candles.reduce((a,b) => { return Math.max(a, b); });
    let tallestCandlesSum = 0;
    
    candles.forEach(candle => {
        if (candle === tallestCandle) {
            tallestCandlesSum++;
        };
    });
    
    return tallestCandlesSum;
};
