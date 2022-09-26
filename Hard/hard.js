let tomH = 9;
let tomM = 8;

let jerryH = 10;
let jerryM = 45;

let bmiTom = tomH / tomM ** 2;
let bmiJerry = jerryH / (jerryH * tomH);
let total = tomM > jerryM;
console.log(`Its Tom BMI higher than Jery's? ${total}`);
