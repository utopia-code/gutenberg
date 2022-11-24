/* Laura López Doval */

// http://marcj.github.io/css-element-queries/ -> package resize sensor
// https://www.npmjs.com/package/sticky-sidebar -> package sticky sidebar

import ResizeSensor from 'css-element-queries/src/ResizeSensor.js';
import StickySidebar from 'sticky-sidebar/src/sticky-sidebar.js';

import Glide, { Autoplay } from '@glidejs/glide/dist/glide.modular.esm';

var sidebar = document.querySelectorAll('.sidebar');
var element = document.querySelector('body');

new ResizeSensor(element, function() {
    if (element.clientWidth >= 992) {
        sidebar.forEach(function(s) {
            new StickySidebar(s, {
                topSpacing: 104,
                bottomSpacing: 104,
                containerSelector: '.main-content',
                innerWrapperSelector: '.sidebar__inner'
            });
        })
    } 
});

// Initialization glide package using ES Modules
// import Glide from '@glidejs/glide';
// new Glide('.glide').mount()

new Glide('.glide', {
    type: 'carousel',
    gap: 0,
    autoplay: 4000
}).mount({ Autoplay });


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
