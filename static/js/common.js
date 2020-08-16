/**
 * Attempting to build this site with minimal JS, and certainly no big general
 * purpose library
 */


function ready(callback){
  // document is already rendered!
  if (document.readyState != 'loading') {
    callback();
  }
  // use this by default
  else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', callback);
  }
  // IE, of course, needs something different
  else document.attachEvent('onreadystatechange', function() {
    if (document.readyState == 'complete') callback();
  });
}
