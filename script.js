var input = {
    mouseX: {
        start:0,
        end: window.innerWidth,
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
//console.log(input.mouseX.range); 1680

//Wollen nur zahlen von 0-1
//Zahl = (aktuelle Position - Start Position): gesamte Länge/Höhe /Reichweite
//input.mouseX.part = (input.mouseX.current - input.mouseX.start)/ input.mouseX.range;


var MouseMovement = function(e){
    input.mouseX.current = e.clientX;
    input.mouseX.part = (input.mouseX.current - input.mouseX.start)/ input.mouseX.range;
    console.log('x', input.mouseX.part);
    input.mouseY.current = e.clientY;
    console.log('y', input.mouseY.current);
}

window.addEventListener('mousemove',  MouseMovement)
