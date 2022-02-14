var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        // This declares to variables circle and circles
        var circle;
        var circles = [];

        // TODO 2 : Create a function that draws a circle 
        // This creates the function so the loops later on are able to create circles to draw
        function drawCircle(){
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas, 10, 10);
            view.addChild(circle);
            circles.push(circle);
        }

        // TODO 3 / 8 : Call the drawCircle() function 
        // This call the drawCircle function 100 times so it is drawing 100 circles 
        for(var i = 0; i <= 100; i++){
            drawCircle();
        }
        // Draws the cirlces manually
        /*
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        */
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
            // Has the circles position update manually so it moves
            /*
            physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
            */
        
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            /*
             // Has the circles position update manually so it moves
            game.checkCirclePosition(circles[0]);
            game.checkCirclePosition(circles[1]);
            game.checkCirclePosition(circles[2]);
            game.checkCirclePosition(circles[3]);
            game.checkCirclePosition(circles[4]);
            */

            // TODO 9 : Iterate over the array
            // loop to make the circles automaticall move this allows every circle 0 to 100 move 
           for(var k = 0; k <= circles.length -1; k++){
            physikz.updatePosition(circles[k]);
            game.checkCirclePosition(circles[k]);
           }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            // This makes sure that the circles go through one side and out the other when they go off the screen
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            if ( circle.x < 0 ) {
                circle.x = canvas.width;
            }
            if ( circle.y > canvas.height ) {
                circle.y = 0;
            }
            if ( circle.y < 0 ) {
                circle.y = canvas.height;
            }
            // TODO 7 : YOUR CODE STARTS HERE //////////////////////
            




            // YOUR TODO 7 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
