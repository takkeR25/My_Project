//--------Кнопка "Показать всё/Скрыть"--------------------------------------------------------------------------//

let main__button = document.querySelector('.main__read-more');
let main__page = document.querySelector('.main__text-container');
let main__text = document.querySelector('.main__read-more>span');

main__button.onclick = function () {
	
  	main__page.classList.toggle('main__text-container_open'); 
  	main__button.classList.toggle('main__read-more_rotated'); 
  	if (main__text.innerHTML == 'Читать далее') {
  		  main__text.innerHTML = 'Скрыть';
  			main__page.classList.remove('main__text-container_hidden');
  	} else {
  		main__text.innerHTML = 'Читать далее';
  		main__page.classList.add('main__text-container_hidden');
  	}
}




