let productMaster6 = [
    { id: 'A441', name: 'Pepsi', category: 'Soft Drink', price: 15, quantity: 2 },
    { id: 'B234', name: 'Coke', category: 'Soft Drink', price: 10, quantity: 8 },
    { id: 'A617', name: 'Mirinda', category: 'Soft Drink', price: 20, quantity: 20 },
    { id: 'B003', name: 'Sprite', category: 'Soft Drink', price: 16, quantity: 5 },
    { id: 'B225', name: 'Minute Maid', category: 'Soft Drink', price: 25, quantity: 12 },
    { id: 'A742', name: '5Star', category: 'Chocloate', price: 10, quantity: 3 },
    { id: 'B388', name: 'Appy', category: 'Soft Drink', price: 35, quantity: 9 },
    { id: 'A899', name: 'Gems', category: 'Chocloate', price: 12, quantity: 11 },
    { id: 'B635', name: 'KitKat', category: 'Chocloate', price: 15, quantity: 7 },
    { id: 'B408', name: 'Perk', category: 'Chocloate', price: 8, quantity: 15 },
    { id: 'A354', name: 'Dairy Milk', category: 'Chocloate', price: 30, quantity: 4 }
  ];
  
  let customerOrder = [
    { id: 'A441', orderQuantity: 2 },
    { id: 'A354', orderQuantity: 5 },
    { id: 'B003', orderQuantity: 9 }
  ];
  
  function createNewArray(customerOrder) {
    return customerOrder.map(order => {
      const product = productMaster6.find(item => item.id === order.id);
      return {
        id: order.id,
        orderQuantity: order.orderQuantity,
        name: product.name,
        price: product.price
      };
    });
  }
  
  const newArray = createNewArray(customerOrder);
  console.log(newArray);
  