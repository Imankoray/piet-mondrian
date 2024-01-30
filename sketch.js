
function setup() {

    const possibleColors = ["#f3f3f3", "#fbe317","#0c7fbf","#000000", "#f50f0f" ];


    //size of each square
    const squareSize = 40;
    //number of cells of the grid
    const cellNumber = 10;
    //canvas size in pixels
    const canvasSize = squareSize * cellNumber;

    const row = squareSize
    const column = squareSize

    
        createCanvas(400, 400);
        background(220);

        let x = 0;
        let y = 0;

        while(y < canvasSize) {
            while (x < canvasSize){

              
                //choose random hex code from all the possible colours 
                const colorCode = random(possibleColors);
                //store color object in myColor
                const myColor = color(colorCode);
    
                fill(myColor)
    
               
    
                //calculate horizontal positon in pixels
                const x = row * squareSize;
    
                //calculate vertical position in pixels
                const y = column * squareSize; 
    
    
                //set width and height
                const width = squareSize;
              const height = squareSize;
    
                
    
                //rect (x, y, width, height)
                //x = position of the left of the square
                //y - postiion of the top of the square
                //s = size of the side of the square
                 rect(x, y, width, height);
    
    
    
            }
        }
    }
      
  
    
    function preload(){
    
      
    }