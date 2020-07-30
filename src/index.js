import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import welcome from './welcome.js';
import home from './home.js';
import menu from './menu.js';

welcome();
home();

const navBar = document.createElement('div');
navBar.classList.add('position-fixed','px-4','hidden-nav-bar','nav-bar','bg-white', 'border', 'border-dark','rounded');

navBar.innerHTML=" Home  |  Menu  |  Contact";
const body =document.getElementsByTagName('body')[0];
body.appendChild(navBar);

window.addEventListener('scroll',function(){
  showMenu();
});

function showMenu(){
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
