
/***************************************** 
*INPUT
*****************************************/
let input = {
    mouseX: {
        start:20,
        end: window.innerWidth - 20,
        current: 0
    },
    mouseY: {
        start:0,
        end: window.innerHeight,
        current: 0
    }
}
//Reichweite festlegen (wenn ich später das Mousemovement nur innerhalb des Wrappers ansprechen will)
// Reichweite = Ende - Start
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;
//console.log(input.mouseX.range); 1680

//Wollen nur zahlen von 0-1
//Zahl = (aktuelle Position - Start Position): gesamte Länge/Höhe /Reichweite
//input.mouseX.part = (input.mouseX.current - input.mouseX.start)/ input.mouseX.range;
//input.mouseY.part = (input.mouseY.current - input.mouseY.start)/ input.mouseY.range;


/***************************************** 
*OUTPUT
*****************************************/

let output = {
    posX:{
        start:-100,
        end:100,
        current: 0,
        
    },
    posY:{
        start:-100,
        end:100,
        current: 0,
    }
}
output.posX.range = output.posX.end - output.posX.start;
output.posY.range = output.posY.end - output.posY.start;




let MouseMovement = function(e){
    input.mouseX.current = e.clientX;
    input.mouseX.part = (input.mouseX.current - input.mouseX.start)/ input.mouseX.range;
    //da Reichweite von 20px zu 20px geht werte kleiner 0 und größer 1 anpassen
    if(input.mouseX.part > 1){
        input.mouseX.part = 1;
    }
    if(input.mouseX.part < 0){
        input.mouseX.part = 0;
    }

    input.mouseY.current = e.clientY;
    input.mouseY.part = (input.mouseY.current - input.mouseY.start)/ input.mouseY.range;


    output.posX.current = output.posX.end - (input.mouseX.part * output.posX.range);
    output.posY.current = output.posY.start + (input.mouseY.part * output.posY.range);


    document.getElementById('headline').style.transform = "translate(" + output.posX.current + "px, " + output.posY.current + "px)";

   
}

window.addEventListener('mousemove',  MouseMovement);


/******************************
 * FIXEDMENU
 ******************************/
const menu = document.querySelector('.menu');
window.addEventListener('scroll', function(){
let abstandOben = menu.offsetTop;
let aktuellePos = window.pageYOffset;

if (abstandOben < aktuellePos){
    document.querySelector('.menu').classList.add('fixed');
}
else{
    document.querySelector('.menu').classList.remove('fixed');
}
});


/******************************
 * MOUSEOVER + POPUP
 ******************************/

const button = document.querySelectorAll('.button');
const openbutton = document.querySelector('#clickbutton');
const closebutton = document.querySelector('#close');
const popup = document.querySelector('.popup');


button.forEach(element => {
    element.addEventListener('mouseover', function(){
        this.style.background = 'white';
        this.style.color = 'black';
    });
    element.addEventListener('mouseout', function(){
        this.style.background = 'black';
        this.style.color = 'white';
    });
});

openbutton.addEventListener('click', function(event){
    popup.classList.add('visible');
});
closebutton.addEventListener('click', function(event){
    popup.classList.remove('visible');
});


/**********************************
 * SLIDER
***********************************/

const slides = document.querySelectorAll('.slider')
let a = 0;

slideShow();


function slideShow(){
    for (let x = 0; x < slides.length; x++) {
        const element = slides[x];
        element.classList.remove('current');
    }

    a++;
    if (a > slides.length) {a=1};
    slides[a-1].classList.add('current');
    setTimeout(slideShow, 3600);
}


/**********************************
 * CANVAS
***********************************/

const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');
var raf;

let rect = {
    x: 10,
    y: 10,
    x1:2,
    y1:2,
    width: 50,
    height: 50,
    color: 'black',
    initialDraw: function(){
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    rect.initialDraw();
    rect.x += rect.x1;
    rect.y += rect.y1;
    if (rect.y + rect.y1 > canv.height-50 || rect.y + rect.y1 < 0) {
        rect.y1 = -rect.y1;
      }
      if (rect.x + rect.x1 > canvas.width-50 || rect.x + rect.x1 < 0) {
        rect.x1 = -rect.x1;
      }
    
      raf = window.requestAnimationFrame(draw);
}

canv.addEventListener('mouseover', function(e) {
    raf = window.requestAnimationFrame(draw);
  });

canv.addEventListener('mouseout', function(e) {
    window.cancelAnimationFrame(raf);
});
  
