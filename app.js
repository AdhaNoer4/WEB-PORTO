const text = ["Web Developer", "Freelancer", "Content Creator", "Web Designer", "Front-End Developer"];

let speed = 100;
const textElements = document.querySelector(".text-writer");

let textIndex = 0;
let charIndex = 0;

const typeWriter = () => {
  if (charIndex < text[textIndex].length) {
    textElements.innerHTML += text[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
};

const eraseText = () => {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % text.length;
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
};

window.onload = typeWriter;

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particle-js", "assets/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});

AOS.init();

// Conttact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  fetch("https://script.google.com/macros/s/AKfycbzFQ55ynciCV6u92-UXCqBcXn0gZBqyEmNdI80IJp-1Y5X_iLqiMcbiGj2OiRRZXI5pfQ/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
    mode: "no-cors",
  })
    .then(() => (document.getElementById("successModal").checked = true))
    .catch((error) => console.error("Error:", error));
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

//  JavaScript Smooth Scroll

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetPosition = document.getElementById(targetId).offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 💡 Atur durasi scroll dalam milidetik (1000ms = 1 detik)
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  });
});

// tech text change
const techinfo = document.getElementById("tech-info");
const tailwind = document.getElementById("tailwind");
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const react = document.getElementById("react");
const node = document.getElementById("node");
const vue = document.getElementById("vue");
const laravel = document.getElementById("laravel");
const typescript = document.getElementById("typescript");
const bootstrap = document.getElementById("bootstrap");

//function remove class
function removeClassesByPattern(element, pattern) {
  element.classList.forEach(cls => {
    if (cls.includes(pattern)) {
      element.classList.remove(cls);
    }
  });
}

//function change text
function changeTextTech(element, text, color) {
  element.addEventListener("mouseover", () => {
    techinfo.innerHTML = text;
    removeClassesByPattern(techinfo, "hover:text");
    techinfo.classList.add("hover:"+color);
  });
}

techinfo.addEventListener("click", () => {
  techinfo.innerHTML = "TECHNOLOGY";
  removeClassesByPattern(techinfo, "hover:text");
  techinfo.classList.add("hover:"+color);
});

  
  changeTextTech(tailwind, "Tailwind CSS", "text-blue-400");
  changeTextTech(html, "HTML", "text-red-400");
  changeTextTech(css, "CSS", "text-blue-400");
  changeTextTech(js, "JavaScript", "text-yellow-400");
  changeTextTech(react, "React JS", "text-blue-400");
  changeTextTech(node, "Node JS", "text-green-400");
  changeTextTech(vue, "Vue JS", "text-green-400");
  changeTextTech(laravel, "Laravel", "text-red-400");
  changeTextTech(typescript, "TypeScript", "text-blue-400");
  changeTextTech(bootstrap, "Bootstrap", "text-purple-400");
 