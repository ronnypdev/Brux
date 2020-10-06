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

toggleHeader();

document.addEventListener('scroll', toggleHeader, false);
