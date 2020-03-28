
/***************************************** 
INPUT
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
OUTPUT
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

window.addEventListener('mousemove',  MouseMovement)
