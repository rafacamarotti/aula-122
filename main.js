x=0;
y=0;
drawCircle="";
drawRect="";
SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "A sua fala foi reconhecida como: "+content;
    if(content =="círculo"){
        x = Math.floor(Math.random()* 900);
        y = Math.floor(Math.random()* 600);
        document.getElementById("status").innerHTML = "Desenhando um círculo.";
        drawCircle = "set";
    }
    if(content =="retângulo"){
        x = Math.floor(Math.random()* 900);
        y = Math.floor(Math.random()* 600);
        document.getElementById("status").innerHTML = "Desenhando um retângulo.";
        drawRect = "set";
        }
}
function setup(){
    canvas = createCanvas(900, 600);
}
function draw(){
    if(drawCircle == "set"){
        radius = Math.floor(Math.random()* 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML= "círculo desenhado. ";
        drawCircle = ""
    }
    if(drawRect == "set"){
       rect(x,y,70,50);
       document.getElementById("status").innerHTML= "Retângulo desenhado. ";
       drawRect = "";
    }
}
