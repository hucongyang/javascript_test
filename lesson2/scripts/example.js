
function addTest() {
    var testdiv = document.getElementById("testdiv");
    var para = document.createElement("p");
    testdiv.appendChild(para);
    var text1 = document.createTextNode("this is ");
    para.appendChild(text1);
    var em = document.createElement("em");
    para.appendChild(em);
    var text2 = document.createTextNode("my ");
    em.appendChild(text2);
    var text3 = document.createTextNode("content");
    para.appendChild(text3);
}

addOnLoadEvent(addTest);

function addOnLoadEvent(fuc) {
    var oldOnLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = fuc;
    } else {
        window.onload = function () {
            oldOnLoad();
            fuc();
        }
    }
}