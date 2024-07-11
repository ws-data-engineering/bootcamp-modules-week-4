// TODO: Which element is the following line of code selecting?
// The element is selecting a <div> that contains the images for the slideshow.

const carousel = document.querySelector('.carouselbox');

// TODO: Which element is the following line of code selecting?
// The line of code below is selecting the 'Next' button.
const next = carousel.querySelector('.next');
const prev = carousel.querySelector('.prev');
let index = 0;
let currentImage;

const images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/20/300/201',
  'https://picsum.photos/id/30/300/202',
  'https://picsum.photos/id/47/300/203',
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = `url('${currentImage}')`;
}

// TODO: Describe the functionality of the following event listener.
// When the image is clicked the most current facing image is placed in a modal window with a black background.
carousel.addEventListener('click', function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//The event listener is waiting for the 'next' button to be clicked to advance to the next slide.
next.addEventListener('click', function (event) {
  // TODO: What is the purpose of the following line of code?
  // The stop propagation method is used to only fire the current event. Without this method, both the slide would advance and then the modal window would appear. 
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
//The event listener is waiting for the 'prev' button to be clicked to advance to the previous slide.

prev.addEventListener('click', function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  // the stop propagation method is used to only fire the current event. Without this method, both the slide would advance and then the modal window would appear. 
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
