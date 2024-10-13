console.log("Js dosyası bağlandı.");

var deneme = 5;
varDeneme = 6;
let myVar = 5;
const myVar1 = 6;

const num1 = 10;
const num2 = 69;
const toplam = num1 + num2;
console.log(toplam);

const msg1 = "Hello";
const msg2 = "World!";

const mesaj = msg1 + msg2;
console.log(mesaj);

const firstName = "Koray";
const lastName = "Koksal";
console.log(firstName, lastName);
const fullName = firstName + " " + lastName;
console.log(fullName);

const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

const num3 = "6";
const num4 = "7";
console.log(num3 + num4); // 67
console.log(num3 + 7);
console.log(7 + num3); // + operatorunde string değişken üstün gelir ve dönmüşüm" stringe yapar. 76 çıktısını verdi.

console.log(typeof (7 + num3)); // string

const x = 55;
const y = 44;
console.log(x - y); // 11
const myNum = "1";
console.log(x - myNum);
const yourNum = "one";
console.log(x - yourNum);
console.log(x - "a"); // NaN

let carp1 = 7;
let carp2 = 9;
console.log(carp1 * carp2); // 63
console.log("a" * "b");
console.log("a" * 3);
console.log("5" * "9");
console.log(typeof ("5" * "9"));

const böl1 = 81;
const böl2 = 9;
console.log(böl1 / böl2); // 9
console.log(böl1 / "9"); // 9
console.log(böl1 / "dokuz"); // NaN

console.log(böl2 / 0); // Infinity
console.log(-61 / 0); // -Infinity

console.log(0 / 5); // 0
console.log(0 / -5); // -0
// console.log(57 / 9); // 6.33333333333

const mod1 = 57;
const mod2 = 9;
console.log(mod1 % mod2); // 3
console.log(22 % 7); // 1
const benimSayim = 967;

// const birlerBas = benimSayim / 100;
const birlerBas = benimSayim % 10; // 7
console.log(birlerBas);
// const onlarBas = benimSayim % 100;
const onlarBas = (benimSayim % 100) / 10; // 6.7
console.log(onlarBas);
const yüzlerBas = benimSayim / 100; // 9.67
console.log(yüzlerBas);

console.log(
  `YüzlerBas: ${Math.trunc(yüzlerBas)}, OnlarBas: ${Math.trunc(
    onlarBas
  )}, birlerbas : ${birlerBas}`
);

const hazirSayi = 56.788888;
console.log(`hazirSayi of Circle: ${hazirSayi.toFixed(3)} `);
console.log(`hazirSayi of Circle: ${Math.floor(hazirSayi)} `);
console.log(`hazirSayi of Circle: ${Math.ceil(hazirSayi)} `);
console.log(`hazirSayi of Circle: ${Math.trunc(hazirSayi)} `);
console.log(`hazirSayi of Circle: ${Math.round(hazirSayi)} `);

const randomNum = Math.random();
console.log(randomNum);
const randomNum2 = Math.random() * 10;
console.log(randomNum2);

console.log(Math.round(Math.random() * 10));

const üs1 = 2;
const üs2 = 3;
console.log(üs1 ** üs2);

const pi = 3.14;
const yariCap = 9;

const alan = pi * yariCap ** 2;
console.log(alan);

// sonrası artırma ve eksiltme
let number1 = 6;
let number1New = number1++;
console.log(number1New);
console.log(number1New);
console.log(number1);
console.log(number1New);

let newSayi = ++number1; // önce artır
console.log(newSayi); //8
console.log(--newSayi); // 7
console.log(newSayi--); // 7

let nums1 = 14;
let nums2 = 17;
nums2 += nums1;
console.log(nums2); // 31

let num14 = 6;
let num15 = 3;
num14 - num14 - num15;
num14 -= num15;
console.log(num14); // -5

num14 *= num15;
console.log(num14); //18

const num16 = 27;
console.log(num16 == 27);
console.log(num16 == "27");

console. log(num16=== 27);
console. log(num16=== "27");

// const user1 = prompt("Lütfen bir sayı griniz: ");
// const user2 = prompt("Lütfen bir sayı griniz: ");
// console.log(user1);
// console.log(user2);
// const isSame = user1 == user2;
// console.log(isSame);

console. log(true == 1); //true
console.log(null == undefined); // true
console. log(true === 1); // false
console. log(null === undefined); // false

console.log(15 != "15"); 
console.log(15 !== "15"); 

console.log(15 > 5); 
console. log(15 < 5);
console. log("15" > 5);
console.log("a" > "b");
console. log("a" . charCodeAt());
console. log("b".charCodeAt());

console.log(15 >= 15); //true
console.log(15 <= 15); // true
console.log(15 >= 16); // false
console. log(15 >= "15"); // true
console. log("14" <= "15"); // true

console. log(Boolean( false) ); // false
console. log(Boolean(0)); // false
console. log(Boolean(-0)); // false
console. log(Boolean(0n) ); // false
console. log(Boolean("")); // false (boş string)
console. log(Boolean(null ) ); // false
console. log(Boolean(undefined) ); // false
console. log(Boolean(NaN) ); // false

console. log(Boolean( true) ); // true
console. log(Boolean( {}) ); // true (boş object )
console. log(Boolean( [ ] ) ); // true (boş array)
console. log(Boolean(5) ); // true
console. log(Boolean( "0")); // true (dolu string)
console. log( Boolean( "false")); // true (dolu string)
console. log( Boolean( Infinity) ); // true
console. log( Boolean(new Date( ) ) ); // true (tarih methodları)
console. log(Boolean( function ( ) {})); // true (boş veya dolu fonksiyon)

console. log(true && true); // true
console. log(" " && true); // true
console. log (5 && "Merhaba"); // "Merhaba"
console. log(0 && "Dünya"); // 0