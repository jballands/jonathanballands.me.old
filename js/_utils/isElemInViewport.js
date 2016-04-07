/*
 *  /js/_utils/isElemInViewPort.js
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
  const RECT_HEIGHT = rect.bottom - rect.top;

  const PIECE = (() => {
    let divisor = 1;
    while (document.documentElement.clientHeight < (RECT_HEIGHT - 30) / divisor) {
      divisor += 0.5;
    }
    return (RECT_HEIGHT - 75) / divisor;
  })();

  const TOP_BIT = (rect.top >= 0) &&
    ((rect.top + PIECE) <= (document.documentElement.clientHeight));
  const BOTTOM_BIT = ((rect.bottom - PIECE) >= 0) &&
    (rect.bottom <= (document.documentElement.clientHeight));

  return (TOP_BIT || BOTTOM_BIT);
}
