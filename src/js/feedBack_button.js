let feedBack__buttonOpen_first = document.querySelector('.feedBack__chat_first');
let feedBack__buttonOpen_second = document.querySelector('.feedBack__chat_second');
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
  setTimeout(() => {isFeedBackOpen = true; console.log (isFeedBackOpen);}, 100);  
}

function feedBack_Close () {
    feedBack__page.classList.remove('feedBack__open'); 
    feedBack__blur.classList.remove('wrapper__blurFeedBack');
    feedBack__page.classList.add('feedBack__hidden'); 
    feedBack__Asideblur.classList.remove ('aside__blur');
    setTimeout(() => {isFeedBackOpen = false; console.log (isFeedBackOpen);}, 100); 
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

let timerId = setInterval(() => console.log('Открыто ли окно обратной связи сейчас: ' + isFeedBackOpen), 2000);

document.addEventListener('click',function(event) {
  // console.log('Сравниваем event.target ' + (event.target.id == 'chat_second'));
  if ( (event.pageX < (document.body.clientWidth  - feedBackWidth) ||
        event.pageY > feedBackHeight)
        && isFeedBackOpen == true && event.target.id != 'chat_second') {
    console.log('Вы нажали мышкой за пределами блока обратной связи по оси X  и окно обратной связи должно быть закрыто'); 
    feedBack_Close ();
  }
});


