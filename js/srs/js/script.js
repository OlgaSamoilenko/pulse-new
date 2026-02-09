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
