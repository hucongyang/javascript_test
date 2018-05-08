
function addLoadEvent(func) {
    var oldLoadEvent = window.onload;
    if ( typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldLoadEvent();
            func();
        }
    }
}