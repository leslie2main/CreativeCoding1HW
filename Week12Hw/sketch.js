let player;
let obstacles = [];
let exit;
let youWin = false;

function setup() {
  createCanvas(600, 400);
  createPlayer();
  createObstacles(2); // Create 2 obstacles to start
  createExit();
}

function draw() {
  background(220);
  drawBorders();
  movePlayer();
  drawPlayer();
  moveObstacles();
  drawObstacles();
  drawExit();

  if (youWin) {
    displayWinMessage();
  }
}

// Create player
function createPlayer() {
  player = {
    x: 50,
    y: height / 2,
    size: 20,
    speed: 3
  };
}

function drawPlayer() {
  fill(0, 100, 255);
  ellipse(player.x, player.y, player.size);
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) player.x -= player.speed;
  if (keyIsDown(RIGHT_ARROW)) player.x += player.speed;
  if (keyIsDown(UP_ARROW)) player.y -= player.speed;
  if (keyIsDown(DOWN_ARROW)) player.y += player.speed;

  // Check for reaching exit
  if (
    player.x > exit.x &&
    player.x < exit.x + exit.w &&
    player.y > exit.y &&
    player.y < exit.y + exit.h
  ) {
    youWin = true;
  }
}

// Draw object on mouse press
function mousePressed() {
  fill(255, 0, 0);
  rect(mouseX, mouseY, 20, 20);
}

// Create obstacles
function createObstacles(n) {
  for (let i = 0; i < n; i++) {
    obstacles.push({
      x: random(width),
      y: random(height),
      size: random(20, 40),
      color: color(random(255), random(255), random(255)),
      speedX: random(-2, 2),
      speedY: random(-2, 2)
    });
  }
}

function drawObstacles() {
  for (let obs of obstacles) {
    fill(obs.color);
    ellipse(obs.x, obs.y, obs.size);
  }
}

function moveObstacles() {
  for (let obs of obstacles) {
    obs.x += obs.speedX;
    obs.y += obs.speedY;

    // Wrap around screen
    if (obs.x > width) obs.x = 0;
    if (obs.x < 0) obs.x = width;
    if (obs.y > height) obs.y = 0;
    if (obs.y < 0) obs.y = height;
  }
}

// Create borders
function drawBorders() {
  noFill();
  stroke(0);
  strokeWeight(4);
  rect(0, 0, width, height);
}

// Create exit
function createExit() {
  exit = {
    x: width - 60,
    y: height / 2 - 20,
    w: 40,
    h: 40
  };
}

function drawExit() {
  fill(0, 255, 0);
  rect(exit.x, exit.y, exit.w, exit.h);
}

// Display win message
function displayWinMessage() {
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("You Win!", width / 2, height / 2);
}