import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import welcome from './welcome.js';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

welcome();
//home();

const navBar = document.createElement('div');
navBar.classList.add('position-fixed','hidden-nav-bar','nav-bar','bg-white', 'border', 'border-dark','rounded','d-flex');
navBar.id = 'navBar';


const options = ['Home', 'Menu', 'Contact'];

const content = document.getElementById('content');

const wipeContent = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

const clearNavBar = () => {
  document.getElementById('Home').classList.remove('option-selected');
  document.getElementById('Menu').classList.remove('option-selected');
  document.getElementById('Contact').classList.remove('option-selected');
}

for( let i = 0 ; i < options.length ; i += 1){
  const option = document.createElement('div');
  option.classList.add('text-center','px-3','rounded','option');
  option.innerHTML = options[i];
  option.id = options[i];
  option.addEventListener('click',(e) =>{
    wipeContent(content);
    clearNavBar();
    welcome();
    switch (e.target.id){
      case 'Home': 
      home();
        break;
        case 'Menu': 
        menu();
        break;
        case 'Contact': 
        contact();
        break;
    }
  });
  navBar.appendChild(option);
}


const body =document.getElementsByTagName('body')[0];
body.appendChild(navBar);


window.addEventListener('scroll',function(){
  showMenu();
});

const showMenu = () => {
  if (window.scrollY>0){
    navBar.classList.remove('hidden-nav-bar');
    navBar.classList.add('visible-nav-bar');
  }
  else
  {
    navBar.classList.remove('visible-nav-bar');
    navBar.classList.add('hidden-nav-bar');
  }
}

home();
