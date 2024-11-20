var inicioQuadro = 0
var fimQuadro = 0
var xIn = 0
var yIn = 0
var xOut = 0
var yOut = 0
var isMouseDown = false;
var Ydegrees = 0;

document.addEventListener('input', function(event){
    Ydegrees = document.getElementById('3DRotate').value*3.6;
    console.log(Ydegrees);
    let canvas = document.getElementById('canvas');
    canvas.style.transform = 'rotateY('+Ydegrees+'deg)';

})

document.addEventListener('mousedown', function(event) {
    
    
    if (event.button === 0) {      
        let colorPicker = document.getElementById('colorPicker');
        console.log(colorPicker.value);
        xIn = event.clientX; // Horizontal position relative to the viewport
        yIn = event.clientY; // Vertical position relative to the viewport
        isMouseDown = true;
        console.log(`mouse esquerdo segurado ali em (${xIn}, ${yIn})`);
        let newDiv = document.createElement('div');
        newDiv.id = 'myDivRabisco';
        let preencher = document.getElementById("preencher");
        //newDiv.innerHTML = 'This is a new div!';
        if(preencher.checked){
            console.log("preenchendo");
            newDiv.style.backgroundColor = colorPicker.value;
        }
        newDiv.style.borderColor = colorPicker.value;
        newDiv.style.borderStyle = 'solid';
        newDiv.style.position = 'absolute';
        document.body.appendChild(newDiv);
        //let canvas = document.getElementById("canvas");
        //canvas.appendChild(newDiv);
    }
    
});
document.addEventListener('click', function(event) {
    if (event.button === 0) {
        xOut = event.clientX; // Horizontal position relative to the viewport
        yOut = event.clientY; // Vertical position relative to the viewport
        isMouseDown = false;
        console.log(`mouse esquerdo solto  ali em (${xOut}, ${yOut})!`);
        desenharQuadro(xIn, yIn, xOut, yOut);
        let divAlterada = document.getElementById("myDivRabisco");
        divAlterada.remove();
        }
        
    

});
document.addEventListener('mousemove', function(event) {
    if (isMouseDown) {
        console.log('Mouse moving at:', event.clientX, event.clientY);
        rabiscarModelo(xIn,yIn, event.clientX, event.clientY);
    }
    
    let tagX = document.getElementById('x');
    let tagY = document.getElementById('y');
    tagX.textContent = event.clientX;
    tagY.textContent = event.clientY;
});
function rabiscarModelo(x, y, xOut, yOut){
    if(x>xOut){
        var xMoment = x;
        x = xOut;
        xOut = xMoment;
    }
    if(y>yOut){
        var yMoment = y;
        y = yOut;
        yOut = yMoment;
    }
    let divAlterada = document.getElementById("myDivRabisco")
    divAlterada.style.marginLeft = x;
    divAlterada.style.marginTop = y;
    divAlterada.style.width = xOut-x;
    divAlterada.style.height = yOut-y;  
}

function alinharCoordenadas(x, y, xOut, yOut){
    if(x>xOut){
        var xMoment = x;
        x = xOut;
        xOut = xMoment;
    }
    if(y>yOut){
        var yMoment = y;
        y = yOut;
        yOut = yMoment;
    }
}
function desenharQuadro(x, y, xOut, yOut){
    if(x>xOut){
        var xMoment = x;
        x = xOut;
        xOut = xMoment;
    }
    if(y>yOut){
        var yMoment = y;
        y = yOut;
        yOut = yMoment;
    }
    let newDiv = document.createElement('div');
    newDiv.id = 'myNewDiv';
    //newDiv.innerHTML = 'This is a new div!';
    newDiv.style.borderColor = colorPicker.value;
    newDiv.style.marginLeft = x;
    newDiv.style.marginTop = y;
    newDiv.style.width = xOut-x;
    newDiv.style.height = yOut-y;  
    newDiv.style.borderStyle = 'solid';
    newDiv.style.position = 'absolute';
    newDiv.style.transformStyle = 'preserve-3d';
    newDiv.style.transform ='rotateY('+(Ydegrees)+'deg)';
    let preencher = document.getElementById("preencher");
        //newDiv.innerHTML = 'This is a new div!';
    if(preencher.checked){
        console.log("preenchendo");
        newDiv.style.backgroundColor = colorPicker.value;
    }
    let canvas = document.getElementById("canvas");
    canvas.appendChild(newDiv);
    

}
