let callBack__buttonOpen_first = document.querySelector('.callBack__chat_first');
let callBack__buttonOpen_second = document.querySelector('.callBack__chat_second');
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
  setTimeout(() => {isСallBackOpen = true; console.log (isСallBackOpen);}, 100);  
}

function callBack_Close () {
    callBack__page.classList.remove('callBack__open'); 
    callBack__blur.classList.remove('wrapper__blurCallBack');
    callBack__page.classList.add('callBack__hidden'); 
    callBack__Asideblur.classList.remove ('aside__blurCallBack');
    setTimeout(() => {isСallBackOpen = false; console.log (isСallBackOpen);}, 100); 
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
  if ( (event.pageX < (document.body.clientWidth  - callBackWidth) ||
        event.pageY > callBackHeight)
        && isСallBackOpen == true && event.target.id != 'call_second') {
    console.log('Вы нажали мышкой за пределами блока обратной связи, и окно обратной связи должно быть закрыто'); 
    callBack_Close ();
  }
});




