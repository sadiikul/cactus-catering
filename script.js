const images = document.querySelectorAll('.slider img');
      const buttons = document.querySelectorAll('.slider-controls button');
      let index = 0;

      setInterval(() => {
        images[index].classList.remove('active');
        buttons[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
        buttons[index].classList.add('active');
      }, 3000);

      buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
          images[index].classList.remove('active');
          buttons[index].classList.remove('active');
          index = i;
          images[index].classList.add('active');
          buttons[index].classList.add('active');
        });
      });
      // Get the button
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
