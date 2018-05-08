
function stripeTables() {
    if ( !document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
        var odd = false;
        var rows = tables[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++) {
            if (odd == true) {
                // rows[j].style.backgroundColor = "#ffc";
                // rows[j].className += " intro";    // 追加class intro前面是空格
                // rows[j].className = "intro";   // 替换class
                addClass(rows[j], "odd");
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

function highlightRows() {
    if ( !document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function () {
            this.style.fontWeight =  "bold";
        }
        rows[i].onmouseout = function () {
            this.style.fontWeight = "normal";
        }
    }
}

/**
 * 需要给某个元素追加新的class设置值时，
 * 1. className属性的值是否为null
 * 2. 如果是，把新的class设置值直接赋值给className属性
 * 3. 如果不是，把一个空格和新的class设置值追加到className属性上去
 */
function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);