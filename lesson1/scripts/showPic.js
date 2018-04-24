/**
 * 函数负责处理有关的事件。这个函数将遍历清单里的每个链接，
 * 并给它加上一个onclick事件处理函数。当用户点击这些链接
 * 中的某一个时，就会调用showPic()函数
 * @returns {boolean}
 */
function prepareGallery() {
    if ( !document.getElementById) return false;
    if ( !document.getElementsByTagName) return false;
    if ( !document.getElementById("imageGallery")) return false;

    var gallery = document.getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this);
        }
    }
}

/**
 * 当用户点击了图片清单里的某个链接时，showPic()函数将把"占位符"
 * 图片切换为用户想要查看的图片
 * @param whichpic
 * @returns {boolean}
 */
function showPic(whichpic) {
    if ( !document.getElementById("placeholder")) return true;

    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return true;

    placeholder.setAttribute("src", source);
    if ( !document.getElementById("description")) return false;

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

/**
 * 函数负责创建一个img元素和一个p元素，这个函数将把这些新创建的元素
 * 插入到gallery.html文档的节点树里，当然，新元素会被插入到imagegallery清单的后面
 * @returns {boolean}
 */
function preparePlaceholder() {
    // 测试检查
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById('imageGallery')) return false;

    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/e.jpg");
    placeholder.setAttribute("alt", "my image galley");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("choose a image");
    description.appendChild(desctext);

    var gallery = document.getElementById("imageGallery");
    // gallery.parentNode.insertBefore(placeholder, gallery);   // 先创建的元素插入到图片清单的前面
    // gallery.parentNode.insertBefore(description, gallery);
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

// 有用的函数: 新创建的元素插入到图片清单的后面
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
// addLoadEvent(prepareLink);

// window.onload = preparePlaceholder;

// 有用的函数
/**
 * 为了激活这些功能，用addLoadEvent()函数把preparePlaceholder() 和 prepareGallery()
 * 函数绑定在了onload事件处理函数上
 * @param fun
 */
function addLoadEvent(fun) {
    var oldOnLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = fun;
    } else {
        window.onload = function () {
            oldOnLoad();
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