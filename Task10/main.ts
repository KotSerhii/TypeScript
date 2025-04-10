// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".

// let cube: HTMLDivElement = document.createElement('div');
// cube.id = 'text';
// cube.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolore';
// let clear: HTMLButtonElement = document.createElement('button');
// clear.innerText = 'clear text';
// document.body.append(cube, clear);
// clear.onclick = function (): void {
//   const elementById = document.getElementById('text');
//   if (elementById) {
//     elementById.remove();
//   }
// }
// clear.addEventListener('click', function (): void {
//   const divText = document.getElementById('text');
//   if (divText) {
//     if (divText.style.display === 'none') {
//       divText.style.display = 'block'
//     } else {
//       divText.style.display = 'none'
//     }
//   }

// })

//
//   #j693ca8 ---------------нема відео
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let input: HTMLInputElement = document.createElement('input');
// let confirm10: HTMLButtonElement = document.createElement('button');
// confirm10.innerText = 'Confirm';
// input.id = 'personAge';
// input.placeholder = 'Enter your age';
// input.type = 'number';
// document.body.append(input, confirm10);
// confirm10.onclick = function (): void {
//   const inputElement = document.getElementById('personAge') as HTMLInputElement;
//   if (inputElement) {
//     const age: number = +inputElement.value;
//     let message: HTMLParagraphElement = document.createElement('p');
//     if (age < 18) {
//       message.innerText = 'You are under 18';
//     } else {
//       message.innerText = 'Your age is confirmed';
//     }
//     document.body.appendChild(message);
//   }
// }


// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з
// полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою
// з'явився блок з вашим об'єктом
//

// let forms: HTMLCollectionOf<HTMLFormElement> = document.forms;
// let f1: HTMLFormElement = document.forms[0];
// let nameInput:HTMLInputElement =f1.elements.namedItem('name') as HTMLInputElement;
// let surnameInput:HTMLInputElement=f1.elements.namedItem('surname') as HTMLInputElement;
// let ageInput:HTMLInputElement=f1.elements.namedItem('age') as HTMLInputElement;
//
// f1.onsubmit = function (ev: SubmitEvent): void {
//   ev.preventDefault();
//     const user = {
//     name: nameInput.value,
//     surname: surnameInput.value,
//     age: +ageInput.value
//   };
//   console.log(user);
//   let info: HTMLDivElement = document.createElement('div');
//   info.innerText = `${user.name}-${user.surname}-${user.age}`;
//   document.body.appendChild(info);
// }

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1
//
//
// let div:HTMLDivElement = document.createElement('div');
// div.id = 'block';
//
// document.body.appendChild(div);
// let counter:number = parseInt(localStorage.getItem('number')||'0');
// counter+=1;
// localStorage.setItem('number', counter.toString());
//
// let elementById = document.getElementById('block') as HTMLDivElement;
// if(elementById) {
//   elementById.innerText = counter.toString();
// } else{
//   console.error("The element not found!")
// }

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList
// зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM
//
//
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок
// стається миттєво, без натискань додаткових кнопок
//
let convert = document.getElementById('kilo');
let paragraph = document.createElement('p');
document.body.appendChild(paragraph);
convert.oninput= function (){
    let result=Math.round(this.value*2.20462);
  paragraph.innerText = `${this.value} kg = ${result} inch`;
}

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з
// localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//
//
// let users = [
//   {name: 'vasya', age: 31, status: false},
//   {name: 'petya', age: 30, status: true},
//   {name: 'kolya', age: 29, status: true},
//   {name: 'olya', age: 28, status: false},
//   {name: 'max', age: 30, status: true},
//   {name: 'anya', age: 31, status: false},
//   {name: 'oleg', age: 28, status: false},
//   {name: 'andrey', age: 29, status: true},
//   {name: 'masha', age: 30, status: true},
//   {name: 'olya', age: 31, status: false},
//   {name: 'max', age: 31, status: true}
// ];
// let usersJSON=localStorage.setItem('users',JSON.stringify(users));
//
// function addToLocalStorage(arrayName,objToAdd){
//   const array= JSON.parse(localStorage.getItem(arrayName));
//   if(!array){
//     throw new Error("This array isn't exist")
//   }
//     if(typeof objToAdd==='object'){
//     array.push(objToAdd);
//   }
//   localStorage.setItem(arrayName,JSON.stringify(array));
// }
// addToLocalStorage('users',{name: 'Alex', age:30});


//   #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
//

// const table = document.getElementById('create');
// let data = document.forms.tableGen;
// data.onsubmit=function (ev){
//   document.getElementById('create').innerText='';
//   ev.preventDefault();
//   let rawsNumber =+data.raws.value;
//   let cellsNumber =+data.cell.value;
//   let text =data.text.value;
//   for (let i = 0; i < rawsNumber; i++) {
//     const raw = document.createElement('tr');
//     table.appendChild(raw);
//     for(let i=0; i<cellsNumber; i++){
//       let cell = document.createElement('td');
//       cell.innerText = text;
//       raw.appendChild(cell);
//     }
//
//   }
//
// }


