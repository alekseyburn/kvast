/* eslint-disable no-undef */
const ready = require('./utils/documentReady.js');

ready(function(){
  if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
    document.querySelector('body').classList.remove('webp');
    document.querySelector('body').classList.add('no-webp');
  }
});

if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    // img.src = img.dataset.src;
    // img.srcset = img.dataset.srcset;
    img.removeAttribute('data-src');
    img.removeAttribute('data-srcset');
  });
  // const sources = document.querySelectorAll('source');
  // sources.forEach((source) => {
  //   source.srcset = source.dataset.srcset;
  //   source.removeAttribute('data-srcset');
  // });
} else {
  // Dynamically import the LazySizes library
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}
// const $ = require('jquery');
// $( document ).ready(function() {});
