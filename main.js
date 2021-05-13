function setup() {
  video = createCapture(VIDEO);
  video.size(550, 550);

  canvas = createCanvas(550, 550);
  canvas.position(700, 200);
  pose = ml5.poseNet(video, modelLoaded);

  pose.on("pose", gotResults);
}

var noseX = 0;
var noseY = 0;
var rightWristX = 0;
var leftWristX = 0;
var difference = 0;

function gotResults(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + "nose Y = " + noseY)

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX " + rightWristX + "Difference " + difference)

    }
}

function modelLoaded() {
    console.log("Model Loaded");
}

function draw() {
  background(255, 0, 0);
  document.getElementById("w&h").innerHTML = difference + "px";
  fill(0, 255, 0);
  stroke(0, 255 ,0);
  square(noseX, noseY, difference);
}
