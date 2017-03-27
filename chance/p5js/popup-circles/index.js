var initialOffset    = 10;
var offset           = 25;
var circleSize       = 15;

   function setup() {
   var canvas = createCanvas(500, 500); 
   canvas.parent('sketch');
   background(0);  
}

function draw() {
    
 var col = {
    r: 100,
    g: 63,
    b: 203
        

 }
    col.r = random(100, 180);
    col.g = random(0, 63);
    col.b = random(0, 203);

    strokeWeight(3);
    
    for(var y = initialOffset; y < height; y = y + offset ) {
    for(var x = initialOffset; x < width; x = x + offset){
      
        fill(col.r, col.g, col.b)

        ellipse(x, y, circleSize, circleSize);
        circleSize = Math.abs(randomGaussian(5, 10)) | 0;
    }
     
    }
}
