/*
    Dado uma string com a hora no formato de 12 horas AM/PM, converta para o formato militar de 24 horas.
  Lembrando que 12:00AM é igual a 00:00 no formato militar e que 12:00PM é igual a 12:00 no formato militar.
  
  Ex: 07:05:45PM
  
  Resultado: 19:05:45

*/

function timeConversion(s) {
    let hour = Number(s.substring(0,2));
    let minutesAndSeconds = s.substring(2,8);
    let pmOrAm = s.substring(8);

    if (hour === 12 && pmOrAm ==="PM") hour = '12';
    if (hour === 12 && pmOrAm ==="AM") hour = '00';

    if (Number.isInteger(hour) && pmOrAm === 'PM') hour += 12;

    if (Number.isInteger(hour) && hour <= 9) hour = `0${hour}`;

    const timeConverted = `${hour}${minutesAndSeconds}`;

    return timeConverted;
}


/* https://www.hackerrank.com/challenges/time-conversion/problem */
