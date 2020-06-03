let ball1 = {
  x: 350,
  y: 500,
  xspeed: -5,
  yspeed: 5
}

let ball2 = {
  x: 200,
  y: 360,
  xspeed: 5,
  yspeed: -4
}

let ball3 = {
  x: 500,
  y: 20,
  xspeed: 7,
  yspeed: -4
}

let ball4 = {
  x: 35,
  y: 100,
  xspeed: 7,
  yspeed: -5
}

let ball5 = {
  x: 620,
  y: 180,
  xspeed: 5,
  yspeed: -5
}

let ball6 = {
  x: 35,
  y: 100,
  xspeed: 7,
  yspeed: 7
}


let img;


function setup() {
createCanvas(windowWidth, windowHeight);
  one = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img/master/one.png');
  two = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img/master/two.png');
  three = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img/master/three.png');
  four = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img/master/four.png');
  five = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img/master/five.png');
  six = loadImage(src = 'https://raw.githubusercontent.com/anutavsesuper/img/master/six.png');
  }



function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function draw() {

background(255, 30, 0);

display()
move()
bounce()


noStroke()
}


function display() {

  //шарики

  image(one, ball1.x, ball1.y, 100, 100);

  image(two, ball2.x, ball2.y, 120, 120);

  image(three, ball3.x, ball3.y, 150, 150);

  image(four, ball4.x, ball4.y, 100, 100);

  image(five, ball5.x, ball5.y, 100, 100);

  image(six, ball6.x, ball6.y, 200, 200);
}

function move() {
  ball1.x = ball1.x + ball1.xspeed;
  ball1.y = ball1.y + ball1.yspeed;

  ball2.x = ball2.x + ball2.xspeed;
  ball2.y = ball2.y + ball2.yspeed;

  ball3.x = ball3.x + ball3.xspeed;
  ball3.y = ball3.y + ball3.yspeed;

  ball4.x = ball4.x + ball4.xspeed;
  ball4.y = ball4.y + ball4.yspeed;

  ball5.x = ball5.x + ball5.xspeed;
  ball5.y = ball5.y + ball5.yspeed;

  ball6.x = ball6.x + ball6.xspeed;
  ball6.y = ball6.y + ball6.yspeed;
}


function bounce() {

   if (ball1.x > width-80 || ball1.x < 0) {
      ball1.xspeed = ball1.xspeed * -1;
  }
  if (ball1.y > height-80 || ball1.y < 0) {
      ball1.yspeed = ball1.yspeed * -1;
  }


  if (ball2.x > width-90 || ball2.x < 0) {
      ball2.xspeed = ball2.xspeed * -1;
  }
  if (ball2.y > height-90 || ball2.y < 0) {
      ball2.yspeed = ball2.yspeed * -1;
  }


  if (ball3.x > width-140 || ball3.x < 0) {
      ball3.xspeed = ball3.xspeed * -1;
  }
  if (ball3.y > height-140 || ball3.y < 0) {
      ball3.yspeed = ball3.yspeed * -1;
  }


  if (ball4.x > width-100 || ball4.x < 0) {
      ball4.xspeed = ball4.xspeed * -1;
  }
  if (ball4.y > height-100 || ball4.y < 0) {
      ball4.yspeed = ball4.yspeed * -1;
  }


  if (ball5.x > width-70 || ball5.x < 0) {
      ball5.xspeed = ball5.xspeed * -1;
  }
  if (ball5.y > height-70 || ball5.y < 0) {
      ball5.yspeed = ball5.yspeed * -1;
  }


  if (ball6.x > width-120 || ball6.x < 0) {
      ball6.xspeed = ball6.xspeed * -1;
  }
  if (ball6.y > height-120 || ball6.y < 0) {
      ball6.yspeed = ball6.yspeed * -1;
  }
}









// dlfv,lfv,
