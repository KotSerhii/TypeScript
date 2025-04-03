// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//
let arr:any[] = [123, 'fifa', true, 789, 'end', false, 987, "candy", 2323, 'start']
console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9]);


// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//

let book1:{id:number, title:string,pageCount:number,genre:string} = {id: 1, title: 'War', pageCount: 234, genre:'History'};
let book2:{id:number, title:string,pageCount:number,genre:string} = {id: 2, title: 'Sweety', pageCount: 2314, genre:'Comedy'};
let book3:{id:number, title:string,pageCount:number,genre:string} = {id: 3, title: 'Killer', pageCount: 234, genre:'Detective'};


//   #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
type AuthorType =   {
  name: string;
  age: number;
};
type BookType = {
  id:number;
  title:string;
  pageCount:number;
  genre:string;
  authors:AuthorType[];
}

let book4:BookType = {id: 1, title: 'War', pageCount: 234, genre:'History',
  authors: [
    {name: 'Kirilo',age:23},
    {name: 'Kera',age:33}
    ]};
let book5:BookType = {id: 2, title: 'Sweety', pageCount: 2314, genre:'Comedy',
  authors: [
    {name: 'Hot',age:23},
    {name: 'Pera',age:33}
  ]
};
let book6:BookType = {id: 3, title: 'Killer', pageCount: 234, genre:'Detective',
  authors: [
    {name: 'Kilo',age:23},
    {name: 'Mols',age:33}
  ]
};


//   #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
//

let users: {name: string;  username: string;  password: string}[] = [
  {name: 'oleg', username:'oleg', password:'123456'},
  {name: 'valya', username:'valya', password:'234567'},
  {name: 'katya', username:'katya', password:'345678'},
  {name: 'gesha', username:'gesha', password:'456789'},
  {name: 'nika', username:'nika', password:'567890'},
  {name: 'nikita', username:'nikita', password:'678901'},
  {name: 'mishan', username:'mishan', password:'789012'},
  {name: 'boris', username:'boris', password:'890123'},
  {name: 'kris', username:'kris', password:'901234'},
  {name: 'serg', username:'serg', password:'012345'}
];
console.log(users[0]['password'], users[0].name);
console.log(users[1]['password'], users[1].name);
console.log(users[2]['password'], users[2].name);
console.log(users[3]['password'], users[3].name);
console.log(users[4]['password'], users[4].name);
console.log(users[5]['password'], users[5].name);
console.log(users[6]['password'], users[6].name);
console.log(users[7]['password'], users[7].name);
console.log(users[8]['password'], users[8].name);
console.log(users[9]['password'], users[9].name);


// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці,
// вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням
// вичключаємо одразу
//
interface IWeather {
  day: string;
  morningT: number;
  afternoonT: number;
  eveningT: number;
}
let weather:IWeather []= [
  {day:'Monday', morningT:12,afternoonT:23,eveningT:14},
{day:'Tuesday', morningT:13,afternoonT:24,eveningT:15},
{day:'Wednesday', morningT:12,afternoonT:22,eveningT:16},
{day:'Thursday', morningT:11,afternoonT:21,eveningT:14},
{day:'Friday', morningT:10,afternoonT:22,eveningT:12},
{day:'Saturday', morningT:9,afternoonT:23,eveningT:10},
{day:'Sunday', morningT:8,afternoonT:22,eveningT:8}
]

// Логічні розгалуження:
//
//   #bAUsaq6LI
//   - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//   Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
let req:string|null = prompt('Enter a number');
let x:number = Number(req);
if (x !== 0) {
  console.log('Right');
} else {
  console.log('Wrong');
}

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
let request:string|null = prompt(
  'Enter minutes from 0 to 59',
);
let time:number = Number(request);
if (time < 0 || time > 59) {
  console.log('Wrong time');
 } else if (time >= 0 && time < 15) {
  console.log('First quater');
} else if (time >= 15 && time < 30) {
  console.log('Second quater');
} else if (time >= 30 && time < 45) {
  console.log('Third quater');
} else {
  console.log('Fourth quater');
}

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
//
let question:string|null=prompt('Enter date');
let day:number= Number(question);
if(day<=0 || day>31){
  console.log("Please enter a valid date");
}
else if (day<=10){
  console.log("This is the first decade");
}
else if (day<=20){
  console.log("This is the second decade");
}
else {
  console.log("This is the third decade");
}

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let dayOfWeek:string|null = prompt("Enter a weekday");
switch (dayOfWeek) {
  case "Sunday":
    console.log('Sunday');
    break;
  case "Monday":
    console.log('Monday');
    break;
  case "Tuesday":
    console.log('Tuesday');
    break;
  case "Wednesday":
    console.log('Wednesday');
    break;
  case "Thursday":
    console.log('Thursday');
    break;
  case "Friday":
    console.log('Friday');
    break;
  case "Saturday":
    console.log('Saturday');
    break;
    default:
      console.log('Unknown error or the first capital letter');
}


//   #uwsz1RnTQJ1
//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
let reqFirstN:string|null = prompt('Enter the first number');
let reqSecondN:string|null = prompt('Enter the second number');
let FirstN:number= Number(reqFirstN);
let SecondN:number=Number(reqSecondN);
if (FirstN > SecondN) {
  console.log(`Max is ${FirstN}`);
} else if (FirstN < SecondN) {
  console.log(`Max is ${SecondN}`);
} else if (FirstN === SecondN) {
  console.log(`Numbers ${FirstN} and ${SecondN} are equel`);
} else {
  console.log(`Error`);
}

//     #iBvqtjEm
//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//     (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
let xAny:any = prompt("Enter right info");
if (!xAny) {
  xAny='default';
}
console.log(xAny);

//   #awLXL6TBzg
//   - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//   кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
let coursesAndDurationArray:{title:string,monthDuration:number}[] = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
  console.log(coursesAndDurationArray[0].title, `Супер`);
}
if (coursesAndDurationArray[1].monthDuration>5){
  console.log(coursesAndDurationArray[1].title, `Супер`);
}
if (coursesAndDurationArray[2].monthDuration>5){
  console.log(coursesAndDurationArray[2].title, `Супер`);
}
if (coursesAndDurationArray[3].monthDuration>5){
  console.log(coursesAndDurationArray[3].title, `Супер`);
}
if (coursesAndDurationArray[4].monthDuration>5){
  console.log(coursesAndDurationArray[4].title, `Супер`);
}
if (coursesAndDurationArray[5].monthDuration>5){
  console.log(coursesAndDurationArray[6].title, `Супер`);
}
