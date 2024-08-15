const trigger = document.querySelector(".dropdown-trigger");
const menu = document.querySelector(".menu-items");

trigger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        setTimeout(() => menu.classList.add('show'), 10); 
    } else {
        menu.classList.remove('show');
        setTimeout(() => menu.classList.add('hidden'), 250); 
    }
});