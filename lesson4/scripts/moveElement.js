
function moveElement(elementID, finalX, finalY, interval) {
    if ( !document.getElementById) return false;
    if ( !document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == finalX && ypos == finalY) {
        return true;
    }
    if (xpos < finalX) {
        xpos++;
    }
    if (xpos > finalX) {
        xpos--;
    }

    if (ypos < finalY) {
        ypos++;
    }
    if (ypos > finalY) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID +"', " + finalX + ", " + finalY + " , " + interval + ")";
    movement = setTimeout(repeat, interval);
}