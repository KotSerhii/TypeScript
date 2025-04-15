// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.
// interface IProduct {
//   id: number;
//   title: string;
//   price: number;
//   quantity: number;
//   total: number;
//   discountPercentage: number;
//   discountedTotal: number;
//   thumbnail: string;
// }
//
// interface ICart  {
//   id: number;
//   products: IProduct[];
//   total: number;
//   discountedTotal: number;
//   userId: number;
//   totalProducts: number;
//   totalQuantity: number;
// }
// interface ICartsObject{
//   carts:ICart[];
//   limit:number;
//   skip:number;
//   total:number;
// }
// let div11 = document.getElementById('carts') as HTMLDivElement;
// fetch('https://dummyjson.com/carts?limit=50')
//   .then(value => value.json() as Promise<ICartsObject>)
//   .then(cartsObject => {
//     let {carts} = cartsObject;
//     console.log(carts);
//     for (let cart of carts) {
//       const cartWrap:HTMLDivElement =document.createElement('div');
//       cartWrap.classList.add('cartWrap');
//       const cartInfo:HTMLDivElement = document.createElement('div');
//       cartInfo.innerText = `
//        id - ${cart.id}
//        userId - ${cart.userId}
//        total - ${cart.total}
//        totalProducts - ${cart.totalProducts}
//        totalQuantity - ${cart.totalQuantity}
//        discountedTotal - ${cart.discountedTotal}
// `;
//       const productsInfo:HTMLOListElement = document.createElement('ol');
//       for (const item of cart.products) {
//
//         const elementOfProduct:HTMLLIElement = document.createElement('li');
//         const imageElement:HTMLImageElement = document.createElement('img');
//         imageElement.src = item.thumbnail;
//         const paragraphElement:HTMLParagraphElement = document.createElement('p');
//         paragraphElement.innerText = `
//       id - ${item.id},
//       title - ${item.title},
//       quantity - ${item.quantity},
//       price - ${item.price},
//       total - ${item.total},
//       discountPercentage - ${item.discountPercentage},
//       discountedTotal - ${item.discountedTotal}
//      `;
//         elementOfProduct.append(imageElement,paragraphElement);
//         productsInfo.append(elementOfProduct);
//       }
//       cartWrap.append(cartInfo, productsInfo);
//       div11.appendChild(cartWrap);
//
//     }
//   })


//


// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

let url:URL = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');

const recipesDiv:HTMLDivElement = document.createElement('div');
document.body.appendChild(recipesDiv);
recipesDiv.classList.add('wrap');

interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

interface IRecipeResponse {
  recipes: IRecipe[];
  total: number;
  skip: number;
  limit: number;
}

fetch(url)
  .then(value => value.json())
  .then((recipesObject) => {
    let {recipes} = recipesObject;
    console.log(recipes);

    for (const recipe of recipes) {
      const recipeDiv:HTMLDivElement = document.createElement('div');
      recipeDiv.classList.add('recipe');
      for (const key in recipe) {
          if (Array.isArray(recipe[key])) {
          const keyDiv:HTMLDivElement = document.createElement('div');
          const paragraphForKey:HTMLParagraphElement = document.createElement('p');
          paragraphForKey.innerText=`${key}:`;
          const ol:HTMLOListElement = document.createElement('ol');
          for (const item of recipe[key]) {
            const li:HTMLLIElement = document.createElement('li');
            li.innerText = item;
            ol.appendChild(li);
            keyDiv.append(paragraphForKey,ol);
            recipeDiv.appendChild(keyDiv);
          }

        } else {
          if(key!=='image') {
            const keyDiv:HTMLDivElement = document.createElement('div');
            keyDiv.innerText = `${key}: ${recipe[key]}`;
            recipeDiv.append(keyDiv);
          }

        }
      }

      recipesDiv.appendChild(recipeDiv);
      const image:HTMLImageElement = document.createElement('img');
      image.src=recipe.image;
      recipeDiv.append(image);
    }

  })
