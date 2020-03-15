const NAV_MENU = document.getElementById('nav-menu');

NAV_MENU.addEventListener('click',(event) =>{
NAV_MENU.querySelectorAll('a').forEach(el => el.removeAttribute('class'));
NAV_MENU.querySelectorAll('a').forEach(el => el.classList.add('link_inactive'));
event.target.removeAttribute('class');
event.target.classList.add('link_active');
});