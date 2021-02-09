/* Sabendo que a formula para calcular a area de um circulo é: A= π * R²   A = area
                                                                           π = 3.14159
                                                                           R = raio
   Calcule a area do circulo de acordo com o raio dado e retorne no
   no formato de número com 4 casas depois da virgula.
   
   Ex: Input: 2
       Output: 12.5664
*/

function areaOfACircle(radius) {
    const area = 3.14159 * (radius * radius);
    return area.toFixed(4);
};


/* https://www.urionlinejudge.com.br/judge/en/problems/view/1002 */
