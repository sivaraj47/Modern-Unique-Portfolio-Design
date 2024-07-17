const menu = document.querySelector('.menu');
const menulist = document.querySelector('nav .menus');

menu.addEventListener('click',()=>{
  menulist.classList.toggle('showmenu');
});
