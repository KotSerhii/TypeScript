// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

class User{
  constructor(public id: number,public name: string,public surname: string,public email: string,public phone: string) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}}

let usersF:User[] = [
  new User(1, 'igor', 'han', 'sdfkjshfd@com', '+380675554488'),
  new User(2, 'kolya', 'bur', 'uthfyfgf@com', '+380998887766'),
  new User(3, 'vano', 'kosti', 'udhdsflsdfk@com', '+380975677878'),
  new User(4, 'vika', 'soslo', 'lkjlkjlks@com', '+3809875746464'),
  new User(5, 'dora', 'ving', 'nababa@com', '+380675454476'),
  new User(6, 'jaka', 'terv', 'henehe@com', '+380988887766'),
  new User(7, 'bolen', 'fartuk', 'bebebe@com', '+380777576644'),
  new User(8, 'teremok', 'crens', 'unaga@com', '+380986665544'),
  new User(9, 'kolbasa', 'kokpcheniy', 'hohoho@com', '+380987776655'),
  new User(10, 'bigfoot', 'monster', 'bambam@.com', '+30981112233')
];

console.log(usersF);
//
// // #2ikXsE2WiKZ
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши
// // тільки об'єкти з парними id (filter)
// //
//
console.log(usersF.filter((user:User) =>
  user.id % 2 === 0));

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по
// зростанню (sort)
//
//
console.log(usersF.sort((a:User, b:User) => {
  return a.id - b.id;
}));
//
// // #nkMXISv
// // - створити конструктор для об'єктів Client з полями id, name, surname , email,
// // phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
//
let clients:Client[];

class Client{
  public order:Order[];
  constructor (public id:number,public name:string,public surname:string,public email:string,public phone:string,...products:Order[]) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
  this.order = products;
}}

class Order{
  constructor(public id:number,public title:string,public price:number) {
  this.id = id;
  this.title = title;
  this.price = price;
}}

clients = [
  new Client(1, 'vitaliy', 'fursov', 'hahaha@com', '+380976445533', new Order(1, 'iron', 6500), new Order(2, 'fridge', 13200)),
  new Client(2, 'kolya', 'bur', 'uthfyfgf@com', '+380998887766', new Order(1, 'gitar', 16500), new Order(2, 'fridge', 18200)),
  new Client(3, 'vano', 'kosti', 'udhdsflsdfk@com', '+380975677878', new Order(1, 'vine', 490), new Order(2, 'cocaine', 45000)),
  new Client(4, 'vika', 'soslo', 'lkjlkjlks@com', '+3809875746464', new Order(1,'keks',56), new Order(2, 'mushrooms', 2500), new Order(3, 'laptop', 8700)),
  new Client(5, 'dora', 'ving', 'nababa@com', '+380675454476', new Order(1, 'noodle', 350), new Order(2, 'statue', 43000), new Order(3, 'pet', 56000)),
  new Client(6, 'jaka', 'terv', 'henehe@com', '+380988887766', new Order(1, 'dixit', 790), new Order(2, 'car', 780999), new Order(3, 'house', 1490000)),
  new Client(7, 'bolen', 'fartuk', 'bebebe@com', '+380777576644', new Order(1, 'country', 6789990003), new Order(2, 'bear', 8977), new Order(3, 'toy', 78)),
  new Client(8, 'teremok', 'crens', 'unaga@com', '+380986665544', new Order(1, 'check', 678), new Order(2, 'coffee', 566)),
  new Client(9, 'kolbasa', 'kokpcheniy', 'hohoho@com', '+380987776655', new Order(1, 'crocodile', 999999), new Order(2, 'cow', 67876), new Order(3, 'book', 786)),
  new Client(10, 'bigfoot', 'monster', 'bambam@.com', '+30981112233', new Order(1, 'potato', 67), new Order(2, 'ninja', 878787))
];
console.log(clients);
//
// // #8abtVjRv
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості
// // товарів в полі order по зростанню. (sort)
//
let orderSorted:Client[] = clients.sort((client1, client2) => {
  return client1.order.length - client2.order.length
});
console.log(orderSorted);

// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його
// в поточний об'єкт car
//
type DriverType= {
  name: string;
  age: number;
};
class Car{
  constructor(public model:string, public producer:string, public year:number, public maxSpeed:number, public capacityEngine:string, public driver?:DriverType) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacityEngine = capacityEngine;
  }

  drive:()=>void = () => {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
  };
  info:()=>void = () => {
    for (const item in this) {
      console.log(item, this[item])
    }
  };

  increaseMaxSpeed:(addSpeed:number)=>void = (addSpeed) => {
    if(addSpeed>0) this.maxSpeed = this.maxSpeed + addSpeed;
  };

  changeYear:(newValue:number)=>void = (newValue) => {
    if(newValue>1815) this.year = newValue;
  };

  addDriver:((driver:DriverType)=>void) = (driver: DriverType): void => {
    if (driver) this.driver = driver;
  };
  }

let car = new Car('X5', 'BMW', 2020, 240, '3.0');

car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2022);
car.addDriver({name: 'anton', age: 45});
console.log(car);


// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його
// в поточний об'єкт car
//
// class Car {
//
//   constructor(model, producer, year, maxSpeed, capacityEngine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacityEngine = capacityEngine;
//   }
//
//   drive() {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//   };
//
//   info() {
//     for (const item in this) {
//       console.log(item, this[item])
//     }
//   };
//
//   increaseMaxSpeed(addSpeed) {
//     if (addSpeed > 0) this.maxSpeed = this.maxSpeed + addSpeed;
//   };
//
//   changeYear(newValue) {
//     if (newValue > 1815) this.year = newValue;
//   };
//
//   addDriver(driver) {
//     if (driver) this.driver = driver;
//   }
// }
//
// let car = new Car('X5', 'BMW', 2020, 240, '3.0');
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2022);
// car.addDriver({name: 'anton', age: '45'});
// console.log(car);
//

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити
// масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
class Sinderella {
  constructor(public name:string, public age:number, public footSize:number) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}

let girls:Sinderella[] = [
  new Sinderella('gala',18,35),
  new Sinderella('heres',18,36),
  new Sinderella('nata',18,38),
  new Sinderella('nija',18,39),
  new Sinderella('katya',18,33),
  new Sinderella('jana',18,34),
  new Sinderella('kisa',18,31),
  new Sinderella('kisag',18,36),
  new Sinderella('kisage',18,37),
  new Sinderella('kisagen',18,40)

];
console.log(girls);

class Prince {
  constructor(public name:string, public age:number, public shoeFound:number) {
    this.name = name;
    this.age = age;
    this.shoeFound = shoeFound;
  }
}
let prince:Prince = new Prince('gregori',25,31);
console.log(prince);


for (const princess of girls){
  if (prince.shoeFound === princess.footSize)
  {console.log(`Congrats! Your princess is found, her name is ${princess.name}, she is ${princess.age}, she has ${princess.footSize} feet size.`)}
}

let foundPrince:Sinderella|null = girls.find(girl=>girl.footSize===prince.shoeFound)??null;
console.log(foundPrince);

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

interface Array<T>{
  newForEach(callback:(item:T)=>void):void;
  myFilter(callback:(item:T)=>boolean):T[];
}
Array.prototype.newForEach = function <T>(this:T[],callback:(item:T)=>void):void {
  for (const item of this) {
    callback(item);
  }
};
['sdfsdf', 'fhfhfhfh', 'dfdfdfdf',2,5,6,true,false].newForEach((item) => console.log(item));


Array.prototype.myFilter = function (callback:(item:any)=>boolean):any[] {
  const filteredArray:any[] = [];
  const arr:any[] = this;
  for (const item of arr) {
    if (callback(item)) {
      filteredArray.push(item);
    }
  }
  console.log(filteredArray);
  return filteredArray;

};

[2, 4, true, 6, 7, false, 9, true, 12, '15'].myFilter((item) => (typeof item !== 'boolean'));

