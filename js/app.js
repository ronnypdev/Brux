// when i scroll down the page, at a certain point.
// add a class to make to header white

const headerTag = document.querySelector('header');

const toggleHeader = () => {
  const pixels = window.pageYOffset;

  if (pixels > 60) {
    headerTag.classList.add('scrolled');
  } else {
    headerTag.classList.remove('scrolled');
  }
};

const fadeBox = () => {
  const pixels = window.pageYOffset;
  const alpha = Math.min(pixels / 1000, 0.5);

  headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`;
};

fadeBox();
toggleHeader();

document.addEventListener(
  'scroll',
  function () {
    toggleHeader();
    fadeBox();
  },
  false
);
