/**
 * @param elementID
 * @param finalX
 * @param finalY
 * @param interval
 * @returns {boolean}
 * @description:
 *     每当用户把鼠标悬停在某个链接上，不管上一次调用是否已经把图片移动到位，movement()函数都会被再次调用
 * 并试图把同一个元素移动到另一个地方去。于是，当用户在链接之间快速移动鼠标时，movement变量就会像一条拔河绳
 * 那样来回变化，而movement()函数就会试图把同一个元素同时移动到两个不同的地方去。如果用户移动鼠标的速度过快，
 * 积累在setTimeoutd队列里的事件就会导致动画效果差生滞后。
 *     为了消除动画滞后的现象，我可以用clearTimeout()函数清除积累在setTimeout队列里的事件：clearTimeOut(movement);
 * 可是，如果在还没有设置movement变量之前就执行这条语句，我将"制造"出一个错误.
 *     我不能使用一个局部变量：var movement = setTimeout(repeat, interval);
 * 如果我那样做了, clearTimeout()函数调用语句将无法工作 —— 因为局部变量movement在clearTimeout()函数的上下文里不存在。
 *      也就是说，我既不能使用一个全局变量，也不能使用一个局部变量。我需要一种介乎他们二者之间的东西，我需要一个只与
 * 正在移动的那个元素有关的变量。
 *      只与某个特定元素有关的变量是存在的。事实上，我们一直在使用它们。那就是"属性".
 */
function moveElement(elementID, finalX, finalY, interval) {
    if ( !document.getElementById) return false;
    if ( !document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);

    if (elem.movement) {
        clearTimeout(elem.movement);
    }

    if ( !elem.style.left) {
        elem.style.left = "0px";
    }
    if ( !elem.style.top) {
        elem.style.top = "0px";
    }

    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);

    if (xpos == finalX && ypos == finalY) {
        return true;
    }
    if (xpos < finalX) {
        var dist = Math.ceil((finalX - xpos) / 10);       // 算出元素与它的目的地距离多远
        xpos = xpos + dist;
    }
    if (xpos > finalX) {
        var dist = Math.ceil((xpos - finalX) / 10);
        xpos = xpos - dist;
    }

    if (ypos < finalY) {
        var dist = Math.ceil((finalY - ypos) / 10);
        ypos = ypos + dist;
    }
    if (ypos > finalY) {
        var dist = Math.ceil((ypos - finalY) / 10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID +"', " + finalX + ", " + finalY + " , " + interval + ")";
    elem.movement = setTimeout(repeat, interval);   // elem元素获得一恶搞名为movement的属性
}