/*
    Imagine que um professor precise corrigir as provas de seus alunos, a prova vale de 0 a 100.
  Este professor gosta de arrendondar a nota para cima se a diferença da nota até o proximo múltiplo 
  de 5. Uma nota menor que 40 significa que o aluno foi reprovado, então se a nota for menor que 38
  não é feito o arredondamento.
  
  Ex: 
    Nota obtida: 84
    Nota será arrendondada par: 85
 
*/
function howMuchToNextMultiplesOfFive(x) {
  let counter = 0;

  while (x % 5 !== 0) {
    x++;
    counter++;
   }

    return counter;
};

function gradingStudents(grades) {
    const roundedGrades = grades.map( (grade) => {
        let difference = howMuchToNextMultiplesOfFive(grade);
        let rounded = grade + difference;

        if (difference < 3 && rounded >= 40 ) return rounded;

        return grade;
    } );

    return roundedGrades;
}
