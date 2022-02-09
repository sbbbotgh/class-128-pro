song_1 = "";
song_2 = "";
lefthandX = "";
righthandX = "";
lefthandY = "";
righthandY = "";

function preload(){
    song_1 = loadSound("Desire.mp3");
    song_2 = loadSound("Spaceship.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        righthandY = results[0].pose.rightWrist.y;
        righthandX = results[0].pose.rightWrist.x;

        lefthandX = results[0].pose.leftWrist.x;
        lefthandY = results[0].pose.leftWrist.y;
    }
}