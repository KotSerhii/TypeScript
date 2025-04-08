// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//   Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.

let a8:any = {
  age: 123, name: 'terra', g() {
    console.log(`hello ${this.age}`)
  }, z() {
  }
};
let qweq:any = ['lk', {
  name: 'kjk', hello() {
  }
}, 876, true];

let rty:any = {
  id: 1, user: {name: 'nikolai', age: 98}, vibr() {
    console.log(this.user)
  }, hr: 45, ert: 67, NaN
};
//---------------------1 спосіб----------------------------------------------//
let deepClone:(object:any)=>object = function (object:any):any {
  if (object) {
    let functionsCopy:any[] = [];
    for (let key in object) {
      if (typeof object[key] === 'function') {
        let fCopy = object[key].bind({});
        functionsCopy.push({fCopy, key});
      }
    }
    const parse:any = JSON.parse(JSON.stringify(object));
    for (const func of functionsCopy) {
      parse[func.key] = func.fCopy;
    }
    // console.log(functionsCopy);
    // console.log(parse);

    return parse;

  }
  throw new Error(`${object} isn't an object`);
}
const copy = deepClone(a8);
console.log(copy);
const copyQwe=deepClone(qweq);
console.log(copyQwe);
// copy.g();
// a8.g();
//----------------------------------2 спосіб------------------------------//

function dClone(obj:any):any {
  if (obj === null || typeof obj !== "object") {
    return obj; // Примітиви повертаємо без змін
  }

  if (typeof obj === "function") {
    return obj.bind(obj); // Прив’язуємо `this` до нового об'єкта
  }

  const clone:{[key:string]:any} = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = dClone(obj[key]); // Рекурсія для вкладених властивостей
    }
  }

  return clone;
}


let f8 = dClone(a8);
console.log(f8);
f8.g();
let cloneQwe = dClone(qweq);
console.log(rty);
rty.vibr();

const clone = dClone(rty);
clone.vibr();
console.log(clone);


// #iz6emEsP2BA
// - є масив
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//   Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
type CourseType=  {
  title: string;
  monthDuration: number;
}
let coursesAndDurationArray8:CourseType[] = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
type ModernCourseType=  {
  id:number;
  title: string;
  monthDuration: number;
}
let modernCoursesAndDurationArray:ModernCourseType[] = coursesAndDurationArray8.map((value:CourseType, index:number):ModernCourseType => {
  return {id: index + 1, title: value.title, monthDuration: value.monthDuration}
});
console.log(modernCoursesAndDurationArray);
