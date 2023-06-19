Webcam.set({
    width: 350,
    height:300,
    image_quality: 'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function cap () {
    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML='<img id="capturedimg" src="'+data_uri+'"/>';
    })
}
console.log("ml5 version" , ml5.version );

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FVJ04qsvq/model.json',modelLodaed);

function modelLodaed(){

    console.log("yayyy model is loaded")
}
function check()
{
img=document.getElementById("capturedimg");
classifier.classify(img, gotResult);
}

function gotResult(error,results)
{
   if(error)
    { 
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}