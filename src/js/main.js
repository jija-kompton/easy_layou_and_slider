import '../scss/main.scss';

    let position = 0;
    const track = document.querySelector('.slider-track');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const itemWidht = 300;

const slideNext = () => {
    position += 380;
    if (position > 1140) position = 0;
    track.style.left = -position + 'px';
};

const slidePrev = () => {
    position -= 380;
    if (position < 0) position = 1140;
    track.style.left = -position + 'px';
};

btnNext.addEventListener('click', slideNext);
btnPrev.addEventListener('click', slidePrev);