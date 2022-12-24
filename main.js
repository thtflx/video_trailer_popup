const btn = document.querySelector('.popup__button');
const closeIcon = document.querySelector('.close-icon');
const trailerContainer = document.querySelector('.popup__trailer-container');


btn.addEventListener('click', ()=> {
    trailerContainer.classList.remove('active');
});

closeIcon.addEventListener('click',()=> {
    trailerContainer.classList.add('active');
});