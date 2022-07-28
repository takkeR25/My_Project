let aside__button_open = document.querySelector('.nav__burger');
let aside__button_close = document.querySelector('.aside__close');
let aside__page = document.querySelector('.aside');
let aside__blur = document.querySelector('.wrapper');
let asideHeight = aside__page.clientHeight;

aside__button_open.onclick = function () {
    console.log('Вы нажали на кнопку "Бургер меню"'); 
  	aside__page.classList.add('aside__open');
    aside__blur.classList.add('wrapper__blur');
    aside__page.classList.remove('aside__hidden'); 
}

aside__button_close.onclick = function () {
    console.log('Вы закрыли "Бургер меню"');
    aside__page.classList.remove('aside__open'); 
    aside__blur.classList.remove('wrapper__blur');
    aside__page.classList.add('aside__hidden'); 
}

document.addEventListener('click',function(event) {
  // console.log('Координаты клика мыши по оси X: ' + event.clientX);
  // console.log('Координаты клика мыши по оси Y: ' + event.clientY);
  // console.log('Координаты клика мыши по оси X относительно верхнего края документа: ' + event.pageX);
  // console.log('Координаты клика мыши по оси Y относительно верхнего края документа: ' + event.pageY);

  if (  (event.clientX > 320 || event.pageY > asideHeight)  && document.body.clientWidth < 1120  
    && isFeedBackOpen == false && isСallBackOpen == false) {
    aside__page.classList.remove('aside__open');
    aside__blur.classList.remove('wrapper__blur');
    aside__page.classList.add('aside__hidden');
  }
});


function showAsideMenu() {
    if (document.body.clientWidth >= 1120) {
      aside__page.classList.add('aside__static');
      aside__page.classList.remove('aside__hidden');
       aside__page.classList.remove('aside__open');
       aside__blur.classList.remove('wrapper__blur');
    } else {
      aside__page.classList.remove('aside__static');
    }
}

showAsideMenu();
window.addEventListener('resize',function() {
  // console.log('Ширина экрана ' + document.body.clientWidth);
  showAsideMenu();
});
