//header change via w3 schools (edited from header shrink)
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//
//   const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
//   const halfHeight = height / 2;
//
//   if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
//     document.getElementById("nav_logo").style.color = "black";
//     document.getElementById("home_header").style.display = "none";
//
//   } else {
//     document.getElementById("nav_logo").style.color = "white";
//     document.getElementById("home_header").style.display = "block";
//   }
// }

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

//projects page animation to bold title
//referenced from Sidebar bullet navigation by Mydrax on CodePen
const indicators = document.querySelectorAll(".indicator");
const sections = document.querySelectorAll("section");

const resetCurrentActiveIndicator = () => {
  const activeIndicator = document.querySelector(".active");
  activeIndicator.classList.remove("active");
  console.log('removed active class');
};

const onSectionLeavesViewport = (section) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('in section');
          resetCurrentActiveIndicator();
          const element = entry.target;
          const indicator = document.querySelector(`a[href='#${element.id}']`);
          console.log(indicator);
          indicator.classList.add("active");
          console.log('add active class');
          return;
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.2
    }
  );
  observer.observe(section);
};

// indicators.forEach((indicator) => {
//   indicator.addEventListener("click", function (event) {
//     event.preventDefault();
//     document
//       .querySelector(this.getAttribute("href"))
//       .scrollIntoView({ behavior: "smooth" });
//     resetCurrentActiveIndicator();
//     this.classList.add("active");
//   });
// });

sections.forEach(onSectionLeavesViewport);
