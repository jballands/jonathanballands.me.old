/*
 *  /js/_modules/navigationBar.js
 *  © 2016 Jonathan Ballands
 *
 *  http://codepen.io/designcouch/pen/Atyop
 *  http://codepen.io/g13nn/pen/eHGEF
 */

export default function() {

  let hamburger = $('#hamburger');

  hamburger.click(() => {
    hamburger.toggleClass('open');
  });
};
