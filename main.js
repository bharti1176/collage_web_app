var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition;
function start()
{
    recognition.start();
}
recognition.onresult=function(event)
{
    console.log(event);

    var content=event.results[0][0].transcript.toLowerCase();
    console.log(content);



    if (content=="selfie")
    {
    speak();
}}

function speak()
{
    var synth= window.speechSynthesis;

    speak_data="taking your next selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
    
        img_id="selfie1";
        take_snapshot();
        speak_data="taking your next selfie in 5 seconds";

var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    },5000 );


    setTimeout(function()
    {
    
        img_id="selfie2";
        take_snapshot();
        speak_data="taking your next selfie in 5 seconds";

var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    },10000 );

    setTimeout(function()
    {
    
        img_id="selfie3";
        take_snapshot();
    },15000 );



}

Webcam.set({
  width:500,
  height:400,
  image_format:'png',
  png_quality:90  
});
camera=document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        if(img_id=="selfie1")
        {

        document.getElementById("result-1").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
        }
        if(img_id=="selfie2")
        {

        document.getElementById("result-2").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
        }
        if(img_id=="selfie3")
        {

        document.getElementById("result-3").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
        }
    });
}
