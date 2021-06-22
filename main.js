img="";
status ="";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
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
function modelLoaded(){
    console.log("MODEL LOADED ! ");
     status = true;
     objectDetector.detect(img , gotResult);

}
function gotResult(error,results){
    if(error){
     console.log(error);
    }
    console.log(results);
}

