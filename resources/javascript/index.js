
//let eventTarget = document.getElementById('targetElement');
 
//eventTarget.addEventListener('click', function() {



let mainColor = document.querySelector('.main-container');

let mouseClick = document.querySelector('.fa-computer-mouse');

let image = document.querySelector('.kphoto');

let text = document.querySelector('.intro');

let navColor = document.querySelector('.cchange');

let toggle = document.querySelector('.toggle');

let normal = document.querySelector('.normal');

let textDisplay1 = document.querySelector('.display1');

let textDisplay2 = document.querySelector('.display2');

let textDisplay3 = document.querySelector('.display3');

let about = document.querySelector('.about');

let figure = document.querySelector('.main-container figure');
  

function mainChange() {
  
  mainColor.style.background = 'linear-gradient(1deg, black, #f71609, #f98904, #f5fd00, #05ec07, #02fbe1, hotpink)';
  mainColor.style.backgroundSize = '1200% 1200%';
  mainColor.style.animation = " change 10s ease infinite";
  image.src= "resources/images/squarenose.jpg";
  image.style.maxWidth = "100%";
  text.style.backgroundImage = "url('resources/images/thisvar.png')";
  textDisplay1.style.display = "none";
  textDisplay2.style.display = "none";
  textDisplay3.style.display = "none";
  text.style.width = "500px";
  text.style.minHeight = "300px";
  text.style.backgroundColor = "transparent";
  text.style.boxShadow = "none";
  navColor.style.backgroundColor = "black";
  toggle.style.opacity = "1";
  normal.style.display = "none";
  figure.style.paddingRight = "2.35em";
  

}

mouseClick.addEventListener('click', mainChange);

function undo() {

  mainColor.style.background =  "linear-gradient(212deg, #2f274a, #6f1051, #049ab1)";
  mainColor.style.backgroundSize = '1200% 1200%';
  mainColor.style.animation = "change 20s ease infinite";
  image.src = "resources/images/square.jpg";
  textDisplay1.style.display = "";
  textDisplay2.style.display = "";
  textDisplay3.style.display = "";
  text.style.backgroundImage = "url()";
  text.style.boxShadow = "";
  text.style.backgroundColor = "";
  text.style.minHeight = "";
  text.style.maxWidth = "";
  text.style.marginLeft = "";
  navColor.style.backgroundColor = "";
  toggle.style.opacity = "";
  normal.style.display = "";
  figure.style.paddingRight = "";

}

toggle.addEventListener('click', undo);


