var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function (event) {
    console.log(event);
var content=event.results[0][0].transcript;
if (content=="take my selfie"){
console.log("taking selfie---");
speak();
}
console.log(content);
document.getElementById("textbox").innerHTML=content;
}
function speak() {
var synth=window.speechSynthesis;
speakdata="taking your selfie in 5 seconds"
var utterThis= new SpeechSynthesisUtterance(speakdata);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout((function(){
take_selfie();
save();
}),5000);
}
Webcam.set({
    width:390,
    height:290,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera").value;


function take_selfie() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
function save() {
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}