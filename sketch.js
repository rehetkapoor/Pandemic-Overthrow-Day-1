var sandyImage, virusImage, virusKingImage, pumpImage, babyVirusImage, backdrop
var SandyHanitizer, VirusKing, Pump, BabyVirus
var Viruses
function preload(){
    sandyImage=loadImage("Images/Sandy Hanitizer.png");
    virusImage=loadImage("Images/Virus.png");
    virusKingImage=loadImage("Images/Virus King.png");
    babyVirusImage=loadImage("Images/Baby Virus.png");
    backdrop=loadImage("Images/Background.png");
}

function setup(){
    var canvas=createCanvas(500,700);

    SandyHanitizer=createSprite(250, 600);
    SandyHanitizer.addImage(sandyImage);
    SandyHanitizer.scale=0.4
   
    VirusKing=createSprite(250, 100);
    VirusKing.addImage(virusKingImage);
    VirusKing.scale=0.7
    VirusKing.visible=false
}

function draw(){
    background(backdrop);
    drawSprites();
    Virus();
    babyViruses();
}

function Virus(){
    if(frameCount%100===0){
        Viruses=createSprite(500, Math.round(random(50, 150)));
        Viruses.addImage(virusImage);
        Viruses.scale=0.3
        Viruses.velocityX=-3
    }
}

function babyViruses(){
    if(frameCount%70===0){
        BabyVirus=createSprite(Math.round(random(50,450)), 50);
        BabyVirus.addImage(babyVirusImage)
        BabyVirus.scale=0.05
        BabyVirus.velocityY=3
    }
}