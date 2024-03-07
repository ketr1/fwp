let people = [
    {name: 'Иван', age: 23},
    {name: 'Мария', age: 18},
    {name: 'Алексей', age: 32},
    {name: 'Ольга', age: 24},
    {name: 'Сергей', age: 17},
    {name: 'Анна', age: 21}
  ];
  
  let result = people
    .filter(person => person.age > 18)
    .map(person => `${person.name} (${person.age} лет)`);
  
  console.log(result);

  let sales = [
    {product: 'Телефон', price: 50000, quantity: 1},
    {product: 'Чехол', price: 1500, quantity: 2},
    {product: 'Зарядное устройство', price: 2500, quantity: 1}
  ];
  
  let totalSales = sales.reduce((total, sale) => total + sale.price * sale.quantity, 0);
  
  console.log(`Общая стоимость продаж: ${totalSales}`);