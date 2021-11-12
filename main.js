//header change via w3 schools (edited from header shrink)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
 document.getElementById("nav_proj").style.color = "black";
 document.getElementById("nav_extra").style.color = "black";
 document.getElementById("nav_abt").style.color = "black";
 document.getElementById("nav_logo").style.color = "black";

} else if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
  document.getElementById("nav_proj").style.color = "black";
  document.getElementById("nav_extra").style.color = "black";
  document.getElementById("nav_abt").style.color = "black";
  document.getElementById("nav_logo").style.color = "black";

} else {
    document.getElementById("nav_proj").style.color = "white";
    document.getElementById("nav_extra").style.color = "white";
    document.getElementById("nav_abt").style.color = "white";
    document.getElementById("nav_logo").style.color = "white";

  }
}

//edited from toggle Dark Mode from w3 schools
function toggleUX() {
  var elem = document.getElementById("box_ux");
  elem.classList.toggle("box_off");
}

function toggleCode() {
  var elem = document.getElementById("box_code");
  elem.classList.toggle("box_off");
}
