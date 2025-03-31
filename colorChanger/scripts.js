const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        body.style.backgroundColor = button.id;
    });
});

