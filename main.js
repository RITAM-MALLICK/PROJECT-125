difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(540,500);

    canvas = createCanvas(550,550);
    canvas.position(560,160);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('Pose',gotPoses);
}

function draw() {
    background('#D2B4DE');
    document.getElementById("font_size").innerHTML = "font size of a text will be =" + difference + "px";
    textSize(difference);
    fill('#F91300');
    text('Ritam',50,400);
}

function modelLoaded() {
    console.log("Pose net is initialised");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("left wrist x = " + leftWristX + " right wrist x = " + rightWristX + "difference = " + difference);
    }
}