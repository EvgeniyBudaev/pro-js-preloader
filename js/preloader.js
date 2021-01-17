const mask = document.querySelector('[data-mask]')

// Функция-конструктор
const Preloader = function(mask) {
  this.mask = mask
  this.init()
}

// Запишем конструктор в свойство 'window.Preloader', 
// чтобы обеспечить доступ к нему снаружи анонимной функции
window.Preloader = Preloader
// для сокращения записи создадим переменную, которая будет ссылаться на прототип 'Preloader'
const fn = Preloader.prototype 

// Инициализация
fn.init = function() {
  window.addEventListener('load', () => {
    this.mask.classList.add('hide')
  })
}

if (mask) {
  new Preloader(mask)
}