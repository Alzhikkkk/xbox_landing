const carousel = document.querySelector('.carousel-slider');
let scrollPos = 0;
const afterElement = document.querySelector('#right');
const beforeElement = document.querySelector('#left');
const paginationItems = document.querySelectorAll('.carousel-pagination span'); 

const updatePagination = () => {
  const slideIndex = Math.round(scrollPos / carousel.offsetWidth);
  paginationItems.forEach((item, index) => {
    if (index === slideIndex) {
      item.style.backgroundColor = '#8DD83D';
    } else {
      item.style.backgroundColor = 'transparent';
    }
  });
};

paginationItems.forEach((item, index) => {
  item.addEventListener("click", function(){
    scrollPos=index*carousel.offsetWidth
    
    paginationItems.forEach(item => {
      item.style.backgroundColor="transparent"
    });
    carousel.scrollTo({
      left: scrollPos,
      behavior: 'smooth'
    });
    item.style.backgroundColor = '#8DD83D';
  })
});


afterElement.addEventListener('click', function() {
    // do something when after element is clicked
   
    scrollPos += carousel.offsetWidth;
    if (scrollPos > carousel.scrollWidth) {
      scrollPos = 0;
    }
    carousel.scrollTo({
      left: scrollPos,
      behavior: 'smooth'
    });

    updatePagination()
});

beforeElement.addEventListener('click', function(){
    scrollPos -= carousel.offsetWidth;
    if (scrollPos < 0) {
      scrollPos = carousel.scrollWidth;
    }
    carousel.scrollTo({
      left: scrollPos,
      behavior: 'smooth'
    });

    updatePagination()
})
