let feedBack__buttonOpen_first = document.querySelector('.header-menu__button__feedBack-chat-first');
let feedBack__buttonOpen_second = document.querySelector('.aside__button__feedBack-chat-second');
let feedBack__button_close = document.querySelector('.feedBack__button');
let feedBack__page = document.querySelector('.feedBack');
let feedBack__blur = document.querySelector('.wrapper');
let feedBack__Asideblur = document.querySelector('.aside');
let feedBackHeight = feedBack__page.clientHeight;
let feedBackWidth = feedBack__page.clientWidth;
var isFeedBackOpen = false;

function feedBack_Open () {
  feedBack__page.classList.add('feedBack__open');
  feedBack__blur.classList.add('wrapper__blurFeedBack');
  feedBack__Asideblur.classList.add ('aside__blur');
  feedBack__page.classList.remove('feedBack__hidden'); 
  setTimeout(() => {isFeedBackOpen = true; }, 100);  
}

function feedBack_Close () {
    feedBack__page.classList.remove('feedBack__open'); 
    feedBack__blur.classList.remove('wrapper__blurFeedBack');
    feedBack__page.classList.add('feedBack__hidden'); 
    feedBack__Asideblur.classList.remove ('aside__blur');
    setTimeout(() => {isFeedBackOpen = false; }, 100); 
}

feedBack__buttonOpen_first.onclick = function () {
    // console.log('Вы нажали на кнопку "Открыть форму обратной связи" на главной странице');
    feedBack_Open (); 
}

feedBack__buttonOpen_second.onclick = function () {
    // console.log('Вы нажали на кнопку "Открыть форму обратной связи" на боковом меню Aside');  
    if (isFeedBackOpen == false) {
      feedBack_Open ();   
    } else {
      feedBack_Close ();
    }
}

feedBack__button_close.onclick = function () {
    // console.log('Вы закрыли "форму обратной связи"');
    feedBack_Close ();
}

// let timerId = setInterval(() => console.log('Открыто ли окно обратной связи сейчас: ' + isFeedBackOpen), 2000);

document.addEventListener('click',function(event) {
  feedBackWidth = feedBack__page.clientWidth;
  // console.log('Сравниваем event.target ' + (event.target.id == 'chat_second'));
  if ( (event.pageX < (document.body.clientWidth  - feedBackWidth) ||
        event.pageY > feedBackHeight)
        && isFeedBackOpen == true && event.target.id != 'chat_second') {
    // console.log('Вы нажали мышкой за пределами блока обратной связи по оси X  и окно обратной связи должно быть закрыто'); 
    feedBack_Close ();
  }
});

//-------------------------------------------------------------------------------------------------------------------------//
let callBack__buttonOpen_first = document.querySelector('.header-menu__button__callBack-chat-first');
let callBack__buttonOpen_second = document.querySelector('.aside__button__callBack-chat-second');
let callBack__button_close = document.querySelector('.callBack__button');
let callBack__page = document.querySelector('.callBack');
let callBack__blur = document.querySelector('.wrapper');
let callBack__Asideblur = document.querySelector('.aside');
let callBackHeight = callBack__page.clientHeight;
let callBackWidth = callBack__page.clientWidth;
var isСallBackOpen = false;

function callBack_Open () {
  callBack__page.classList.add('callBack__open');
  callBack__blur.classList.add('wrapper__blurCallBack');
  callBack__Asideblur.classList.add ('aside__blurCallBack');
  callBack__page.classList.remove('callBack__hidden'); 
  setTimeout(() => {isСallBackOpen = true;}, 100);  
}

function callBack_Close () {
    callBack__page.classList.remove('callBack__open'); 
    callBack__blur.classList.remove('wrapper__blurCallBack');
    callBack__page.classList.add('callBack__hidden'); 
    callBack__Asideblur.classList.remove ('aside__blurCallBack');
    setTimeout(() => {isСallBackOpen = false;}, 100); 
}

callBack__buttonOpen_first.onclick = function () {
    // console.log('Вы нажали на кнопку "Заказать обратный звонок" на главной странице');
    callBack_Open (); 
}

callBack__buttonOpen_second.onclick = function () {
    // console.log('Вы нажали на кнопку "Заказать обратный звонок" на боковом меню Aside');  
    if (isСallBackOpen == false) {
      callBack_Open ();   
    } else {
      callBack_Close ();
    }
}

callBack__button_close.onclick = function () {
    // console.log('Вы закрыли "форму обратной связи"');
    callBack_Close ();
}


document.addEventListener('click',function(event) {
  // console.log('Сравниваем event.target ' + (event.target.id == 'chat_second'));
  callBackWidth = callBack__page.clientWidth;
  // console.log("Ширина страницы: " + document.body.clientWidth);
  // console.log('Ширина окна "Заказать звонок": ' + callBackWidth);

  if ( (event.pageX < (document.body.clientWidth  - callBackWidth) ||
        event.pageY > callBackHeight)
        && isСallBackOpen == true && event.target.id != 'call_second') {
    // console.log('Вы нажали мышкой за пределами блока обратной связи, и окно обратной связи должно быть закрыто'); 
    callBack_Close ();
  }
});

//-------------------------------------------------------------------------------------------------------------------------//

let aside__button_open = document.querySelector('.header-menu__button');
let aside__button_close = document.querySelector('.aside__close');
let aside__page = document.querySelector('.aside');
let aside__blur = document.querySelector('.wrapper');
let asideWidth = aside__page.clientWidth;
let asideHeight = aside__page.clientHeight;

aside__button_open.onclick = function () {
    // console.log('Вы нажали на кнопку "Бургер меню"'); 
    aside__page.classList.add('aside__open');
    aside__blur.classList.add('wrapper__blur');
    aside__page.classList.remove('aside__hidden'); 
}

aside__button_close.onclick = function () {
    // console.log('Вы закрыли "Бургер меню"');
    aside__page.classList.remove('aside__open'); 
    aside__blur.classList.remove('wrapper__blur');
    aside__page.classList.add('aside__hidden'); 
}

document.addEventListener('click',function(event) {
  // console.log('Координаты клика мыши по оси X: ' + event.clientX);
  // console.log('Координаты клика мыши по оси Y: ' + event.clientY);
  // console.log('Координаты клика мыши по оси X относительно верхнего края документа: ' + event.pageX);
  // console.log('Координаты клика мыши по оси Y относительно верхнего края документа: ' + event.pageY);

  asideWidth = aside__page.clientWidth;

  if (  (event.clientX > asideWidth || event.pageY > asideHeight)  && document.body.clientWidth < 1120  
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
