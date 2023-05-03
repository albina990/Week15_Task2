/* Дано произвольное целое число `n`. Написать программу, которая:
- разбивает число `n` на цифры и выводит их на экран;
- подсчитывает сколько цифр в числе `n` ;
- находит сумму цифр числа `n` ;
- меняет порядок цифр числа `n` на обратный;

Пример: 
Вводим число 123
— цифр в числе:  3
— сумма:  6
— обратный порядок:  321 */

function getCrossSum(x){
    let arrayX = x.toString().split('');                      // преобразуем число в строку и разбиваем посимвольно на массив
    let count = arrayX.length;                                // подсчитываем количество значений в массиве
    let sum = arrayX.reduce((a, b) => Number(a) + Number(b)); // находим сумму всех значений массива
    let arrayXClone = arrayX.slice(0);                        // создаём копию исходного массива
    let reverseX = arrayXClone.reverse().join('');            // меняем порядок значений и преобразуем массив в строку

    return `    - цифр в числе: ${count}
    - сумма: ${sum}
    - обратный порядок: ${reverseX}`;

}

console.log(getCrossSum(123));
