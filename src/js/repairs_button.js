//--------Кнопка "Показать всё/Скрыть"--------------------------------------------------------------------------//

let repairs__button = document.querySelector('.repairs__button-read-more');
let repairs__page = document.querySelector('.repairs__main');
let repairs__text = document.querySelector('.repairs__button-read-more>span');

repairs__button.onclick = function () {
	
  	repairs__page.classList.toggle('repairs__main_open'); 
  	repairs__button.classList.toggle('repairs__button-read-more_rotated'); 
  	if (repairs__text.innerHTML == 'Показать все') {
  		repairs__text.innerHTML = 'Скрыть';
  			repairs__page.classList.remove('repairs__main_hidden');
  	} else {
  		repairs__text.innerHTML = 'Показать все';
  		repairs__page.classList.add('repairs__main_hidden');
  	}
}




