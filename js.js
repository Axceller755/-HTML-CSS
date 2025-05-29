/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');
// Get the modal

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Улыбнись!')
})