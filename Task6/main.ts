// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let aa:string = 'hello world';
let bb:string = 'lorem ipsum';
let cc:string = 'javascript is cool';

let stringLength:(string:string)=>void = (string) =>
  console.log(string.length);
stringLength(aa);
stringLength(bb);
stringLength(cc);


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let aUp:string = aa.toUpperCase();
let bUp:string = bb.toUpperCase();
let cUp:string = cc.toUpperCase();

console.log(aUp);
console.log(bUp);
console.log(cUp);



// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let dd:string = 'HELLO WORLD';
let ee:string  = 'LOREM IPSUM';
let ff:string  = 'JAVASCRIPT IS COOL';
let dLo:string  = dd.toLowerCase();
let eLo:string  = ee.toLowerCase();
let fLo:string  = ff.toLowerCase();

console.log(dLo);
console.log(eLo);
console.log(fLo);

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str:string = ' dirty string   ';
let cleanStr:string = str.trim();
console.log(cleanStr);


//   #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//   let str:string = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1:string = 'Ревуть воли як ясла повні';
let stringToarray:(str:string)=>string[] = (str) => str.split(' ');
console.log(stringToarray(str1));

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr60:number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let numberToString:(arr:number[])=>string[] =(arr)=> arr.map(value => value.toString());
console.log(numberToString(arr60));

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до
// меньшого, або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
//
let nums = [11, 21, 3];

function sortNums(array:number[], direction:'ascending'|'descending'):number[] {
  if (direction === 'ascending') {
    return array.sort((a, b) => a - b);
  } else if (direction === 'descending') {
    return array.sort((a, b) => b - a);
  } else {
    throw new Error('Choose right direction:ascending or descending')
  }
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


// #yo06d74c1C
// - є масив
 interface ICourse  {
  title: string;
  monthDuration: number;
}
let coursesAndDurationArray6:ICourse[] = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray6.sort((a, b) => b.monthDuration - a.monthDuration));

// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredCourses:ICourse[] = coursesAndDurationArray6.reduce<ICourse[]>((accumulated, course) => {
  if (course.monthDuration > 5) {
    accumulated.push(course);
  }
  return accumulated;
}, []);
console.log(filteredCourses);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

interface IModifyArray  {
  id: number;
  title: string;
  monthDuration: number;
}

let modifyArray:IModifyArray[] = coursesAndDurationArray6.map((value:ICourse, index:number) => {
  return {
    id: index + 1,
    title: value.title,
    monthDuration: value.monthDuration
  }
});
console.log(modifyArray);
// =========================

//   #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// {
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//   color:'', // 'red','black'
// }
//
interface ICard {
  value:string,
  cardSuit:string,
  color:string
}
const cardSuit:string[] = ['spade', 'diamond', 'heart', 'clubs'];
const value:string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck = cardSuit.reduce<ICard[]>((acc, cardSuit) => {
  value.forEach(value => {
    acc.push({value, cardSuit, color: (cardSuit === 'spade' || cardSuit === 'diamond') ? 'black' : 'red'})
  });
  return acc;
}, []);
console.log(deck);
//
// // - знайти піковий туз

  let spadeAce:ICard|void = deck.find(card => card.value === 'ace' && card.cardSuit === 'spade')||console.log('Spade Ace not found!')
;
console.log(spadeAce);
//
// // - всі шістки
let filtered6:ICard[] = deck.filter(value => value.value === '6');
console.log(filtered6);

// // - всі червоні карти
let filteredRedCards:ICard[] = deck.filter(value => value.color === 'red');
console.log(filteredRedCards);
//
// // - всі буби
let filteredClubs:ICard[] = deck.filter(value => value.cardSuit === 'clubs');
console.log(filteredClubs);
//
// // - всі трефи від 9 та більше
//
let filteredDiamondsAbove9:ICard[] = deck.filter(value => value.cardSuit === 'diamond' && value.value > '8');
console.log(filteredDiamondsAbove9);

// =========================
//


//   #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
type PackedDeckType = {
  spades:ICard[],
    diamonds:ICard[],
  hearts:ICard[],
  clubs:ICard[]
}

let packedDeck = deck.reduce<PackedDeckType>((accumulate, card) => {
  if (card.cardSuit === 'spade') {
    accumulate.spades.push(card);
  } else if (card.cardSuit === 'diamond') {
    accumulate.diamonds.push(card);
  } else if (card.cardSuit === 'heart') {
    accumulate.hearts.push(card);
  } else {
    accumulate.clubs.push(card)
  }
  return accumulate;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(packedDeck);
// =========================


// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
interface ICourse6 {
  title: string;
  monthDuration: number;
  hourDuration: number;
  modules: string[];
}
let coursesArray:ICourse6[] = [
  {
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
  },
  {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'git',
      'java core',
      'java advanced']
  },
  {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'python core',
      'python advanced']
  },
  {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
  },
  {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
      'python',
      'java']
  },
  {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
  }
];
console.log(coursesArray.filter(course=>course.modules.includes('sass')));
console.log(coursesArray.filter(course=>course.modules.includes('docker')));

