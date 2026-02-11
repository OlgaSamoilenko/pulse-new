const line = document.querySelector('#line');
const menu = document.querySelector('#menu');
//оброботчик по кликам кнопки -гамбургер
line.addEventListener('click', () =>{
  line.classList.toggle('active');
  menu.classList.toggle('active');
  const isExpanded = line.classList.contains('active');
  line.setAttribute('aria-expanded', isExpanded);
});

// Закрываем меню при клике вне его области
document.addEventListener('click', (event) => {
const isClickInside = line.contains(event.target) || 
menu.contains(event.target);

if (!isClickInside && menu.classList.contains('active')) {
line.classList.remove('active');
menu.classList.remove('active');
line.setAttribute('aria-expanded', 'false');
}
});


// Скрипт для формы

const form = document.querySelector('form');
const email = document.getElementById('user-email');

form.addEventListener('submit', function(event) {
let valid = true;

// Проверяем email
if (!email.validity.valid) {
showError(email, 'Пожалуйста, введите корректный email');
valid = false;
}
if (!valid) {
event.preventDefault();
}
});




 // Находим контейнер со слайдами
    const slides = document.querySelector('.slides');

    // Определяем количество слайдов
    const slideCount = document.querySelectorAll('.slide').length;

    // Находим кнопки «Назад» и «Вперёд»
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0; // Переменная для хранения текущего слайда

    // Функция смены слайдов
    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1; // Если нажали «Назад» на первом слайде, переходим на последний
        } else if (index >= slideCount) {
            index = 0; // Если нажали «Вперёд» на последнем слайде, переходим на первый
        }

        currentIndex = index; // Запоминаем текущий слайд
        slides.style.transform = `translateX(${-index * 100}%)`; // Сдвигаем контейнер со слайдами
    }

    // Добавляем обработчик клика для кнопки «Назад»
    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    // Добавляем обработчик клика для кнопки «Вперёд»
    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    // Устанавливаем первый активный слайд при загрузке страницы
    goToSlide(0);