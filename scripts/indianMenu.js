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

const indianDishData = [
    {
      name: "Lamb Madras",
      spicy: "level 3",
      description: 'lamb chunks cooked in a hot sauce of tomato and spices',
      price: '£7.50',
      photo: "./images/lamb-madras.jpg"
    },
    {
      name: "Samosa Chat",
      spicy: "level 1",
      description: 'vegetable samosa with fresh tomato, cucumber, chickpeas and yogurt dressing',
      price: '£3.00',
      photo: "./images/samosa-chat.jpg"
    },
    {
      name: "Small Mixed Grill",
      spicy: "level 1",
      description: 'two types of chicken wing, lamb chops and lamb kebabs are served on a sizzling plate.',
      price: '£9.00',
      photo: "./images/mixed-grill.jpg"
    },
    {
      name: "Manchurian Chicken",
      spicy: "level 2",
      description: 'spicy Indo-Chinese dish with peppers and onion.',
      price: '£7.50',
      photo: "./images/manchurian-chicken.jpg"
    },
    {
      name: "Lamb Madras",
      spicy: "level 3",
      description: 'lamb chunks cooked in hot sauce of tomato and spices',
      price: '£7.50',
      photo: "./images/lamb-madras.jpg"
    },
    {
      name: "Samosa Chat",
      spicy: "level 1",
      description: 'vegetable samosa with fresh tomato, cucumber, chickpeas and yogurt dressing',
      price: '£3.00',
      photo: "./images/samosa-chat.jpg"
    },
    {
      name: "Small Mixed Grill",
      spicy: "level 1",
      description: 'two types of chicken wing, lamb chops and lamb kebabs are served on a sizzling plate.',
      price: '£9.00',
      photo: "./images/mixed-grill.jpg"
    },
    {
      name: "Manchurian Chicken",
      spicy: "level 2",
      description: 'spicy Indo-Chinese dish with peppers and onion.',
      price: '£7.50',
      photo: "./images/manchurian-chicken.jpg"
    }
  ];

  
//load the food when the page is loaded
  window.addEventListener('load',function(){
    listDishes.innerHTML = indianDishData.map(showDish).join('');
    this.className += ' active';
  });


