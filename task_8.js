
/* Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки. */


let randArr = new Map();

randArr.set (1, 'One');
randArr.set ('Two', 2);
randArr.set ('3', 'Three');
// console.log(randArr.keys());

for (let [key, value] of randArr) {
    console.log('Ключ - ' + key + ' , значение - ' + value);
}