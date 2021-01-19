function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  translate(200,200)
  rotate(-90)

  let hr  = hour();
  let mn  = minute();
  let sc = second();

  strokeWeight(7);
  stroke("purple")
  noFill();
  let end = map(sc,0,60,0,360)
  arc(0,0,300,300,0,end)

  stroke("red")
  noFill();
  let end2 = map(mn,0,60,0,360)
  arc(0,0,270,270,0,end2)

  stroke("green")
  noFill();
  let end3 = map(hr,0,60,0,360)
  arc(0,0,240,240,0,end3)

  push()
  rotate(end);
  stroke("blue")
  line(0,0,100,0)
  pop();

  push()
  rotate(end2);
  stroke("yellow")
  line(0,0,100,0)
  pop();

  push()
  rotate(end3);
  stroke("orange")
  line(0,0,100,0)
  pop();


  drawSprites(); 
  
}
  