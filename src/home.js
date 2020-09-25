import crew from './kitchen-crew.jpg';
import random1 from './images/random1.png';
import random2 from './images/random2.png';
import random3 from './images/random3.png';
import random4 from './images/random4.png';

const home = () => {
  const content = document.getElementById('content');
  const infoBox = document.createElement('div');
  document.getElementById('Home').classList.add('option-selected');

  // About header
  const headerBox = document.createElement('h2');
  headerBox.innerHTML = 'About us';
  headerBox.classList.add('display-4', 'mt-4', 'mb-2', 'text-center');

  // About body
  const aboutBox = document.createElement('div');
  aboutBox.classList.add('container', 'd-flex', 'flex-wrap');

  // About text
  const aboutTextBox = document.createElement('div');
  aboutTextBox.classList.add('col-12', 'col-md-6', 'order-1', 'order-md-0');
  const aboutTitle = document.createElement('h4');
  aboutTitle.innerHTML = 'We serve from the bottom of our hearts';
  aboutTextBox.appendChild(aboutTitle);

  const aboutParagraph1 = document.createElement('p');
  aboutParagraph1.classList.add('text-justify');
  aboutParagraph1.textContent = `Lorem ipsum dolor sit amet consectetur dipisicing elit. Quod vero laborum non, modi 
                          laudantium molestiae eum praesentium mollitia facilis! Expedita assumenda vitae animi ab.`;
  const aboutParagraph2 = document.createElement('p');
  aboutParagraph2.classList.add('text-justify');
  aboutParagraph2.textContent = `In impedit possimus repellat quod iste qui optio quae accusamus similique. Delectus beatae vitae 
                                 quam animi laboriosam ullam quod distinctio qui, error odio dolore, aliquid deserunt? Amet,
                                 consequuntur similique! Harum, quae. Veritatis rem provident quisquam suscipit alias dolore, 
                                 delectus voluptate natus tenetur debitis aspernatur deserunt at, unde quis, commodi tempora ut 
                                 deleniti dolor blanditiis sit qui aut nesciunt facere! Amet earum exercitationem necessitatibus 
                                 sapiente perferendis, porro repudiandae tempora quod ipsa, optio laudantium reprehenderit alias ab.`;
  aboutTextBox.appendChild(aboutParagraph1);
  aboutTextBox.appendChild(aboutParagraph2);


  // About image
  const crewPhoto = document.createElement('img');
  crewPhoto.src = crew;
  crewPhoto.classList.add('w-100', 'rounded-circle');
  const aboutPhotoFrame = document.createElement('div');
  aboutPhotoFrame.classList.add('my-3', 'col-12', 'col-md-6', 'order-0', 'order-md-1');
  aboutPhotoFrame.appendChild(crewPhoto);


  // Testimonial
  const testimionialBox = document.createElement('div');
  testimionialBox.classList.add('my-4', 'container-fluid', 'testimonial');
  const testimonialTitle = document.createElement('h4');
  testimonialTitle.innerHTML = 'They love our food!';
  testimonialTitle.classList.add('text-center', 'text-white', 'display-4', 'testimonial-title');
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('row', 'p-4', 'mx-auto', 'w-95', 'w-md-75', 'justify-content-around');
  const card1 = document.createElement('div');
  card1.classList.add('card', 'bg-white', 'my-3', 'text-center');
  const testimony1 = document.createElement('span');
  testimony1.classList.add('font-italic', 'testimony');
  const testimony2 = testimony1.cloneNode();
  const testimony3 = testimony1.cloneNode();
  const testimony4 = testimony1.cloneNode();
  testimony1.textContent = '"I really love this vegan food"';
  testimony2.textContent = '"The tastiest flavor in the city"';
  testimony3.textContent = '"The more natural the more I like it"';
  testimony4.textContent = '"As I feed my body I feed my soul"';
  const photo1 = document.createElement('img');
  photo1.classList.add('rounded-circle', 'testimonial-photo');
  const photo2 = photo1.cloneNode(false);
  const photo3 = photo1.cloneNode();
  const photo4 = photo1.cloneNode();
  photo1.src = random1;
  photo2.src = random2;
  photo3.src = random3;
  photo4.src = random4;
  const name1 = document.createElement('span');
  name1.classList.add('font-weight-bold');
  const name2 = name1.cloneNode();
  const name3 = name1.cloneNode();
  const name4 = name1.cloneNode();
  name1.textContent = '- Martha';
  name2.textContent = '- Mark';
  name3.textContent = '- Elisa';
  name4.textContent = '- Alexander';
  const rating1 = document.createElement('span');
  rating1.classList.add('mb-2');
  rating1.textContent = '★ ★ ★ ★ ★';
  const rating2 = rating1.cloneNode(true);
  const rating3 = rating1.cloneNode(true);
  const rating4 = rating1.cloneNode(true);
  const card2 = card1.cloneNode();
  const card3 = card1.cloneNode();
  const card4 = card1.cloneNode();
  card1.appendChild(photo1);
  card1.appendChild(rating1);
  card1.appendChild(testimony1);
  card1.appendChild(name1);
  card2.appendChild(photo2);
  card2.appendChild(rating2);
  card2.appendChild(testimony2);
  card2.appendChild(name2);
  card3.appendChild(photo3);
  card3.appendChild(rating3);
  card3.appendChild(testimony3);
  card3.appendChild(name3);
  card4.appendChild(photo4);
  card4.appendChild(rating4);
  card4.appendChild(testimony4);
  card4.appendChild(name4);
  cardContainer.appendChild(card1);
  cardContainer.appendChild(card2);
  cardContainer.appendChild(card3);
  cardContainer.appendChild(card4);
  const footer = document.createElement('footer');
  footer.innerHTML = 'Copyright © 2020, ';
  const copyLink = document.createTextNode('Carlos Santamaría')
  copyLink.href="https://www.carlossantamaria.co";
  footer.append(copyLink);
  footer.classList.add('text-center', 'py-3');

  // Configure about
  aboutBox.appendChild(aboutTextBox);
  aboutBox.appendChild(aboutPhotoFrame);

  // Configure testimonialBox
  testimionialBox.appendChild(testimonialTitle);
  testimionialBox.appendChild(cardContainer);

  // Configure infoBox
  infoBox.appendChild(headerBox);
  infoBox.appendChild(aboutBox);
  infoBox.appendChild(testimionialBox);
  content.appendChild(infoBox);
  content.appendChild(footer);
};

export default home;