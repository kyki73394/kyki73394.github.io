//header change via w3 schools (edited from header shrink)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
  const halfHeight = height / 2;

  if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
    document.getElementById("nav_logo").style.color = "black";
    document.getElementById("home_header").style.display = "none";

  } else {
    document.getElementById("nav_logo").style.color = "white";
    document.getElementById("home_header").style.display = "block";
  }
}

//edited from toggle Dark Mode from w3 schools
function toggleUX() {
  var elem = document.getElementById("box_code");
  elem.classList.toggle("box_off");

  var elem = document.getElementById("ux_btn");
  elem.classList.toggle("btn_change");

  var elem = document.getElementById("code_btn");
  elem.classList.toggle("box_off");
}

function toggleCode() {
  var elem = document.getElementById("box_ux");
  elem.classList.toggle("box_off");

  var elem = document.getElementById("code_btn");
  elem.classList.toggle("btn_change");

  var elem = document.getElementById("ux_btn");
  elem.classList.toggle("box_off");
}

// animation referenced from https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('anim_proj_home');
    }
  });
});

observer.observe(document.querySelector('.proj_label'));
observer.observe(document.querySelector('.home_proj_img'));
