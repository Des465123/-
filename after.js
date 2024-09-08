const sound = new Audio('ipacat.mp3'); 
sound.volume = 0.1;


const circleButton = document.querySelector('.wrapper');

circleButton.addEventListener('click', () => {
  sound.play();
  circleButton.style.transform = 'scale(0.95)';
  circleButton.style.transition = 'transform 0.2s ease-in-out';

  setTimeout(() => {
    circleButton.style.transform = 'scale(1.1)';
  }, 200); 
});

circleButton.addEventListener('mouseover', () => {
  circleButton.style.transform = 'scale(1.1)';
  circleButton.style.transition = 'transform 0.2s ease-in-out';
});

circleButton.addEventListener('mouseout', () => {
  circleButton.style.transform = 'scale(1)';
  circleButton.style.transition = 'transform 0.2s ease-in-out';
});

window.onload = function() {
  const textElements = document.querySelectorAll('h1, h2, h3, p');

  textElements.forEach((element, index) => {
    
    setTimeout(() => {
      element.classList.add('show');
    }, index * 4000); 
  });
};




