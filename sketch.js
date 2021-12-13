var stars = [];
var moons = [];
var s = []; //increase size of selected moon
var w = []; //decrease size of selected moon
let angle = 0;
let orbit = 0;
let selectedMoon = 0;

//selected moon change color to green
function keyPressed() {
  if (key === "a") {
    moons.push(new Moon());
  } else if (key === "d") {
    moons.splice(selectedMoon, 1);
  } else if (key === "p") {
    selectedMoon++;
  } else if (keyCode === UP_ARROW) {
    moons[selectedMoon].size++;
  }else if(keyCode === DOWN_ARROW){
    moons[selectedMoon].size--; 
  }else if(keyCode === LEFT_ARROW){
    moons[selectedMoon].distance-=2
  }else if(keyCode === RIGHT_ARROW) {
    moons[selectedMoon].distance+=2
  }
    //banging my head into a wall. 
    /*this is my inital process:
      selectedMoon = this.scale
      } else if (keyCode === "DOWN_ARROW") {
        //moons[j].size (this.size-2)

    } else if (keyCode === "LEFT_ARROW") {
        //this.distance(selectedMoon + 2)

    } else if (keyCode === "RIGHT_ARROW") {
        this.distance(selectedMoon - 2)
        
        I also tried adding scale, this.scale, etc*/
//  }
}
class Moon {
  constructor() {
    this.size = random(5, 25);
    this.speed = random(0.005, 0.01);
    this.distance = random(100, 350);
    this.orbit = random(0, 2 * PI);
  }
  draw(selected) {
    push();
    rotateZ(10);
    rotateY(this.orbit);

    noFill();
    //stroke(150)

    if (selected) {
      stroke(150, 255, 150);
    } else {
      stroke(150);
    }

    strokeWeight(0.5);
    translate(200, 50, this.distance);
    //scale(this.size, 2)
    sphere(this.size);
    this.orbit += this.speed;
    pop();
  }
}
function setup() {
  createCanvas(600, 600, WEBGL);

  for (var i = 0; i < 500; i++) {
    stars[i] = new Star();
  }
  //moons.push(new Moon());
  for (var j = 0; j < 5; j++) {
    moons.push(new Moon());
  }
 // for (var s = this.size; s < 2; s ++){
   // this.size[s] = this.size ++
 // }
}

function draw() {
  background(30);

  for (var i = 0; i < stars.length; i++) {
    stars[i].draw();
  }
  push();
  rotateZ(10);
  rotateY(angle);

  noFill();
  stroke(150);
  strokeWeight(0.5);
  sphere(100);
  angle += 0.005;
  pop();

  //moons[0].draw();
  // for (var moon of moons) {
  for (var j = 0; j < moons.length; j++) {
    //moons[j].draw();
    // if (selectedMoon === j) {
    moons[j].draw(selectedMoon === j);

    //  }
  }
}

// star class //
class Star {
  constructor() {
    this.x = random(width) - width / 2;
    this.y = random(height) - height / 2;
    this.size = random(3, 1);
    this.t = random(6);
  }

  draw() {
    this.t += 0.1;
    var scale = this.size + sin(this.t) * 1;
    noStroke();
    ellipse(this.x, this.y, scale, scale);
  }
}

