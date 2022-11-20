/* Laura López Doval */

// add active class navigation based on url -> https://stackoverflow.com/questions/20060467/add-active-navigation-class-based-on-url

(function () {
    var current = location.pathname.split('/')[1];
    var menuItems = document.querySelectorAll('.menu-item a');
    if (current === "") {
        menuItems[0].classList.add('is-active')
        return;
    }
    if (current === "museum.html") {
        menuItems[1].classList.add('is-active')
        return;
    }
    for (var i = 0, l = menuItems.length; i < l; i++) {
        if (menuItems[i].getAttribute('href').indexOf(current) !== -1) {
            menuItems[i].classList.add('is-active');
            console.log(menuItems[0].getAttribute('href'));
        }
    }
})();


// burger menu
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js 

(function () {
    let burger_menu = document.querySelector('.burger-menu');
    let nav = document.querySelector('.nav');
    let content = document.querySelector('.header-collapsed');

    burger_menu.addEventListener('click', function() {
        burger_menu.classList.toggle('change');
        nav.classList.toggle('collapsed');
        content.classList.toggle('top-to-header');
    })
})();

// infinity carousel
// https://codepen.io/hmdshfq/pen/JjrZNgP



// Initialization glide package using ES Modules

import Glide from '@glidejs/glide'

new Glide('.glide', {
    type: 'carousel',
    gap: 0,
    autoplay: 4000
}).mount();


