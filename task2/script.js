const consoleLoge = document.querySelector('#consoleLog');
consoleLoge.addEventListener('click' , () => {
alert('Метод для вывода сообщения в веб-консоль');
})

const alerte = document.querySelector('#alert');
alerte.addEventListener('click' , () => {
alert('Метод Alert() показывает диалоговое окно с сообщением и кнопкой OK');
})

const prompte = document.querySelector('#prompt');
prompte.addEventListener('click' , () => {
prompt('Метод Prompt() отображает диалоговое окно с запросом на ввод текста');
})