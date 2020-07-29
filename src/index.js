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

const navbar = document.createElement('div');
navbar.classList.add('bg-success','fixed-top', 'd-none','menu');
navbar.innerHTML=" ***** HERE *****";
container.appendChild(navbar);

content.appendChild(container);

function showMenu(){
  if (window.scrollY>0){

    navbar.classList.remove('d-none');
  }
  else
  {
    navbar.classList.add('d-none');
  }
}
