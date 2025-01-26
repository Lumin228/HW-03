const writeInput = document.querySelector('#name-input');
const changeInput = document.querySelector('#name-output');

writeInput.addEventListener('input', (evt) => {
    changeInput.textContent = evt.currentTarget.value;
});
