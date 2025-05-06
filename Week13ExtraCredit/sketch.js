let obstacles = [];
let player;
let exitArea;
let gameWon = false;

function setup() {
  createCanvas(800, 600);

  // Create player
  player = createVector(50, height / 2);

  // Create exit area
  exitArea = {
    x: width - 100,
    y: height - 100,
    w: 80,
    h: 80
  };

  // Create initial obstacles
  for (let i = 0; i < 5; i++) {
    obstacles.push(createRandomObstacle(true)); // moving
  }
}

function draw() {
  background(30);

  // Exit area
  fill(0, 200, 0);
  rect(exitArea.x, exitArea.y, exitArea.w, exitArea.h);
  textSize(14);
  fill(255);
  text("EXIT", exitArea.x + 20, exitArea.y + 45);

  // Draw and update obstacles
  for (let obs of obstacles) {
    fill(obs.color);
    rect(obs.x, obs.y, obs.w, obs.h);

    if (obs.moving) {
      obs.x += obs.vx;
      obs.y += obs.vy;

      // Wrap around
      if (obs.x > width) obs.x = -obs.w;
      if (obs.x + obs.w < 0) obs.x = width;
      if (obs.y > height) obs.y = -obs.h;
      if (obs.y + obs.h < 0) obs.y = height;
    }
  }

  // Draw player
  fill(0, 150, 255);
  ellipse(player.x, player.y, 20, 20);

  if (gameWon) {
    textSize(48);
    fill(255);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
    noLoop();
  }

  checkWin();
}

function keyPressed() {
  const speed = 5;
  if (key === 'w' || key === 'W') player.y -= speed;
  if (key === 's' || key === 'S') player.y += speed;
  if (key === 'a' || key === 'A') player.x -= speed;
  if (key === 'd' || key === 'D') player.x += speed;
}

function mousePressed() {
  // Add a new obstacle at mouse location, random size, color, and moving
  obstacles.push({
    x: mouseX,
    y: mouseY,
    w: random(20, 60),
    h: random(20, 60),
    color: color(random(255), random(255), random(255)),
    vx: random(-2, 2),
    vy: random(-2, 2),
    moving: true
  });
}

function createRandomObstacle(moving) {
  return {
    x: random(width),
    y: random(height),
    w: random(30, 100),
    h: random(30, 100),
    color: color(random(255), random(255), random(255)),
    vx: moving ? random(-2, 2) : 0,
    vy: moving ? random(-2, 2) : 0,
    moving: moving
  };
}

function checkWin() {
  if (
    player.x > exitArea.x &&
    player.x < exitArea.x + exitArea.w &&
    player.y > exitArea.y &&
    player.y < exitArea.y + exitArea.h
  ) {
    gameWon = true;
  }
}