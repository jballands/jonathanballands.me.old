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
  let hbmWork = $('#hbm-work');

  hamburger.click(() => {
    hamburger.toggleClass('open');
    hamburgerMenu.toggleClass('open');
  });

  //
  //  We need to handle the case where you click the work navigation bar item
  //  and you are on the home page so the page won't technically reload
  //
  hbmWork.click(() => {
    hamburger.toggleClass('open');
    hamburgerMenu.toggleClass('open');
  });
});
