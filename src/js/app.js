/* Laura López Doval */

// sticky sidebar
// https://webdevetc.com/blog/matchmedia-events-for-window-resizes/

import './resize-sensor.js';
import './sticky-sidebar.js';

(function () {
    // const mediaQuery = window.matchMedia('(min-width: 992px)');
    // function handleDesktopChange(e) {
    //     if (e.matches) {
    //         var sidebar = document.querySelectorAll('.sidebar');
    //         sidebar.forEach(function(s) {
    //             new StickySidebar(s, {
    //                 topSpacing: 100,
    //                 bottomSpacing: 20,
    //                 containerSelector: '.main-content',
    //                 innerWrapperSelector: '.sidebar__inner'
    //             });
    //         })
    //     }
    // }
    // mediaQuery.addListener(handleDesktopChange);
    // handleDesktopChange(mediaQuery);

    const mediaQuery = '(max-width: 700px)';
    const mediaQueryList = window.matchMedia(mediaQuery);

    window.addEventListener('resize', event => {
        if (window.innerWidth >= 992) {
            var sidebar = document.querySelectorAll('.sidebar');
            sidebar.forEach(function(s) {
                new StickySidebar(s, {
                    topSpacing: 100,
                    bottomSpacing: 20,
                    containerSelector: '.main-content',
                    innerWrapperSelector: '.sidebar__inner'
                });
            })
        }
    })
})();

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


// Initialization glide package using ES Modules

import Glide from '@glidejs/glide';

const getSlide = Array.from(document.querySelectorAll(".glide"));

getSlide.forEach((item, index) => {
    const slider = new Glide(item, {
        type: "carousel",
        gap: 0,
        autoplay: "3000"
    });

    slider.mount();
})