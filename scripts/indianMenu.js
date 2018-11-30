const dishData = [
    {
      name: "Lamb Madras",
      spicy: "level 3",
      description: 'lamb chunk cooked in hot sauce of tomato and spices',
      ingredient: ["lamb", "tomato", "spices"],
      price: '£7.50',
      photo: "https://i.imgur.com/aiTopD3.jpg"
    },
    {
      name: "Samosa Chat",
      spicy: "level 1",
      description: 'vegetable samosa with fresh tomato, cucumber and yogurt dressing',
      ingredient: ["potato", "tomato", "cucumber", "spices", "peas"],
      price: '£3.00',
      photo: "https://i.imgur.com/x9R9c6v.jpg"
    },
    {
      name: "Small Mixed Grill",
      spicy: "level 1",
      description: 'two type of chicken wings, lamb chops and lamb kebabs are served on the sizzling plate.',
      ingredient: ["potato", "tomato", "cucumber", "spices", "peas"],
      price: '£9.00',
      photo: "https://i.imgur.com/nivbYdA.jpg"
    }
  ];

  var indianList = document.getElementById('indianList');

  function showDish(dish){
    return `<div class="dishes">
              <h3> ${dish.name} </h3>
              <h4> ${dish.price} </h4>
              <p>Spicy: ${dish.spicy} </p>
              <p>Description: ${dish.description}</p>
            </div>
           `
  }

  window.addEventListener('load',function(){
    indianList.innerHTML = dishData.map(showDish).join('');
    this.className += ' active';
  });