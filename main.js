function setup() {
  video = createCapture(VIDEO);
  video.size(550, 550);

  canvas = createCanvas(550, 550);
  canvas.position(700, 200);
  pose = ml5.poseNet(video, modelLoaded);

  pose.on("pose", gotResults);
}

var rightWristX = 0;
var leftWristX = 0;
var text_size = 30;
var difference = 0;

function gotResults(results) {
  if (results.length > 0) {
    console.log(results);

    rightWristX = results[0].pose.rightWrist.x;
    leftWristX = results[0].pose.leftWrist.x;
    difference = floor(leftWristX - rightWristX);
  }
}

function modelLoaded() {
  console.log("Model Loaded");
}

function draw() {
  background(255, 0, 0);
  textSize(difference);
  fill("#FFE787");
  text("Pranav", 50, 400);
}
