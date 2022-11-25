var stop = false;
/*Using the preload function to load an image as the background even before loading the canvas*/
function preload() {
  back = loadImage("MapImage.jpg");
}



/*Initializing two arrays to store the X and Y values of the mousePointer*/
var waypointsX=[];                //stores the value of X position of mouse pointer
var waypointsY=[];                //stores the value of Y position of the mouse pointer



/*Setting up the canvas for Drawing the points on*/
function setup() 
{
  createCanvas(700, 700);      //Creating a canvas of size 700X700
  //button_for_importing = createButton("Import data from Json").onPressed(load_data_from_JSON())
  //button_for_importing.position(10,20)
}

var resolution = 0.05;                 //1 meter = 1 pixels
var segmentX, segmentY;
var k =0;



function draw() {
  
  background(back);                     //setting up the image file as the background

    for(var i=0;i<waypointsX.length;i++){

      strokeWeight(5);
      point(waypointsX[i], waypointsY[i]);
      strokeWeight(2);
      line(waypointsX[i-1],waypointsY[i-1],waypointsX[i], waypointsY[i]);
      continue;
 //segment_the_lines(waypointsX[i-1],waypointsY[i-1],waypointsX[i],waypointsY[i]);
    }
}



function keyPressed(){
  if( key == "Backspace"){
    waypointsX.pop();
    waypointsY.pop();
  }

  if(key =='k')
    stop=!stop;
}


/*FUNCTION CALLED ON MOUSE CLICK EVENT*/
function mouseClicked() {

  if(mouseButton==LEFT&&stop!=true){
  //pushes into the array the value of the current mouse clicked position.
  waypointsX.push(mouseX);
  waypointsY.push(mouseY);
  print("("+waypointsX[waypointsX.length-1]+",")
  print(waypointsY[waypointsY.length-1]+")")
  
  }
  // prevent default
  return false;
}
  

/*for (let t=0; t<=1; t += 0.1){
  let x1 = lerp(waypointsX[waypointsX.length-3].x, waypointsX[waypointsX.length-2].x, t);
  let y1 = lerp(waypointsX[waypointsX.length-3].y, waypointsX[waypointsX.length-2].y, t);
  let x2 = lerp(waypointsX[waypointsX.length-2].x, waypointsX[waypointsX.length-1].x, t);
  let y2 = lerp(waypointsX[waypointsX.length-2].y, waypointsX[waypointsX.length-1].y, t);
  let x = lerp(x1, x2, t);
  let y = lerp(y1, y2, t);
  vertex(x, y);
}
*/
/*function load_data_from_JSON()
{
  hm =loadJSON(UserInput.json)
}*/

/*FUNCTION TO SEGMENT THE LINES IN THE GIVEN RATIO
function segment_the_lines(ax,bx,ay,by){

  strokeWeight(3)
  for(i = ax, j=bx;i<=ay,j<=by;i++,j++ )
  {
    print("function was called")
    point(i+10,j+10)
    if((i+10)>ay||j(+10)>by)
      print()
  }

}
*/