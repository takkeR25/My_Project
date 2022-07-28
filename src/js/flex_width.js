let trademarks__FlexWidth  =  document.querySelector('.trademarks__logo:nth-child(1)');
let trademarks__width; 
let trademarks__string;

function trademarksResize () {
  trademarks__width = trademarks__FlexWidth.offsetWidth;
  trademarks__string = String(trademarks__width + "px");
  document.querySelector('.trademarks__logo:nth-child(9)').style.width = trademarks__string; 
  document.querySelector('.trademarks__logo:nth-child(10)').style.width = trademarks__string; 
  document.querySelector('.trademarks__logo:nth-child(11)').style.width = trademarks__string;  
}

trademarksResize();

window.addEventListener('resize',function() {
  trademarksResize();  
  // console.log ("Ширина flex элемента: " + trademarks__string);  
});  

//-----------------------------------------------------------------------------------------------------------------------//

let repairs__FlexWidth  =  document.querySelector('.repairs__logo:nth-child(1)');
let repairs__width; 
let repairs__string;

function repairsResize () {
  repairs__width = repairs__FlexWidth.offsetWidth;
  repairs__string = String(repairs__width + "px");
  document.querySelector('.repairs__logo:nth-child(4)').style.width = repairs__string; 
  document.querySelector('.repairs__logo:nth-child(5)').style.width = repairs__string; 
}

repairsResize();

window.addEventListener('resize',function() {
  repairsResize();  
  // console.log ("Ширина flex элемента: " + trademarks__string);  
});  