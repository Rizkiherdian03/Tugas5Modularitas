// app.js
const module1 = require('./module1');
const module2 = require('./module2');
const module3 = require('./module3');
const module4 = require('./module4');

const result1 = module1.penambahan(7, 3);
const result2 = module2.pengurangan(7, 3);
const result3 = module3.perkalian(7, 3);
const result4 = module4.pembagian(7, 3);

console.log(`Hasil penambahannya adalah:`, result1);
console.log(`Hasil pengurangannya adalah:`, result2);
console.log(`Hasil perkaliannya adalah:`, result3);
console.log(`Hasil pembagiannya adalah:`, result4);