//   #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//   зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//   При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//

// let block = document.createElement('div');
// block.id = 'uah';
// document.body.appendChild(block);
//
// let number = +localStorage.getItem('value') || 100;
//
// localStorage.setItem('value', number);
//
// window.addEventListener('load', function () {
//   let lastTime = +localStorage.getItem('lastReloadTime') || new Date();
//   let currentTime = new Date();
//
//   if ((currentTime.getTime() - lastTime) / 1000 > 10) {
//     number += 10;
//     localStorage.setItem('value', number);
//   }
//   localStorage.setItem('lastReloadTime', currentTime.getTime());
//   document.getElementById('uah').innerText = `${number} грн`;
//
// })


// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//   При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

//
// let locations = [
//   {
//     "title": "м. Київ",
//     "type": "city"
//   },
//   {
//     "title": "Житомирська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Харківська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Вінницька область",
//     "type": "oblast"
//   },
//   {
//     "title": "Чернігівська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Дніпропетровська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Черкаська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Волинська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Київська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Миколаївська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Рівненська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Сумська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Тернопільська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Краматорський район",
//     "type": "raion"
//   },
//   {
//     "title": "Кіровоградська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Хмельницька область",
//     "type": "oblast"
//   },
//   {
//     "title": "Запорізька область",
//     "type": "oblast"
//   },
//   {
//     "title": "Одеська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Полтавська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Львівська область",
//     "type": "oblast"
//   },
//   {
//     "title": "м. Кривий Ріг",
//     "type": "city"
//   },
//   {
//     "title": "Криворізька територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Івано-Франківська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Чернівецька область",
//     "type": "oblast"
//   },
//   {
//     "title": "Ізюмський район",
//     "type": "raion"
//   },
//   {
//     "title": "Бахмутська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Васильків",
//     "type": "city"
//   },
//   {
//     "title": "Васильківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Білоцерківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Біла Церква",
//     "type": "city"
//   },
//   {
//     "title": "Донецька область",
//     "type": "oblast"
//   },
//   {
//     "title": "Покровський район",
//     "type": "raion"
//   },
//   {
//     "title": "Уманська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Бахмутський район",
//     "type": "raion"
//   },
//   {
//     "title": "Закарпатська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Лубенська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Лубни",
//     "type": "city"
//   },
//   {
//     "title": "Полтавська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Полтава",
//     "type": "city"
//   },
//   {
//     "title": "м. Старокостянтинів",
//     "type": "city"
//   },
//   {
//     "title": "Старокостянтинівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Миколаїв",
//     "type": "city"
//   },
//   {
//     "title": "Миколаївська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Торецька територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Кропивницький район",
//     "type": "raion"
//   },
//   {
//     "title": "Першотравенська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Нікопольська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Нікополь",
//     "type": "city"
//   },
//   {
//     "title": "м. Першотравенськ",
//     "type": "city"
//   },
//   {
//     "title": "Одеський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Черкаси",
//     "type": "city"
//   },
//   {
//     "title": "Черкаська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Добропільська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Херсонська область",
//     "type": "oblast"
//   },
//   {
//     "title": "Сумська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Суми",
//     "type": "city"
//   },
//   {
//     "title": "Первомайська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Краматорська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Макарівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Краматорськ",
//     "type": "city"
//   },
//   {
//     "title": "Миргородська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Бориспіль",
//     "type": "city"
//   },
//   {
//     "title": "Броварська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Миргород",
//     "type": "city"
//   },
//   {
//     "title": "Бориспільська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Бровари",
//     "type": "city"
//   },
//   {
//     "title": "м. Вознесенськ",
//     "type": "city"
//   },
//   {
//     "title": "Коростенський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Первомайськ",
//     "type": "city"
//   },
//   {
//     "title": "Миронівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Вознесенський район",
//     "type": "raion"
//   },
//   {
//     "title": "Синельниківський район",
//     "type": "raion"
//   },
//   {
//     "title": "Фастівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Вознесенська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Житомирський район",
//     "type": "raion"
//   },
//   {
//     "title": "Дружківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Фастів",
//     "type": "city"
//   },
//   {
//     "title": "Слов'янська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Запорізький район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Слов'янськ",
//     "type": "city"
//   },
//   {
//     "title": "м. Кременчук",
//     "type": "city"
//   },
//   {
//     "title": "Ніжинський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Ватутіне",
//     "type": "city"
//   },
//   {
//     "title": "Ватутінська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Кременчуцька територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Пологівський район",
//     "type": "raion"
//   },
//   {
//     "title": "Дніпровська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Дніпро",
//     "type": "city"
//   },
//   {
//     "title": "Лозівський район",
//     "type": "raion"
//   },
//   {
//     "title": "Покровська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Обухів",
//     "type": "city"
//   },
//   {
//     "title": "Узинська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Шепетівський район",
//     "type": "raion"
//   },
//   {
//     "title": "Пирятинська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Сумський район",
//     "type": "raion"
//   },
//   {
//     "title": "Харківський район",
//     "type": "raion"
//   },
//   {
//     "title": "Жашківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Пирятин",
//     "type": "city"
//   },
//   {
//     "title": "Павлоградський район",
//     "type": "raion"
//   },
//   {
//     "title": "Голованівський район",
//     "type": "raion"
//   },
//   {
//     "title": "Обухівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Подільський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Охтирка",
//     "type": "city"
//   },
//   {
//     "title": "Мар'їнська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Мелітополь",
//     "type": "city"
//   },
//   {
//     "title": "Куп’янський район",
//     "type": "raion"
//   },
//   {
//     "title": "Святогірська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Рівне",
//     "type": "city"
//   },
//   {
//     "title": "Бородянська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Роздільнянський район",
//     "type": "raion"
//   },
//   {
//     "title": "Запорізька територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Шосткинська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Болградський район",
//     "type": "raion"
//   },
//   {
//     "title": "Прилуцький район",
//     "type": "raion"
//   },
//   {
//     "title": "Олешківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Березівський район",
//     "type": "raion"
//   },
//   {
//     "title": "Очаківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Смілянська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Очаків",
//     "type": "city"
//   },
//   {
//     "title": "Рівненська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Первомайський район",
//     "type": "raion"
//   },
//   {
//     "title": "Ізмаїльський район",
//     "type": "raion"
//   },
//   {
//     "title": "Сквирська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Шостка",
//     "type": "city"
//   },
//   {
//     "title": "Мелітопольська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Маріупольський район",
//     "type": "raion"
//   },
//   {
//     "title": "Охтирська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Білгород-Дністровський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Запоріжжя",
//     "type": "city"
//   },
//   {
//     "title": "м. Коростень",
//     "type": "city"
//   },
//   {
//     "title": "Луганська область",
//     "type": "oblast"
//   },
//   {
//     "title": "м. Житомир",
//     "type": "city"
//   },
//   {
//     "title": "Курахівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Черкаський район",
//     "type": "raion"
//   },
//   {
//     "title": "Новоград-Волинський район",
//     "type": "raion"
//   },
//   {
//     "title": "Костянтинівська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Переяславська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Новоукраїнський район",
//     "type": "raion"
//   },
//   {
//     "title": "Уманський район",
//     "type": "raion"
//   },
//   {
//     "title": "Коростенська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Переяслав",
//     "type": "city"
//   },
//   {
//     "title": "Шосткинський район",
//     "type": "raion"
//   },
//   {
//     "title": "Великоновосілківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Чернігівський район",
//     "type": "raion"
//   },
//   {
//     "title": "Радомишльська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Вугледарська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Звенигородський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Конотоп",
//     "type": "city"
//   },
//   {
//     "title": "Вишгородська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Гребінківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Сарненський район",
//     "type": "raion"
//   },
//   {
//     "title": "Бердянський район",
//     "type": "raion"
//   },
//   {
//     "title": "Миколаївський район",
//     "type": "raion"
//   },
//   {
//     "title": "Гостомелська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Дубровицька територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Українська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Сарненська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Воскресенська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Маріуполь",
//     "type": "city"
//   },
//   {
//     "title": "Чугуївський район",
//     "type": "raion"
//   },
//   {
//     "title": "Охтирський район",
//     "type": "raion"
//   },
//   {
//     "title": "Житомирська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "м. Сарни",
//     "type": "city"
//   },
//   {
//     "title": "Широківська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Славутицька територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Золотоніський район",
//     "type": "raion"
//   },
//   {
//     "title": "Конотопська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Волноваський район",
//     "type": "raion"
//   },
//   {
//     "title": "Донецький район",
//     "type": "raion"
//   },
//   {
//     "title": "Маріупольська територіальна громада",
//     "type": "hromada"
//   },
//   {
//     "title": "Вараський район",
//     "type": "raion"
//   },
//   {
//     "title": "м. Славутич",
//     "type": "city"
//   }
// ];
// let prev = document.createElement('button');
// let next = document.createElement('button');
// next.innerText = 'Next';
// prev.innerText = 'Previous';
// document.body.append(prev, next);
// const div = document.createElement('div');
// document.body.appendChild(div);
// let index = 0;
//
// function showElements() {
//   div.innerText = "";
//   for (let i = index; i < index + 10 && i < locations.length; i++) {
//     const paragraphElement = document.createElement('p');
//     paragraphElement.innerText = JSON.stringify(locations[i]);
//     div.appendChild(paragraphElement);
//   }
// }
//   window.onload = function (){
//     showElements();
//   };
//
//
//   next.onclick = function () {
//     if(index + 10<locations.length) {
//       index+=10;
//     }
//     showElements();
//   }
//   prev.onclick=function (){
//     if(index-10>=0){
//       index-=10;
//     }
//     showElements();
//   }
