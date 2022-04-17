function preload(){
    img=loadImage("clown nose.png");
}

function setup(){
    Canvas=createCanvas(400,400);
    Canvas.center();
   Video=createCapture(VIDEO);
   Video.size(400,400);
   Video.hide();
   pose=ml5.poseNet(Video,modelLoaded);
   pose.on('pose',gotPoses);
}

function draw(){
    image(Video,0,0,400,400);
    image(img,results[0].pose.nose.x,results[0].pose.nose.y,50,50);
}

function modelLoaded(){
    console.log("poseNet is Intialised")
} 

function gotPoses(results){
  if  (results.length > 0){
      console.log(results);
      console.log("nose x= "+ results[0].pose.nose.x);
      console.log("nose y= "+ results[0].pose.nose.y);
    }
  
  
}