const heart = document.querySelector('.heart');
const sound = new Audio('boing.mp3'); 
sound.volume = 0.3; 
heart.addEventListener('click', () => {
    sound.play();
    heart.style.transform = 'scale(0.8) rotate(45deg)';

    setTimeout(() => {
        heart.style.transform = 'scale(1) rotate(45deg)';
        heart.style.boxShadow = '';
    }, 400);
});

const heartButton = document.querySelector('.heart');
const container = document.querySelector('.container');

heartButton.addEventListener('click', () => {
    setTimeout(() => {
        container.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = 'after.html';
        }, 1000); 
    }, 3000); 
});


