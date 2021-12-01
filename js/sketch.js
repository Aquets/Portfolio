
// module aliases
var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite;

var engine;
var world;
var totBalls = 100;
var balls = [];
var mouse_ball;
var right;
var bottom;
var ballSize = screen.width / 34;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  // create an engine
  engine = Engine.create();
  world = engine.world;

  bottom = Bodies.rectangle(width/2, height + 50, width+1920, 100, {isStatic: true})
  sopra = Bodies.rectangle(width/2, -50, width+1920, 100, {isStatic: true})
  left = Bodies.rectangle(-50, height/2, 100, height + 1080, {isStatic: true})
  right = Bodies.rectangle(width + 50, height/2, 100, height + 1080, {isStatic: true})
  mouse_ball = Bodies.circle(mouseX,mouseY,120, {isStatic: true})

  Composite.add(world, [sopra,bottom,left,right,mouse_ball])
  Engine.run(engine);

  Matter.Events.on(engine, 'afterUpdate', function() {

    Body.setVelocity(mouse_ball, {
              x: mouse_ball.position.x - mouseX,
              y:  mouse_ball.position.y - mouseY
          })


    Body.setPosition(mouse_ball, {
            x: mouseX,
            y: mouseY
        });
  });
}


function draw() {
  clear();

  if( screen.width <= 765 ) {
    totBalls = 30;
    ballSize = screen.height / 17;
  }

  if (balls.length < totBalls) {
    balls.push(new Ball(random(windowWidth), random(10,30), ballSize))
  }

  fill('#f2f2f2');
  stroke(0);
  balls.forEach((ball, i) => {
    strokeWeight(2)
    ball.show();
  });

}


function windowResized() {
  resizeCanvas(windowWidth,windowHeight);

  if (screen.width >= 765) {
    Body.setPosition(right, {
      x: windowWidth + 50,
      y: right.position.y
    });
    Body.setPosition(bottom, {
      x: bottom.position.x,
      y: windowHeight + 50
    });
  }

}

class Ball{
  constructor(x, y, r) {
    this.body = Bodies.circle(x,y,r);
    this.d = r*2
    Composite.add(world, this.body);
  }

  show() {
    circle(this.body.position.x, this.body.position.y, this.d-1)
  }

}
