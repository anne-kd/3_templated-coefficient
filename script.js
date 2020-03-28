const textHTML = document.getElementsByClassName('headline');
/***************************************** 
INPUT
*****************************************/
var input = {
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
OUTPUT
*****************************************/

var output = {
    posX:{
        start:-100,
        end:100,
        current: 0,
        
    },
    posY:{}
}
output.posX.range = output.posX.end - output.posX.start;





var MouseMovement = function(e){
    input.mouseX.current = e.clientX;
    input.mouseX.part = (input.mouseX.current - input.mouseX.start)/ input.mouseX.range;
    //da Reichweite von 20px zu 20px geht werte kleiner 0 und größer 1 anpassen
    if(input.mouseX.part>1){
        input.mouseX.part = 1;
    }
    if(input.mouseX.part>0){
        input.mouseX.part = 0;
    }

    input.mouseY.current = e.clientY;
    input.mouseY.part = (input.mouseY.current - input.mouseY.start)/ input.mouseY.range;


    output.posX.current = output.posX.start + (input.mouseX.part * output.posX.range);
    //Element ansprechen und 'transformX(output.posX.current)';
   
}

window.addEventListener('mousemove',  MouseMovement)

/*
var translate = 'translate(' + output.posX.current + 'px) scale(1.1)';
  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
*/
