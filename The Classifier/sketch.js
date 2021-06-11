// hidden square diameters 
let rx = 100; let ry = 100;
let rw = 100; let rh = 100;

let rx2 = 500; let ry2 = 115;
let rw2 = 100; let rh2 = 100;

let rx3 = 150; let ry3 = 550;
let rw3 = 100; let rh3 = 100;

let rx4 = 510; let ry4 = 550;
let rw4 = 100; let rh4 = 100;


let rx5 = 850; let ry5 = 130;
let rw5 = 100; let rh5 = 100;

let rx6 = 850; let ry6 = 550;
let rw6 = 100; let rh6 = 100;

// sounds & images
let img; let img2;
let img3; let img4;
let img5; let img6;

let sound; let sound2; 
let sound3; let sound4;
let sound5; let sound6;

function preload () {

  sound = loadSound('seren.mp3');
  img = loadImage('seren.png');
  
  sound2 = loadSound('noah.mp3');
  img2 = loadImage('noah.png');
  
  sound3 = loadSound('ben.mp3')
  img3 = loadImage('ben.png');
  
  sound4 = loadSound('gavin.mp3');
  img4 = loadImage('gavin.png');
  
  sound5 = loadSound('Tay.mp3');
  img5 = loadImage('tay.png');
  
  sound6 = loadSound('adekola.mp3');
  img6 = loadImage('adekola.png');
  
}

function setup () {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  //sound1 positioning
  if(sound.isPlaying()) {
    image(img, 0, 40, 300, 300);
    noFill();
  } else {
    noFill();
    image(img, 0, 40, 300, 300);
  }
  rect (rx, ry, rw, rh);
   noFill();

  //sound 2 positioning 
  if(sound2.isPlaying()) {
      image(img2, 340, 20, 400, 340);
      noFill();
  } else {
    image(img2, 340, 20, 400, 340);
    noFill();
  }
  rect (rx2, ry2, rw2, rh2);
   noFill();
  

  //sound3 positioning
  if(sound3.isPlaying()) {
      image(img3, 0, 400, 400, 400);
      noFill();
  } else {
    image(img3, 0, 400, 400, 400);
    noFill();
  }
  rect (rx3, ry3, rw3, rh3);
   noFill();
  
  
  //sound4 positioning
  if(sound4.isPlaying()) {
      image(img4, 350, 420, 400, 350);
      noFill();
  } else {
    image(img4, 350, 420, 400, 350);
    noFill();
  }
  rect (rx4, ry4, rw4, rh4);
   noFill();
  
  
  //sound5 positioning
  if(sound5.isPlaying()) {
      image(img5, 710, 20, 400, 350);
       noFill();
  } else {
   image(img5, 710, 20, 400, 350);
  noFill();  
  }
  rect (rx5, ry5, rw5, rh5);
   noFill();

  
  //sound5 positioning
  if(sound6.isPlaying()) {
      image(img6, 710, 420, 400, 350);
     noFill();
  } else {
   image(img6, 710, 420, 400, 350);
   noFill();
  }
  rect (rx6, ry6, rw6, rh6);
   noFill();
}



// plays sound when mouse is clicked 
function mousePressed() {
  
  
  if(mouseX > rx && mouseX < rx+ rw &&
    mouseY > ry && mouseY < ry + rh) {
      sound.play();
     } else {
    sound.stop();
  }
  
  if(mouseX > rx2 && mouseX < rx2 + rw2 &&
    mouseY > ry2 && mouseY < ry2 + rh2) {
      sound2.play();
     } else {
    sound2.stop();
  }
 
  if(mouseX > rx3 && mouseX < rx3 + rw3 &&
    mouseY > ry3 && mouseY < ry3 + rh3) {
      sound3.play();
     } else {
    sound3.stop();
  }
 
  
  if(mouseX > rx4 && mouseX < rx4 + rw4 &&
    mouseY > ry4 && mouseY < ry4 + rh4) {
      sound4.play();
     } else {
    sound4.stop();
  }
  
   
  if(mouseX > rx5 && mouseX < rx5 + rw5 &&
    mouseY > ry5 && mouseY < ry5 + rh5) {
      sound5.play();
     } else {
    sound5.stop();
  }
  
  
  if(mouseX > rx6 && mouseX < rx6 + rw6 &&
    mouseY > ry6 && mouseY < ry6 + rh6 ) {
      sound6.play();
     } else {
    sound6.stop();
  }
  
}

