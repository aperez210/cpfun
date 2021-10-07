
function button(){
        var e = document.getElementById("tilt");
        e.rotate(180);
        e.innerHTML = "WHY DID YOU DO THIS?!";
}
Object.prototype.rotate = function(d)
{
    var s = "rotate(" + d + "deg)";
    if (this.style) { // regular DOM Object
        this.style.MozTransform = s
        this.style.WebkitTransform = s;
        this.style.OTransform = s;
        this.style.transform = s;
    } else if (this.css) { // JQuery Object
        this.css("-moz-transform", s);
        this.css("-webkit-transform", s);
        this.css("-0-transform", s);
        this.css("transform", s);
    }
    this.setAttribute("rotation", d);
}

document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);
function theDomHasLoaded(e) {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    document.getElementById("date").innerHTML = (curr_month + "/" + curr_date);
}
