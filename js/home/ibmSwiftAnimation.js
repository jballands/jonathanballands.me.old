/*
 *  /js/home/ibmSwiftAnimation.js
 *  © 2016 Jonathan Ballands
 */

export default function() {
  $(window).on('scroll', function(){
    if($("body").scrollTop() === 500){
      $(window).off('scroll');
      console.log('roah!');
      // Do some stuff here ..
    }
  }
}
