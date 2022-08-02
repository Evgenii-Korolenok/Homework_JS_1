// 2
let a1 = 5 % 3,
  a2 = 3 % 5,
  a3 = 5 + "3",
  a4 = "5" - 3,
  a5 = 75 + "кг",
  a6 = 785 * 653,
  a7 = 100 / 25,
  a8 = 0 * 0,
  a9 = 0 / 2,
  a10 = 89 / 0,
  a11 = 98 + 2,
  a12 = 5 - 98,
  a13 = (8 + 56 * 4) / 5,
  a14 = ((9 - 12) * 7) / (5 + 2),
  a15 = +"123",
  a16 = 1 || 0,
  a17 = false || true,
  a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

// 3
let height = "23 см",
  width = "10 см",
  SPryam;

let heightNum = parseInt(height),
  widthNum = parseInt(width);

SPryam = heightNum * widthNum;
console.log(SPryam, typeof SPryam);

// 4
let heightCilindr = "10 m",
  radiusCilindr = a7 / 2;
let heightCilindrNum = parseInt(heightCilindr);

VCilindra = Math.PI * Math.pow(radiusCilindr, 2) * heightCilindrNum;
console.log(VCilindra, typeof VCilindra);

// 5
let radiusKruga = '5 cm',
    radiusKrugaNum = parseInt(radiusKruga);

SKruga = Math.PI * Math.pow(radiusKrugaNum, 2);
console.log(SKruga, typeof SKruga);

// 6
let a_osnovanie = '5 cm',
    b_osnovanie = '7 cm',
    h_visota = '10 cm';

let a_osnovanieNum = parseInt(a_osnovanie),
    b_osnovanieNum = parseInt(b_osnovanie),
    h_visotaNum = parseInt(h_visota);

STrap = (a_osnovanieNum + b_osnovanieNum)/2 * h_visotaNum;
console.log(STrap, typeof STrap);

// 7
let s = '2 mln rub',
    p = '10 %',
    years = 5,
    sNum = parseInt(s),
    pNum = parseInt(p);

pereplata = (sNum/100)*pNum*years;
console.log(pereplata + ' mln rub', typeof pereplata);

// 8
let a19 = 8,
    b2 = 3;

xOne = (16+2*b2-a19)/2;
xTwo = (a19 - 15 * b2) / (b2 - 6);
xThree = (23780 / (1 + 2 + a19 + b2));

console.log(xOne);
console.log(xTwo);
console.log(xThree);