img="";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function preload(){
img = loadImage('dog_cat.jpg');
}
function draw(){
    image(img,0,0,640,420);
    fill("#fa007d");
    text("TEA",530,65);
    noFill();
    stroke("#fa007d");
    rect(520,50,100,130);
}

