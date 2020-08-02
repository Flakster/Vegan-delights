import background from './background.jpg';

const welcome = () => {
  const content = document.getElementById('content');

  // Parallax elements
  const container = document.createElement('div');
  container.classList.add('fixed-background');

  // Welcome header
  const header = document.createElement('h1');
  header.classList.add('text-center', 'position-relative', 'text-white', 'header');
  header.innerHTML = 'Vegan delights';
  container.appendChild(header);

  // Background image
  const bgimage = new Image();
  bgimage.src = background;

  // Bouncing arrow
  const bounce = document.createElement('div');
  bounce.classList.add('bounce');
  const arrowDown = document.createElement('p');
  arrowDown.classList.add('arrow-down');
  bounce.appendChild(arrowDown);

  container.appendChild(bounce);
  content.appendChild(container);
};

export default welcome;