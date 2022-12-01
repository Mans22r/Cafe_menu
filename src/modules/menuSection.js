const getMenu = (category) => {
  fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.meals.length > 8) {
        data.meals = data.meals.splice(0, 8);
      }

      const menuItemsContainer = document.getElementById('menu-items');

      data.meals.forEach((item) => {
        const meal = document.createElement('div');
        meal.classList.add('meals');
        meal.innerHTML = `<h2 class="meal-name">${item.strMeal}</h2>
          <div class="rating">
          <h6>rate : ₹ </h6>
          </div>
          <div class="blur-div"></div>
        `;
        meal.style.background = `url(${item.strMealThumb})`;
        meal.style.backgroundPosition = 'center';
        meal.style.backgroundSize = 'cover';
        menuItemsContainer.appendChild(meal);
      });
    });
};

const selection = (category) => {
  const menuItemsContainer = document.getElementById('menu-items');
  const selectionItems = document.querySelector('select');
  selectionItems.addEventListener('change', (e) => {
    switch (e.target.value) {
      case 'vegan':
        menuItemsContainer.innerHTML = '';
        category = 'Vegan';
        getMenu(category);
        break;
      case 'pasta':
        menuItemsContainer.innerHTML = '';
        category = 'Pasta';
        getMenu(category);
        break;
      case 'seafood':
        menuItemsContainer.innerHTML = '';
        category = 'Seafood';
        getMenu(category);
        break;
      case 'chicken':
        menuItemsContainer.innerHTML = '';
        category = 'Chicken';
        getMenu(category);
        break;
      case 'breakfast':
        menuItemsContainer.innerHTML = '';
        category = 'Breakfast';
        getMenu(category);
        break;
      case 'starter':
        menuItemsContainer.innerHTML = '';
        category = 'Starter';
        getMenu(category);
        break;
      case 'side':
        menuItemsContainer.innerHTML = '';
        category = 'Side';
        getMenu(category);
        break;
      case 'vegetarian':
        menuItemsContainer.innerHTML = '';
        category = 'Vegetarian';
        getMenu(category);
        break;
      case 'dessert':
        menuItemsContainer.innerHTML = '';
        category = 'Dessert';
        getMenu(category);
        break;
      default:
        menuItemsContainer.innerHTML = '';
        category = 'Vegan';
        getMenu(category);
        break;
    }
  });
};

const createMenuSection = () => {
  let category;
  const menuSection = document.createElement('section');
  menuSection.setAttribute('id', 'menu-section');
  menuSection.innerHTML = `<h2>Menu</h2>
  <div id="selection">
  <select>
    <option value="vegan">Vegan</option>
    <option value="starter">Starter</option>
    <option value="side">Side</option>
    <option value="pasta">Pasta</option>
    <option value="seafood">Seafood</option>
    <option value="chicken">Chicken</option>
    <option value="breakfast">Breakfast</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="dessert">Dessert</option>
  </select>
  <div id="menu-items"></div>
</div>
  `;
  document.getElementById('content').appendChild(menuSection);
  selection(category);
};

export { createMenuSection, getMenu };
