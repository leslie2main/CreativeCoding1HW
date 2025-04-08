var eyeX = 250;
var eyeY = 100;
var eyeDirection = 4;

var eye1X = 100;
var eye1Y = 100;
var eye1Direction = .5; 

var earringX = 100
var earringY =  100
var earringDirection = 9

var noseX = 200;
var noseY = 185;
var noseDirection = 3;

var earring1X = 100;
var earring1Y = 100;
var earring1XDirection = 7;
var earring1YDirection = 7; 

var size = 22;
var count = 0;
var sizeDirection = 2;




function setup()
{
    createCanvas(800, 800);
}

function draw() 
{ 
  background("pink");
  textSize(22)
    text("Immaculate Vibes!", 10,80);
  
  noStroke();
  fill("#D2B48C");
  ellipse(400,400,540,585);
  
  //eyes
  fill("white");
  ellipse(eyeX,eyeY,77);
  ellipse(520,290,90,77);
  eyeX+=eyeDirection;
    if(eyeX >= 418 || eyeX <= 82)
    {
        eyeDirection *= -1;
    }
  
  fill("black");
  ellipse(eye1X,eye1Y,77);
  ellipse(300,290,50,77);
  eye1X+=eye1Direction;
    if(eye1X >= 418 || eye1X <= 12)
    {
        eye1Direction *= 1;
    }
 
  //eyebrows
  fill("black");
  arc(300, 240, 85, 85, PI, 0)
  arc(520, 240, 85, 85, PI, 0)
  
  
  //mouth
  fill("pink");
  ellipse(410,480,100,50);
  
  fill("purple")
  rect(360,480,100,3);
  
  //ears
  fill("#D2B48C");
  ellipse(140,352,150,170);
  ellipse(660,352,150,170);
  
  fill("gold");  
  rect(earring1Y,earring1X,20);
    earring1Y += earring1YDirection;
    earring1X += earring1XDirection; 
    if(earring1Y <= 0 || earring1Y >= 450 )
    if(earring1X <= 450 || earring1X >= 0 )
    {
        earring1YDirection *= -1;
        earring1XDirection *= -1;
    }
  
  rect(660,earringY,20,20);
    earringY += earringDirection;
    if(earringY <= 0 || earringY >= 450 )
    {
        earringDirection *= -1;
    }
  
  //nose
  fill("beige")
  rect(390,noseY,40,70);
    noseY += noseDirection;
    if(noseY <= 0 || noseY >= 450 )
    {
        noseDirection *= -1;
    }
  ellipse(410,410,75,50);
   
  
 fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Leslie Main",100,700 );
}
