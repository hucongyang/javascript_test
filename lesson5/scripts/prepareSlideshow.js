
function prepareSlideshow() {
    if ( !document.getElementsByTagName) return false;
    if ( !document.getElementById) return false;

    if ( !document.getElementById("linklist")) return false;
    var list = document.getElementById("linklist");

    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");

    var img = document.createElement("img");
    img.setAttribute("src", "images/topics.gif");
    img.setAttribute("alt", "building blocks of web design");
    img.setAttribute("id", "preview");
    slideshow.appendChild(img);

    insertAfter(slideshow, list);

    if ( !document.getElementById("preview")) return false;

    var preview = document.getElementById("preview");
    preview.style.position = "absolute";

    var links = list.getElementsByTagName("a");

    links[0].onmouseover = function () {
        moveElement("preview", -100, 0, 10);
    };
    links[1].onmouseover = function () {
        moveElement("preview", -200, 0, 10);
    };
    links[2].onmouseover = function () {
        moveElement("preview", -300, 0, 10);
    };
    console.log(links[0].onmouseover);
}

addLoadEvent5(prepareSlideshow);