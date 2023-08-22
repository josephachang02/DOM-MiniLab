const heading1 = document.querySelector('h1');

const newHeadingText = heading1.textContent = "some text";

const hideButton = document.querySelector('.hide_button');

hideButton.addEventListener('click', () => {
    heading1.style.display = 'none';
});

const unhideButton = document.querySelector('.unhide_button');

unhideButton.addEventListener('click', () => {
    heading1.style.display = 'block';
});

