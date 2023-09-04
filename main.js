function preload() {

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
    camera.size(300, 300);
    classify = ml5.poseNet(camera, loaded);
    classify.on("pose", gotposes);
}
function draw() {
    image(camera, 0, 0, 300, 300);

}
function take_snapshot() {
    save("mustachefilter.png");
}
function loaded(){
    console.log("model is loaded");
}
function gotposes(poses){
    if(poses.length > 0){
        console.log(poses);
        x = poses[0].pose.nose.x;
        console.log("x: ", x);
        y = poses[0].pose.nose.y;
        console.log("y: ", y);
    }
}