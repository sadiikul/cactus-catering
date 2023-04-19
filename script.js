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