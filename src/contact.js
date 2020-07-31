
const contact = () => {
  document.getElementById('Contact').classList.add('option-selected');
  const contactBox = document.createElement('div');

  const contactTitle = document.createElement('h2');
  contactTitle.innerHTML = 'Contact us'
  contactTitle.classList.add('text-center','display-4') 

  contactBox.appendChild(contactTitle);

  const contactForm = document.createElement('form');
  contactForm.classList.add('contact-form','d-flex', 'flex-column', 'p-3');

  const labelName = document.createElement('label');
  labelName.innerHTML = 'Your name';
  labelName.classList.add('mt-3');
  const fieldName = document.createElement('input');
  fieldName.type = 'text';

  const labelMail = document.createElement('label');
  labelMail.innerHTML = 'Your e-mail';
  labelMail.classList.add('mt-3');
  const fieldMail = document.createElement('input');
  fieldMail.type = 'text';

  const labelSubject = document.createElement('label');
  labelSubject.innerHTML = 'Subject';
  labelSubject.classList.add('mt-3');
  const fieldSubject = document.createElement('input');
  fieldSubject.type = 'text';

  const labelMessage = document.createElement('label');
  labelMessage.innerHTML = 'Message';
  labelMessage.classList.add('mt-3');
  const fieldMessage = document.createElement('textarea');
  fieldMessage.classList.add('mb-4');

  const buttonSend = document.createElement('Button')
  buttonSend.innerHTML= 'Send';


  contactForm.appendChild(labelName);
  contactForm.appendChild(fieldName);
  contactForm.appendChild(labelMail);
  contactForm.appendChild(fieldMail);
  contactForm.appendChild(labelSubject);
  contactForm.appendChild(fieldSubject);
  contactForm.appendChild(labelMessage);
  contactForm.appendChild(fieldMessage);
  contactForm.appendChild(buttonSend);
  buttonSend.classList.add('mt-3','w-25','mx-auto', 'my-4');

  contactBox.appendChild(contactForm);

  const footer = document.createElement('footer');
  footer.innerHTML = "Copyright © 2020, Vegan delights, All Rights Reserved"
  footer.classList.add('text-center', 'py-3');

  const content = document.getElementById('content');
  content.appendChild(contactBox);
  content.appendChild(footer);
}


export default contact;