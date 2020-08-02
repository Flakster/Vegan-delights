import mushroom from './images/mushroom.jpg';
import broccoli from './images/broccoli.jpg';
import chilli from './images/chilli.jpg';
import gnocchi from './images/gnocchi.jpg';
import lasagne from './images/lasagne.jpg';
import tofu from './images/tofu.jpg';


const menu = () => {
  document.getElementById('Menu').classList.add('option-selected');

  const dishes = [broccoli, mushroom, chilli, gnocchi, lasagne, tofu];
  const names = ['Broccoli stir fry', 'Mushroom rolls',
    'Green chilli', 'Gnocchi al pesto',
    'Lasagne', 'Spicy Tofu'];

  const menuBox = document.createElement('div');
  menuBox.classList.add('menu-container', 'd-flex', 'justify-content-around', 'align-content-center', 'flex-wrap');

  const menuTitle = document.createElement('h2');
  menuTitle.innerHTML = 'Our dishes for you';
  menuTitle.classList.add('text-center', 'display-4', 'mt-4');

  for (let i = 0; i < dishes.length; i += 1) {
    const dish = document.createElement('div');
    dish.classList.add('dish-box', 'bg-dark');

    const dishPhoto = document.createElement('div');
    dishPhoto.style.backgroundImage = `url('${dishes[i]}')`;
    dishPhoto.classList.add('dish-photo', 'rounded-top');

    const dishName = document.createElement('h4');
    dishName.classList.add('text-center', 'text-white', 'bg-dark', 'dish-name');
    dishName.innerHTML = names[i];

    dish.appendChild(dishPhoto);
    dish.appendChild(dishName);

    menuBox.appendChild(dish);
  }

  const footer = document.createElement('footer');
  footer.innerHTML = 'Copyright © 2020, Vegan delights, All Rights Reserved';
  footer.classList.add('text-center', 'py-3');


  const content = document.getElementById('content');
  content.appendChild(menuTitle);
  content.appendChild(menuBox);
  content.appendChild(footer);
};

export default menu;