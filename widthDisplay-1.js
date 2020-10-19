
    function findViewPort(x, y){
        var viewport = ( 2 * x ) + y;
        return viewport;
        }
           
    function findX(y, viewport) {
        var x = (-y + viewport) / 2;
        return x;
        }
        
    function findY(x, viewport) {
        var y =  (-2 * x) + viewport;

        return y;
        }

        console.log("Viewport = " + findViewPort(600,87))
        console.log("X = " + findX(87, 1287));
        console.log("Y = " + findY(600, 1287));

