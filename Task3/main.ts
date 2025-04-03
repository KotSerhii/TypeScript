// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
/*----------------------------------------*/
for (let i:number = 0; i<10; i++){
  document.write(`<div><h2>Hello guys!</h2></div>`);
}


// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
/*--------------------------------------------------------*/
for (let i:number = 0; i<10; i++){
  document.write(`<div><h2>${i} Hello guys!</h2></div>`);
}


// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
/*---------------------------------------------------------------------*/
let itar:number=0;
while (itar<20){
  document.write(`<h1>Kill two birds with one stone!</h1>`);
  itar++;
}


//   #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
/*------------------------------------------------------------*/
let iter:number=0;
while (iter<20){
  document.write(`<h1>Kill two birds with one stone! ${iter}</h1>`);
  iter++;
}


//   #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//   let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//   <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
//   </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
/*-----------------------------------------------------------------------------------------------*/
let listOfItems:string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let i:number = 0; i < listOfItems.length; i++) {
  const listOfItem:string = listOfItems[i];
 document.write(`<li>${listOfItem}</li>`);
}
  document.write(`</ul>`);


//   #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//   {
//     title: 'milk',
//     price: 22,
//     image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//   },
//   {
//     title: 'juice',
//     price: 27,
//     image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//   },
//   {
//     title: 'tomato',
//     price: 47,
//     image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//   },
//   {
//     title: 'tea',
//     price: 15,
//     image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//   },
// ];
//
// ШАБЛОН
// <div class="product-card">
//   <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
/*-------------------------------------------------------- --------------------*/
let products:{title:string, price:number, image:string}[] = [
{
  title: 'milk',
    price: 22,
  image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
},
{
  title: 'juice',
    price: 27,
  image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
},
{
  title: 'tomato',
    price: 47,
  image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
},
{
  title: 'tea',
    price: 15,
  image: 'https://images.unsplash.com/photo-1628153792464-21bffac488d4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
];
for (const product of products) {
document.write(`<div class="product-card">
<h3 class="product-title">${product.title}. Price - ${product.price}</h3>
<img src="${product.image}" alt="${product.title}" class="product-image">
</div>`);
  }


// #4WrHwFTEop0
// є масив
// за допомоги циклу вивести:
//   - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
/*--------------------------------------------------------*/
 type UserType =  {
  name: string;
  age: number;
  status: boolean;
}
let users:UserType[] = [
  {name: 'vasya', age: 31, status: false},
  {name: 'petya', age: 30, status: true},
  {name: 'kolya', age: 29, status: true},
  {name: 'olya', age: 28, status: false},
  {name: 'max', age: 30, status: true},
  {name: 'anya', age: 31, status: false},
  {name: 'oleg', age: 28, status: false},
  {name: 'andrey', age: 29, status: true},
  {name: 'masha', age: 30, status: true},
  {name: 'olya', age: 31, status: false},
  {name: 'max', age: 31, status: true}
];
for (const user of users) {
  if (user.status) {
    console.log(`${user.name} - ${user.status}`);
  }
}
console.log(` `);
for (const user of users) {
  if (!user.status) {
    console.log(`${user.name} - ${user.status}`);
  }
}
console.log(` `);
for (const user of users) {
  if (user.age > 30) {
    console.log(`${user.name} - ${user.age}`);
  }
}
