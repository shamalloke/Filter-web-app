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


function modelLoaded(){
    console.log("poseNet is Intialised")
} 

x=0;
y=0;

function gotPoses(results){
  if  (results.length > 0){
      console.log(results);
      x= results[0].pose.nose.x;
      y=results[0].pose.nose.y;
      console.log("nose x= "+ x);
      console.log("nose y= "+ y);
    }
  
  
}
function draw(){
    image(Video,0,0,400,400);
    image(img,x-15,y-15,100,100);
}

