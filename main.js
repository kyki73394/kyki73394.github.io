//header change via w3 schools (edited from header shrink)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
 document.getElementById("allnav").style.color = "black";

} else if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
  document.getElementById("allnav").style.color = "black";

} else {
    document.getElementById("allnav").style.color = "white";
  }
}
