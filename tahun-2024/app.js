const text = [
    "Web Developer",
    "Gamer",
    "Content Creator",
    "Web Designer",
    "Front-End Developer"
];

let speed = 100;
const textElements = document.querySelector(".text-writer");

let textIndex = 0;
let charIndex = 0;

const typeWriter = ()=>{
    if (charIndex < text[textIndex].length) {
        textElements.innerHTML += text[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else{
        setTimeout(eraseText, 1000);
    }

}

const eraseText = ()=>{
    if (textElements.innerHTML.length >0 ) {
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    } else{
        textIndex = (textIndex + 1)% text.length;
        charIndex = 0;
        setTimeout(typeWriter,500);
    }
}

window.onload = typeWriter

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particle-js', 'assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

  