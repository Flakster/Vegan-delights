const menu = ()=>{
  const menuBox = document.createElement('div');
  menuBox.innerHTML = 'Our menu will be here';
  menuBox.classList.add('display-1', 'text-center','py-30');
  const content = document.getElementById('content');
  content.appendChild(menuBox);
}

export default menu;