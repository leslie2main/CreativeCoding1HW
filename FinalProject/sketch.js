let player;
let beam;
let levels = [];
let currentLevel = 0;
let gameComplete = false;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  player = createVector(100, height / 2);
  beam = createVector(1, 0);

  // Levels
  levels.push(new Level([
    new Mirror(400, 126, 150, -30)
  ], new Target(700, 300)));

  levels.push(new Level([
    new Mirror(100, 400, 200, 60),
    new Mirror(550, 300, 150, -45)
  ], new Target(700, 100)));

  levels.push(new Level([
    new Mirror(150, 150, 120, 30),
    new Mirror(650, 150, 90, 15),
    new Mirror(650, 500, 80, -20)
  ], new Target(500, 350)));
}

function draw() {
  background(15);

  if (gameComplete) {
    fill(0, 255, 0);
    textSize(36);
    textAlign(CENTER, CENTER);
    text("🎉 Game Complete! 🎉", width / 2, height / 2 - 20);
    textSize(24);
    text("Press R to Restart", width / 2, height / 2 + 30);
    return;
  }

  let level = levels[currentLevel];
  drawBeam(player.copy(), beam.copy(), 0, level);
  level.checkCompletion();

  fill(255, 255, 100);
  noStroke();
  ellipse(player.x, player.y, 12, 12);

  level.show();

  if (level.completed) {
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("Level Complete! Press SPACE to continue.", width / 2, height - 30);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) beam.rotate(-5);
  if (keyCode === RIGHT_ARROW) beam.rotate(5);

  if (key === ' ') {
    if (gameComplete) return;

    let level = levels[currentLevel];
    drawBeam(player.copy(), beam.copy(), 0, level);  // Ensure hit is registered
    level.checkCompletion();

    if (level.completed) {
      if (currentLevel < levels.length - 1) {
        currentLevel++;
        levels[currentLevel].reset();
      } else {
        gameComplete = true;
      }
    }
  }

  if (key === 'r' || key === 'R') {
    currentLevel = 0;
    levels.forEach(level => level.reset());
    gameComplete = false;
  }
}

function mousePressed() {
  let level = levels[currentLevel];
  for (let m of level.mirrors) {
    if (m.contains(mouseX, mouseY)) {
      m.angle += 15;
      m.update();
    }
  }
}

function drawBeam(pos, dir, depth, level) {
  if (depth > 3) return;

  let maxDist = 1000;
  let closest = null;
  let closestPt = null;
  let newDir;

  for (let m of level.mirrors) {
    let hit = m.getReflection(pos, dir);
    if (hit) {
      let d = p5.Vector.dist(pos, hit.point);
      if (d < maxDist) {
        maxDist = d;
        closest = hit;
        closestPt = hit.point;
        newDir = hit.reflect;
      }
    }
  }

  if (closestPt) {
    stroke(255, 255, 0);
    strokeWeight(2);
    line(pos.x, pos.y, closestPt.x, closestPt.y);

    if (level.target.isHitSegment(pos, closestPt)) level.target.hit = true;

    drawBeam(closestPt, newDir, depth + 1, level);
  } else {
    let end = p5.Vector.add(pos, p5.Vector.mult(dir, 1000));
    stroke(255, 255, 0);
    strokeWeight(2);
    line(pos.x, pos.y, end.x, end.y);

    if (level.target.isHitSegment(pos, end)) level.target.hit = true;
  }
}

// --- Classes ---

class Level {
  constructor(mirrors, target) {
    this.mirrors = mirrors;
    this.target = target;
    this.completed = false;
  }

  show() {
    for (let m of this.mirrors) m.show();
    this.target.show();
  }

  reset() {
    this.target.hit = false;
    this.completed = false;
  }

  checkCompletion() {
    if (this.target.hit && !this.completed) {
      this.completed = true;
    }
  }
}

class Mirror {
  constructor(x, y, len, angle) {
    this.x = x;
    this.y = y;
    this.len = len;
    this.angle = angle;
    this.update();
  }

  update() {
    this.a = createVector(this.x - cos(this.angle) * this.len / 2, this.y - sin(this.angle) * this.len / 2);
    this.b = createVector(this.x + cos(this.angle) * this.len / 2, this.y + sin(this.angle) * this.len / 2);
  }

  show() {
    stroke(100, 200, 255);
    strokeWeight(3);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    noStroke();
    fill(180);
    ellipse(this.x, this.y, 10, 10);
  }

  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < 10;
  }

  getReflection(origin, dir) {
    let intersection = getLineIntersection(origin, p5.Vector.add(origin, p5.Vector.mult(dir, 1000)), this.a, this.b);
    if (!intersection) return null;

    let mirrorDir = p5.Vector.sub(this.b, this.a).normalize();
    let normal = createVector(-mirrorDir.y, mirrorDir.x);
    let reflect = p5.Vector.sub(dir, p5.Vector.mult(normal, 2 * dir.dot(normal))).normalize();

    return { point: intersection, reflect: reflect };
  }
}

class Target {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.hit = false;
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(this.hit ? color(0, 255, 0) : color(255, 0, 0));
    ellipse(this.pos.x, this.pos.y, 20, 20);
  }

  isHitSegment(start, end) {
    let closest = this.closestPointOnSegment(start, end, this.pos);
    return p5.Vector.dist(closest, this.pos) <= 10;
  }

  closestPointOnSegment(a, b, p) {
    let ab = p5.Vector.sub(b, a);
    let t = p5.Vector.sub(p, a).dot(ab) / ab.magSq();
    t = constrain(t, 0, 1);
    return p5.Vector.add(a, ab.mult(t));
  }
}

// --- Utility Function ---
function getLineIntersection(p1, p2, p3, p4) {
  let den = (p1.x - p2.x) * (p3.y - p4.y) -
            (p1.y - p2.y) * (p3.x - p4.x);
  if (den === 0) return null;

  let t = ((p1.x - p3.x) * (p3.y - p4.y) -
           (p1.y - p3.y) * (p3.x - p4.x)) / den;
  let u = -((p1.x - p2.x) * (p1.y - p3.y) -
            (p1.y - p2.y) * (p1.x - p3.x)) / den;

  if (t > 0 && t < 1 && u > 0 && u < 1) {
    return createVector(
      p1.x + t * (p2.x - p1.x),
      p1.y + t * (p2.y - p1.y)
    );
  }

  return null;
}