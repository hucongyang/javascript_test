/**
 * 每当你编写出一个将在文档加载完毕时得到执行的函数，
 * 你否需要用addLoadEvent()函数把它绑定到window.onload事件处理函数上
 * @param func
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

/**
 * newElement 插入到目标元素targetElement的下方
 * PS：js 自带函数 insertBefore() 将元素插入到targetElement的上方
 * @param newElement
 * @param targetElement
 */
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

/**
 * 向element元素添加追加class
 * @param element
 * @param value
 */
function addClass(element, value) {
    if ( !element.className) {
        element.className = value;
    } else {
        var newClassName = element.className;
        newClassName += " " + value;
        element.className = newClassName;
    }
}