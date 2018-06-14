
var EventOnLoad = {

    addOnLoad: function (fun) {
        var oldLoad = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = fun;
        } else {
            window.onload = function () {
                oldLoad();
                fun();
            }
        }
    }
};