import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './background.jpg';
import './style.css';
import './GreatVibes-Regular.ttf'

const content = document.getElementById("content");

const container = document.createElement('div');
container.classList.add('fixed-background');
window.addEventListener('scroll',function(){
  showMenu();
});

const header = document.createElement("h1");
header.classList.add('text-center','position-relative', 'text-white', 'header');
header.innerHTML = "Vegan delights";
container.appendChild(header);

const bgimage = new Image();
bgimage.src = background;

const navBar = document.createElement('div');
navBar.classList.add('position-fixed','px-4','hidden-nav-bar','nav-bar','bg-white', 'border', 'border-dark','rounded');

navBar.innerHTML=" Home  |  Menu  |  Contact";
const body =document.getElementsByTagName('body')[0];
body.appendChild(navBar);


const bounce = document.createElement('div');
bounce.classList.add('bounce');

const arrowDown = document.createElement('p');
arrowDown.classList.add('arrow-down');
bounce.appendChild(arrowDown);

container.appendChild(bounce);


content.appendChild(container);

function showMenu(){
  if (window.scrollY>0){
    console.log('Showing bar');
    navBar.classList.remove('hidden-nav-bar');
    navBar.classList.add('visible-nav-bar');
  }
  else
  {
    console.log('Hiding bar');
    navBar.classList.remove('visible-nav-bar');
    navBar.classList.add('hidden-nav-bar');
  }
}
