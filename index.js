/**
 * Finds the element that contains the popup for the paywall. Removes it, and
 * enales scrolling again. 
 */
// Get all the child nodes from the DOM that are "fixed" on load
const elems = [].filter.call(
  document.querySelectorAll("*"),
  e => ['fixed'].includes(getComputedStyle(e).position)
);
// Iterate over each one and find the div that contains the hard sell paywall.
elems.forEach((elem) => {
  // I could have targeted the exact node in the DOM. However it's different on
  // other pages/popups. The one common thing between them was the inclusion of
  // the word "hardsell". This will likely change in future, so I'll have to
  // keep an eye on it.
  const hasClass = elem.className.toLowerCase().includes('hardsell');
  const hasId = elem.id.toLowerCase().includes('hardsell');
  // If found, remove it.
  if ((hasClass || hasId)) { elem.remove(); }  
})
document.body.style.overflow = 'auto';
document.body.style.position = 'static';
// Removes the onscroll event that stops users from scrolling down the page when
// the pop up is visible
window.onscroll = () => {}