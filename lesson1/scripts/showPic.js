
function prepareGallery() {
    if ( !document.getElementById) {
        return false;
    }
    if ( !document.getElementsByTagName) {
        return false;
    }
    if ( !document.getElementById("imageGallery")) {
        return false;
    }

    var gallery = document.getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this);
        }
    }
}

function showPic(whichpic) {
    if ( !document.getElementById("placeholder")) {
        return true;
    }
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") {
        return true;
    }

    placeholder.setAttribute("src", source);
    if ( !document.getElementById("description")) {
        return false;
    }
    var title = '';
    if ( whichpic.getAttribute("title")) {
        title = whichpic.getAttribute("title");
    }
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = title;
    }
    return false;
}

// window.onload = prepareGallery;

addOldEvent(prepareGallery);
addOldEvent(prepareLink);

function addOldEvent(fun) {
    var oldonLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = fun;
    } else {
        window.onload = function () {
            oldonLoad();
            fun();
        }
    }
}


function popUp(windUrl) {
    window.open(windUrl, "popUp", "weight=300, height=200");
}

function prepareLink() {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}