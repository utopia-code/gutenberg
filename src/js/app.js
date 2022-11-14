/* Laura López Doval */

console.log('Hello world!');

// add active class navigation based on url -> https://stackoverflow.com/questions/20060467/add-active-navigation-class-based-on-url

// $(function(){
//     var current = location.pathname;
//     $('#nav li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.addClass('active');
//         }
//     })
// })

// jQuery(function($) {
//     var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
//     $('ul a').each(function() {
//      if (this.href === path) {
//       $(this).addClass('active');
//      }
//     });
//    });

// (function () {
//     var current = location.pathname.split('/')[1];
//     if (current === "") return;
//     var menuItems = document.querySelectorAll('.menu-item a');
//     for (var i = 0, len = menuItems.length; i < len; i++) {
//         if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
//             menuItems[i].className += "is-active";
//         }
//     }
// })();


// burger menu
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js 

let burger_menu = document.getElementsByClassName('burger-menu');

burger_menu.addEventListener('click', function() {
    burger_menu.classList.toggle('change');
})

// infinity carousel
// https://codepen.io/hmdshfq/pen/JjrZNgP