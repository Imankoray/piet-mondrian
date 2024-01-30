
function setup() {

    const possibleColors = ["#f3f3f3", "#fbe317", "#0c7fbf", "#000000", "#f50f0f"];


    //size of each square
    const squareSize = 40;
    //number of cells of the grid
    const cellNumber = 10;
    //canvas size in pixels
    const canvasSize = squareSize * cellNumber;
    //list of possible cell sizes in pixels - based on square size 
    const possibleCellSizes = [squareSize, 2 * squareSize, 3 * squareSize];

    const width = squareSize;
    const height = squareSize;

    const borderColor = color("#404040");
    
    createCanvas(canvasSize, canvasSize);
    
    background(220);


    let x = 0;
    let y = 0;

    while (y < canvasSize) {

          //generate a random width from the possible cell sizes
          const actualHeight = random(possibleCellSizes);

        x = 0

        const colorCode  = random(possibleColors);
        const myColor = color(colorCode);

        strokeWeight(10);
        stroke(borderColor);

        let actualWidth = random (possibleCellSizes);
        if(x + actualWidth > canvasSize) actualWidth = canvasSize - x;


        while (x < canvasSize) {


            //choose random hex code from all the possible colours 
            const colorCode = random(possibleColors);
            //store color object in myColor
            const myColor = color(colorCode);

            fill(myColor)

            const actualWidth = random(possibleCellSizes);

          



            //rect (x, y, width, height)
            //x = position of the left of the square
            //y - postiion of the top of the square
            //s = size of the side of the square
            rect(x, y, actualWidth, actualHeight);

            //update x
            x = x + actualWidth;

        }
        
        //update y
        y = y + actualHeight;
    }
}



function preload() {


}