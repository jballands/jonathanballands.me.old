/*
 *  /js/_modules/navigationBar.js
 *  © 2016 Jonathan Ballands
 *
 *  http://codepen.io/designcouch/pen/Atyop
 *  http://codepen.io/g13nn/pen/eHGEF
 */

$(document).ready(() => {
  let hamburger = $('#hamburger');
  let hamburgerMenu = $('#hamburger-menu');

  hamburger.click(() => {
    hamburger.toggleClass('open');
    hamburgerMenu.toggleClass('open');
  });
});
