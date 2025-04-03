// Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log
let greeting:string = 'hello';
console.log(greeting);
let owu:string = 'owu';
console.log(owu);
let com:string = 'com';
console.log(com);
let ua:string = 'ua';
console.log(ua);
let a:number=1, b:number=10, c:number =-999, d:number=123;
console.log(a,b,c,d);
let PI:number=3.14;
console.log(PI);
let e:number=2.7;
console.log(e);
let f:number=16;
console.log(f);
let g:boolean = true;
console.log(g);
let h:boolean = false;
console.log(h);
// - Створити 3 змінних firstName, middleName, lastName,
//   наповнити їх своїм ПІБ. З'єднати їх в одну змінну person ' +
// '(Не об'єкт, просто за допомоги конкатенації)
let firstName:string = 'Serhii';
let middleName:string = 'Petrovich';
let lastName :string= 'Kot';
let person:string = `${firstName} ${middleName} ${lastName}`;
console.log(person);
// - За допомогою оператора typeof визначити типи наступних змінних та
// вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let i:number = 100;
let j:string = '100';
let k:boolean = true;
console.log(typeof i, j, k);
console.log(typeof i, i);
console.log(typeof j, j);
console.log(typeof k, k);
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими
//  Імям, По-Батькові та роками. та вивести в консоль
let userName:string|null = prompt("Print your name", 'Petya');
let midleName:string|null = prompt("Print your middle name", 'Ivanov');
let age:string|null = prompt("Print your age", '18');
console.log(userName,midleName,age);
