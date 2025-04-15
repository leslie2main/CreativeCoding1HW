let player;
let obstacles = [];
let newObstacles = [];
let exit;

function setup() {
  createCanvas(600, 400); // 
  
  // Player setup 
  player = {
    x: 50,
    y: 50,
    size: 20,
    speed: 3
  };
  
  // Initial obstacles 
  for (let i = 0; i < 2; i++) {
    obstacles.push({
      x: random(width),
      y: random(height),
      size: random(20, 40),
      color: color(random(255), random(255), random(255)),
      dx: random(-2, 2),
      dy: random(-2, 2)
    });
  }

  // Exit setup 
  exit = {
    x: width - 40,
    y: height - 40,
    size: 30
  };
}

function draw() {
  background(220);
  
  // Draw exit 
  fill(0, 255, 0);
  rect(exit.x, exit.y, exit.size, exit.size);
  text("EXIT", exit.x + 5, exit.y + 20);

  // Move and draw player 
  fill(0, 0, 255);
  ellipse(player.x, player.y, player.size);

  // Keyboard controls 
  if (keyIsDown(LEFT_ARROW)) player.x -= player.speed;
  if (keyIsDown(RIGHT_ARROW)) player.x += player.speed;
  if (keyIsDown(UP_ARROW)) player.y -= player.speed;
  if (keyIsDown(DOWN_ARROW)) player.y += player.speed;

  // Draw & move random obstacles 
  for (let obs of obstacles) {
    obs.x += obs.dx;
    obs.y += obs.dy;

    // Reappear on opposite side 
    if (obs.x > width) obs.x = 0;
    if (obs.x < 0) obs.x = width;
    if (obs.y > height) obs.y = 0;
    if (obs.y < 0) obs.y = height;

    fill(obs.color);
    ellipse(obs.x, obs.y, obs.size);
  }

  // Draw new static obstacles from mouse clicks 
  for (let obs of newObstacles) {
    fill(150, 0, 0);
    ellipse(obs.x, obs.y, obs.size);
  }

  // Win logic 
  if (player.x > exit.x && player.y > exit.y) { // uses logical operator 
    fill(0);
    textSize(32);
    text("You Win!", width / 2 - 70, height / 2);
    noLoop(); // Stop the game
  }

  // Extra if/else logic example 
  if (player.x < 0) {
    player.x = 0;
  } else if (player.x > width) {
    player.x = width;
  }

  if (player.y < 0) {
    player.y = 0;
  } else if (player.y > height) {
    player.y = height;
  }
}

function mousePressed() {
  // Add new non-moving obstacle on click 
  newObstacles.push({
    x: mouseX,
    y: mouseY,
    size: random(20, 40)
  });
}