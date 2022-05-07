const navToggle = document.querySelector('.nav-toggle');
const toolbarLinks = document.querySelector('#nav-ul');
const navMenu = document.querySelectorAll('.show');
navToggle.addEventListener('click', ()=>{
   toolbarLinks.classList.toggle('nav-menu_visible');
});
navMenu.forEach(element => {
    element.addEventListener('click', ()=>{
        toolbarLinks.classList.toggle('nav-menu_visible');
    });
});
