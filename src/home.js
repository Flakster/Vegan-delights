import crew from './kitchen-crew.jpg';

const home = () => {

  const content = document.getElementById("content");
  const infoBox = document.createElement('div');

  // About header
  const headerBox = document.createElement('h2');
  headerBox.innerHTML = "About us" 
  headerBox.classList.add('display-4','mt-4','mb-2' ,'text-center')

  // About body
  const aboutBox = document.createElement('div');
  aboutBox.classList.add('container', 'd-flex', 'flex-wrap');

  // About text
  const aboutTextBox = document.createElement('div');
  aboutTextBox.classList.add('col-12','col-md-6', 'order-1', 'order-md-0');
  const aboutTitle = document.createElement('h4');
  aboutTitle.innerHTML = 'We serve from the bottom of our hearts';
  aboutTextBox.appendChild(aboutTitle);
  
  const aboutText = document.createElement('p');
  aboutText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vero laborum non, modi laudantium molestiae eum praesentium mollitia facilis! Expedita assumenda vitae animi ab.'
  aboutTextBox.appendChild(aboutText);

  
  // About image
  const crewPhoto = document.createElement('img');
  crewPhoto.src = crew;
  crewPhoto.classList.add('w-100','rounded-circle');
  const aboutPhotoFrame = document.createElement('div')
  aboutPhotoFrame.classList.add('my-3','col-12','col-md-6', 'order-0', 'order-md-1');
  aboutPhotoFrame.appendChild(crewPhoto);

  // Configure about
  aboutBox.appendChild(aboutTextBox);
  aboutBox.appendChild(aboutPhotoFrame);

  // Configure infoBox
  infoBox.appendChild(headerBox);
  infoBox.appendChild(aboutBox);
  
  content.appendChild(infoBox);
}

export default home;