function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gx6NytvKr/.json', modelReady);
}






