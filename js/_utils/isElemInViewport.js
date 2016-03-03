/*
 *  /js/_modules/isElemInViewPort.js
 *  © 2016 Jonathan Ballands
 *
 *  http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
 */


export default function(el) {
  //special bonus for those using jQuery
  if (typeof jQuery === 'function' && el instanceof jQuery) {
      el = el[0];
  }

  let rect = el.getBoundingClientRect();

  // Modification: Trigger at the halfway point
  const halfwayPoint = rect.bottom - ((rect.bottom - rect.top) / 2);
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}
