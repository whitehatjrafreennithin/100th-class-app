var SpeechRecognition = window.webkitSpeechRecognition; //API- speech to Text

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie in 5 sec")
        speak();
    }

}


function speak() {
    var synth = window.speechSynthesis; //API- Text to Speech

    speak_data = "taking selfie in 5 seconds"

    var utterThis = new SpeechSynthesisUtterance(speak_data); //function to convert T to S

    synth.speak(utterThis);

    Webcam.attach(camera);
    setTimeout(function () {
        take_snap_shot();
        save();
    }, 5000);
}


camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_snap_shot(){
    Webcam.snap( function (data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
});
}


 function save(){
     link = document.getElementById("link")
     image =document.getElementById("selfie_image").src;
     link.href = image;
     link.click()
 }
