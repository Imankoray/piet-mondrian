
function setup() {

    //size of each square
    const squareSize = 40;
    //number of cells of the grid
    const cellNumber = 10;
    //canvas size in pixels
    const canvasSize = squareSize * cellNumber;

    
        createCanvas(400, 400);
        background(220);
    
        for(let row = 0; row < cellNumber; row++) {
            for(let column = 0; column < cellNumber; column++) {
                const red = random (255);
                const green = random(255);
                const blue = random(255);
    
                const myColor = color(red, green, blue);
    
                fill(myColor)
    
               
    
                //calculate horizontal positon in pixels
                const x = row * squareSize;
    
                //calculate vertical position in pixels
                const y = column * squareSize; 
    
    
                //set width and height
                const width = squareSize;
              const height = squareSize;
    
                
    
                //square (x, y, r)
                //x = position of the left of the square
                //y - postiion of the top of the square
                //s = size of the side of the square
                 square(x, y, width);
    
    
    
            }
        }
    }
      
  
    
    function preload(){
    
      
    }