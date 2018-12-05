var listDishes = document.getElementById('listDishes');

  function showDish(dish){
    return `<div class="dishes">
              <p class='dish-photo'><img src='${dish.photo}'></p>
              <div class='dish-info'>
                <h3 class='dish-name'> ${dish.name} </h3>
                <p class='dish-spicy'>Spicy: ${dish.spicy} 
                  <span class='dish-price'> ${dish.price} </span>
                </p>                                
                <p class='dish-detail'>Description: ${dish.description}</p>
              </div>
            </div>
           `
  }

const englishDishData = [
    {
      name: "All Day Breakfast",
      spicy: "N/A",
      description: '2 eggs, 2 bacons, 2 sausages, grilled tomato, chips and baked beans',
      price: '£6.50',
      photo: "./images/english-breakfast.jpg"
    },
    {
      name: "Fish and Chips",
      spicy: "N/A",
      description: 'Fried batter Cod, served with peas, chips and salad',
      price: '£7.50',
      photo: "./images/fish-chips.png"
    },
    {
      name: "House Grill",
      spicy: "N/A",
      description: '4oz burger, bacons, sausages, grilled chicken, grilled tomato, onion rings, chips, served with a side salad',
      price: '£8.50',
      photo: "./images/house-grill.jpg"
    },
    {
      name: "Vegetable Burger",
      spicy: "N/A",
      description: 'made from red kidney beans, served with side salad',
      price: '£6.50',
      photo: "./images/vegan-burger.jpg"
    },
    {
      name: "All Day Breakfast",
      spicy: "N/A",
      description: '2 eggs, 2 bacons, 2 sausages, grilled tomato, chips and baked beans',
      price: '£6.50',
      photo: "./images/english-breakfast.jpg"
    },
    {
      name: "Fish and Chips",
      spicy: "N/A",
      description: 'Fried batter Cod, served with peas, chips and salad',
      price: '£7.50',
      photo: "./images/fish-chips.png"
    },
    {
      name: "House Grill",
      spicy: "N/A",
      description: '4oz burger, bacons, sausages, grilled chicken, grilled tomato, onion rings, chips, served with a side salad',
      price: '£8.50',
      photo: "./images/house-grill.jpg"
    },
    {
      name: "Vegetable Burger",
      spicy: "N/A",
      description: 'made from red kidney beans, served with side salad',
      price: '£6.50',
      photo: "./images/vegan-burger.jpg"
    }
  ];

  window.addEventListener('load',function(){
    listDishes.innerHTML = englishDishData.map(showDish).join('');
    this.className += ' active';
  });