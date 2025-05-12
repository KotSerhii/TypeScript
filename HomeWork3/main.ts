// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді
// визначається дженеріком функції.
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
// SomeType – ваш тип відповіді
// url – ваш ендпоінт, з якого чекаємо відповідь

async function foobar<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: T = await response.json();
  return data;
}
interface IUserHW4 {
  id: number;
  name: string;
  email: string;
}

foobar<IUserHW4[]>('https://jsonplaceholder.typicode.com/users')
  .then(users => {
    users.forEach(user => console.log(user.name));
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

