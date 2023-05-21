
/* Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math. */


function random(min, max) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum;
    }

console.log(random(1, 100));