'use strict';
const body = document.querySelector('body');
const btns = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const modalBackground = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

// looping the buttons
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    !modalWindow.classList.contains('hidden') ? modalWindow.classList.add('hidden') &
      modalBackground.classList.add('hidden') : modalWindow.classList.remove('hidden') & modalBackground.classList.remove('hidden');

    // listening for the key press on the body
    // had to add this batch of code into the btns loop because thats the only
    // way i see to check when the modal class list doesnt contain hidden...
    if (!modalWindow.classList.contains('hidden')) {
      console.log('true')
      body.addEventListener('keydown', (e) => {
        e.keyCode === 27 ?
          modalWindow.classList.add('hidden') &
          modalBackground.classList.add('hidden') :
          null;
      })
    }

  });
});

// array of elements doing the same thing...
[modalBackground, closeBtn].forEach((element) => {
  element.addEventListener('click', () => {
    modalWindow.classList.add('hidden');
    modalBackground.classList.add('hidden');
  });
});
