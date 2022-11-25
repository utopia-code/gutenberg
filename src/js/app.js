/* Laura López Doval */

// settings package sticky sidebar

import ResizeSensor from 'css-element-queries/src/ResizeSensor.js';
import StickySidebar from 'sticky-sidebar/src/sticky-sidebar.js';

document.addEventListener('DOMContentLoaded', function () {
    const bodyHasClassBio = document.body.classList.contains('bio-site');

    if ( bodyHasClassBio ) {
    
        let sidebar = document.querySelectorAll('.sidebar');
        let element = document.querySelector('body');
    
        new ResizeSensor(element, function() {
            if (element.clientWidth >= 992) {
                sidebar.forEach(function(s) {
                    new StickySidebar(s, {
                        topSpacing: 125,
                        bottomSpacing: 20,
                        containerSelector: '.main-content',
                        innerWrapperSelector: '.sidebar__inner'
                    });
                })
            } 
        });
    }
  }, false);


// initialization slider

import Glide from '@glidejs/glide';

const bodyHasClassHome = document.body.classList.contains('home');
const bodyHasClassMuseum = document.body.classList.contains('museum-site');

if ( bodyHasClassHome || bodyHasClassMuseum )  {
    new Glide('.glide', {
        type: 'slider',
        startAt: 0,
        autoplay: 4000
    }).mount()
}

(function () {

    // add active class navigation based on url

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

(function () {
    
    // burger menu

    let burger_menu = document.querySelector('.burger-menu');
    let nav = document.querySelector('.nav');
    let content = document.querySelector('.header-collapsed');

    burger_menu.addEventListener('click', function() {
        burger_menu.classList.toggle('change');
        nav.classList.toggle('collapsed');
        content.classList.toggle('top-to-header');
    })

})();

