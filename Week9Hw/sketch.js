function setup()
{
    createCanvas(800, 800);
}

function draw() { 
  background("pink");
  textSize(22)
    text("Immaculate Vibes!", 10,80);
  noStroke();
  fill("#D2B48C");
  ellipse(400,400,540,585);
  
  //eyes
  fill("white");
  ellipse(300,290,90,77);
  ellipse(520,290,90,77);
  
  fill("black");
  ellipse(520,290,50,77);
  ellipse(300,290,50,77);
 
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
  rect(120,400,20,20);
  rect(660,400,20,20);
  
  //nose
  fill("beige")
  rect(390,350,40,70)
  ellipse(410,410,75,50);
   
  
  fill(120);
    textSize(22);
    text("Leslie Main",100,700 );
}