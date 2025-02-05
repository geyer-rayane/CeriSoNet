let offset = 0;
let speed = 1.5; // Vitesse du déplacement

function setup() {
  let bgContainer = document.getElementById("background-container");
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(bgContainer);
}

function draw() {
  for (let x = 0; x < width; x++) {
    let inter = map(x + offset, 0, width, 0, 1); // Interpolation douce
    let c = lerpColor(color(135, 206, 250), color(0, 0, 139), inter); // Bleu clair → Bleu foncé
    stroke(c);
    line(x, 0, x, width); // Dessine des lignes verticales pour un dégradé lisse
  }

  offset += speed;
  if (offset > width) {
    offset = 0; // Boucle infinie du mouvement
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
