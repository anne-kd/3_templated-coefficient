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




var MouseMovement = function(e){
    input.mouseX.current = e.clientX;
    console.log('x', input.mouseX.current);
    input.mouseY.current = e.clientY;
    console.log('y', input.mouseY.current);
}

window.addEventListener('mousemove',  MouseMovement)
