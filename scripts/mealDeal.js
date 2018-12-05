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

const mealDealData = [
    {
      name: "Chicken/Beef Burger and Chips",
      spicy: "N/A",
      description: 'chicken/beef, chips served with side salad',
      price: '£7.50',
      photo: "./images/chicken-burger.jpg"
    },
    {
      name: "Baguette with 2 toppings and chips",
      spicy: "N/A",
      description: 'topping can be:...................',
      price: '£7.50',
      photo: "./images/tuna-baguette.jpg"
    },
    {
      name: "jacket potato with 2 toppings and salad",
      spicy: "N/A",
      description: 'topping choices:.....................',
      price: '£7.50',
      photo: "./images/jacket-potato.jpg"
    },
    {
      name: "Chicken Curry, Rice and Poppadom",
      spicy: "level 2",
      description: 'homemade curry with steamed white rice',
      price: '£7.50',
      photo: "./images/curry-deal.jpg"
    },
    {
      name: "Chicken/Beef Burger and Chips",
      spicy: "N/A",
      description: 'chicken/beef, chips served with side salad',
      price: '£7.50',
      photo: "./images/chicken-burger.jpg"
    },
    {
      name: "Baguette with 2 toppings and chips",
      spicy: "N/A",
      description: 'topping can be:...................',
      price: '£7.50',
      photo: "./images/tuna-baguette.jpg"
    },
    {
      name: "jacket potato with 2 toppings and salad",
      spicy: "N/A",
      description: 'topping choices:.....................',
      price: '£7.50',
      photo: "./images/jacket-potato.jpg"
    },
    {
      name: "Chicken Curry, Rice and Poppadom",
      spicy: "level 2",
      description: 'homemade curry with steamed white rice',
      price: '£7.50',
      photo: "./images/curry-deal.jpg"
    }
  ];

  window.addEventListener('load',function(){
    listDishes.innerHTML = mealDealData.map(showDish).join('');
    this.className += ' active';
  });