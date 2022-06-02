function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}
function setup(){
    canvas = createCanvas(400, 400);
    canvas.position();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function classifyCanvas(){
    classifier.classify(canvas, gotResults);
}
function gotResults(error, results){
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("label").innerHTML = results[0].label;
        document.getElementById("confi").innerHTML = Math.round(results[0].confidence * 100) + "%";
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }
}
function clear(){
    background("white")
}