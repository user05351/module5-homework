
/* Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */


let str1, str2;

str1 = 'Hello';
str2 = str1.split('').reverse().join('');

console.log(str2);