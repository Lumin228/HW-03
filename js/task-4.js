const forma = document.querySelector('.login-form');
console.log(forma);

forma.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const formElements = evt.currentTarget.elements; // Отримуємо доступ до елементів форми
    console.log(formElements);
    
    // Приклад отримання значень полів
    const email = formElements.email.value; // Поле з ім'ям 'email'
    const password = formElements.password.value; // Поле з ім'ям 'password'
    
    console.log({ email, password });
});
