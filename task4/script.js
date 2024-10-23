const site = document.querySelector('#link');
site.addEventListener('click' ,
    (event) => {
        event.preventDefault();
         // тело обработчика
const text = prompt('Окно для ввода текста'); {
        site.textContent = text;
    }
    // конец тела обработчика
});