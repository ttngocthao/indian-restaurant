const dishData = [
    {
      name: "Lamb Madras",
      spicy: "level 3",
      description: 'lamb chunk cooked in hot sauce of tomato and spices',
      ingredient: ["lamb", "tomato", "spices"],
      price: '£7.50',
      photo: "https://via.placeholder.com/50"
    },
    {
      name: "Samosa Chat",
      spicy: "level 1",
      description: 'vegetable samosa with fresh tomato, cucumber and yogurt dressing',
      ingredient: ["potato", "tomato", "cucumber", "spices", "peas"],
      price: '£3.00',
      photo: "https://via.placeholder.com/50"
    },
    {
      name: "Small Mixed Grill",
      spicy: "level 1",
      description: 'two type of chicken wings, lamb chops and lamb kebabs are served on the sizzling plate.',
      ingredient: ["potato", "tomato", "cucumber", "spices", "peas"],
      price: '£9.00',
      photo: "https://via.placeholder.com/50"
    },
    {
      name: "Small Mixed Grill",
      spicy: "level 1",
      description: 'two type of chicken wings, lamb chops and lamb kebabs are served on the sizzling plate.',
      ingredient: ["potato", "tomato", "cucumber", "spices", "peas"],
      price: '£9.00',
      photo: "https://via.placeholder.com/50"
    }
  ];

  var indianList = document.getElementById('indianList');











  
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

  window.addEventListener('load',function(){
    indianList.innerHTML = dishData.map(showDish).join('');
    this.className += ' active';
  });