const projects = document.querySelectorAll(".info-project");

window.addEventListener("scroll", function () {
  for (let i = 0; i < projects.length; i++) {
    const position = projects[i].getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      projects[i].classList.add("active");
    }
  }
});
const icon = document.querySelectorAll(".icon-skill img");

window.addEventListener("scroll", function () {
  for (let i = 0; i < icon.length; i++) {
    const position = icon[i].getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      icon[i].classList.add("active");
    }
  }
});
const imgProject = document.querySelectorAll(".recent-project img");

window.addEventListener("scroll", function () {
  for (let i = 0; i < imgProject.length; i++) {
    const position = imgProject[i].getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      imgProject[i].classList.add("active");
    }
  }
});

const lenis = new Lenis({
  duration: 5,
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

var headerH1 = document.querySelector(".header h1");
headerH1.classList.add("active");
var headerSpan = document.querySelectorAll(".header span");
for (let i = 0; i < headerSpan.length; i++) {
  headerSpan[i].classList.add("active");
}
var headerAvatar = document.querySelector(".header .avatar");
headerAvatar.classList.add("active");
const martWork = document.querySelector(".mart-work");

window.addEventListener("scroll", function () {
  const position = martWork.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {
    martWork.classList.add("active");
  }
});
setInterval(function(){
    let btn = document.querySelector(".header button");

    btn.style.transform = "translateY(-5px)";

    setTimeout(function(){
        btn.style.transform = "translateY(0px)";
    },300);

},1000);