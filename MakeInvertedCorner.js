/**
 * Transforms a div container into an inverted corner shape.
 * This function modifies the container and creates a polygon which follows the shape of an inverted circle 
 * based on the number of points provided.
 *
 * @param {Object} container - The container object to be modified
 * @param {String} cornerName - Name of the corner to be inverted (e.g., "top-left", "bottom-right")
 * @param {Number} numberOfPoints - The number of points for the inverted corner shape
 */
function turnIntoInvertedCorner(container, whichCorner, numberOfPoints) {
    console.log(container);
    var points = [];
    var sideLenght = 100; //SideLength is set to 100% 
    var angle_step_size = 90/(numberOfPoints+1);
    points.push("0% 0%"); //Create the corner point

    //Iterate through the angle-sizes to create all the points
    for (var current_angle = 90; current_angle >=0; current_angle-=angle_step_size) {
        let current_angle_bogenmass = current_angle * Math.PI / 180;

        //Calculate the coordinates x and y for the point which determined by the current angle
        var x = sideLenght-(sideLenght*Math.sin(current_angle_bogenmass))
        var y = sideLenght-(sideLenght*Math.cos(current_angle_bogenmass))
        points.push(x + '% ' + y + '%');
    }

    //Apply the polygon with all the points to the container
    var polygonPoints = points.join(', ');
    container.style.clipPath = "polygon(" + polygonPoints + ")";

    //After setting the shape, rotate the point for getting the right corner
    switch (whichCorner){
        case "top-left":
            break;
        case "top-right":
            container.style.transform = "rotate(90deg)";
            break;
        case "bottom-left":            
            container.style.transform = "rotate(270deg)";
            break;
        case "bottom-right":
            container.style.transform = "rotate(180deg)";
            break;
    }

}

export{turnIntoInvertedCorner}
