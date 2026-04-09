import { NeatGradient } from "https://esm.sh/@firecms/neat";

const config = {
  colors: [
    {
      color: "#FF3087",
      enabled: true,
    },
    {
      color: "#1B36A6",
      enabled: true,
    },
    {
      color: "#00D3FF",
      enabled: true,
    },
    {
      color: "#6D3BFF",
      enabled: true,
    },
    {
      color: "#492E52",
      enabled: true,
    },
  ],
  speed: 3.5,
  horizontalPressure: 3,
  verticalPressure: 5,
  waveFrequencyX: 8,
  waveFrequencyY: 1,
  waveAmplitude: 5,
  shadows: 3,
  highlights: 2,
  colorBrightness: 1,
  colorSaturation: 7,
  wireframe: false,
  colorBlending: 7,
  backgroundColor: "#003FFF",
  backgroundAlpha: 1,
  grainScale: 2,
  grainSparsity: 0,
  grainIntensity: 0.5,
  grainSpeed: 1,
  resolution: 1.2,
  yOffset: 2045.300048828125,
  yOffsetWaveMultiplier: 3,
  yOffsetColorMultiplier: 3.3,
  yOffsetFlowMultiplier: 3.8,
  flowDistortionA: 5,
  flowDistortionB: 7.7,
  flowScale: 2.6,
  flowEase: 0.36,
  flowEnabled: true,
  enableProceduralTexture: false,
  textureVoidLikelihood: 0.22,
  textureVoidWidthMin: 120,
  textureVoidWidthMax: 150,
  textureBandDensity: 1.9,
  textureColorBlending: 0.12,
  textureSeed: 333,
  textureEase: 0.58,
  proceduralBackgroundColor: "#D0DBFB",
  textureShapeTriangles: 20,
  textureShapeCircles: 15,
  textureShapeBars: 15,
  textureShapeSquiggles: 10,
  domainWarpEnabled: false,
  domainWarpIntensity: 0,
  domainWarpScale: 3,
  vignetteIntensity: 0,
  vignetteRadius: 0.8,
  fresnelEnabled: false,
  fresnelPower: 2,
  fresnelIntensity: 0.5,
  fresnelColor: "#FFFFFF",
  iridescenceEnabled: false,
  iridescenceIntensity: 0.5,
  iridescenceSpeed: 1,
  bloomIntensity: 0,
  bloomThreshold: 0.7,
  chromaticAberration: 0,
};

const gradientRef = document.getElementById("gradient");
let gradient;

if (gradientRef) {
  gradient = new NeatGradient({
    ref: gradientRef,
    ...config,
  });
}

window.addEventListener("scroll", () => {
  if (gradient) {
    gradient.yOffset = window.scrollY;
  }
});

const projects = document.querySelectorAll(".info-project");

window.addEventListener("scroll", function () {
  for (let i = 0; i < projects.length; i++) {
    const position = projects[i].getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      projects[i].classList.add("active");
    } else {
      projects[i].classList.remove("active");
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
    } else {
      icon[i].classList.remove("active");
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
    } else {
      imgProject[i].classList.remove("active");
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
  } else {
    martWork.classList.remove("active");
  }
});
setInterval(function () {
  let btn = document.querySelector(".header button");

  btn.style.transform = "translateY(-5px)";

  setTimeout(function () {
    btn.style.transform = "translateY(0px)";
  }, 300);
}, 1000);

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  index++;
  if (index > slides.length) {
    index = 1;
  }

  slides[index - 1].style.display = "block";

  setTimeout(showSlide, 10000);
}

showSlide();

const myCv = document.querySelector(".my-cv");

window.addEventListener("scroll", function () {
  const positionTop = myCv.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (positionTop < screenHeight - 100) {
    myCv.classList.add("active");
  } else {
    myCv.classList.remove("active");
  }
});
