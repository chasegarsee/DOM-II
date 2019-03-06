// Your code goes here

const mainNav = document.querySelectorAll("a");

mainNav[0].addEventListener("mouseover", function(e) {
  mainNav[0].style.backgroundColor = "red";
  //   e.stopPropagation();
});

mainNav[1].addEventListener("mouseover", function(e) {
  mainNav[1].style.backgroundColor = "aqua";
  //   e.stopPropagation();
});

mainNav[2].addEventListener("mouseover", function(e) {
  mainNav[2].style.backgroundColor = "blueviolet ";
  //   e.stopPropagation();
});

mainNav[3].addEventListener("mouseover", function(e) {
  mainNav[3].style.backgroundColor = "pink";
  //   e.stopPropagation();
});

const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("click", function() {
  console.log("fired");
  TweenMax.to(".logo-heading", 2, { x: -200, ease: Bounce.easeOut });
});

let hTwos = document.querySelectorAll("h2");
console.log(hTwos);
hTwos[0].addEventListener("click", function(e) {
  hTwos[0].style.color = "red";
  //   TweenMax.to(".h-twos", 2, { color: "red" });
});

const imgBlur = document.querySelector(".img-content");
imgBlur.addEventListener("mouseover", function(e) {
  e.target.style.scale = "200";
  //   e.stopPropagation();
});

imgBlur.addEventListener("mouseleave", function(e) {
  e.target.style.opacity = 0.33;
  e.stopPropagation();
});

const navLink = document.querySelector(".nav-link");
navLink.addEventListener("click", function(e) {
  TweenMax.staggerFrom(
    ".nav-link",
    0.5,
    {
      opacity: 0,
      y: 100,
      rotation: 360,
      scale: 2
    },
    0.04
  );
});

const busImage = document.querySelector(".bus-image");
busImage.addEventListener("mouseover", function(e) {
  TweenMax.staggerFrom(".bus-image", 1, {
    opacity: 0,
    scale: -0.1,
    delay: 0.1
  });
  e.stopPropagation();
});

const pTag = document.querySelector("p");
pTag.addEventListener("dblclick", function() {
  pTag.style.backgroundColor = "pink";
});

window.addEventListener("resize", function() {
  console.log(
    "I dont really know what to do with this window. so ill just console.log this message."
  );
});

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
}

window.addEventListener("scroll", function(e) {
  console.log(
    "yet another thing i dont know what to do with. so here is a string of dots ................. lol"
  );
});

function logSelection(event) {
  const log = document.getElementById("input-text");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  console.log(`You selected: ${selection}`);
}

const input = document.querySelector("input");
input.addEventListener("select", logSelection);
//
//
//

const firstName = document.querySelector(".click-me");
firstName.addEventListener("keydown", function(event) {
  console.log(
    `Im stealing every click you make starting with =======> ${event.key}`
  );
});
window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
});

//
//
//

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {}, false);

document.addEventListener(
  "dragstart",
  function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function(event) {
    // reset the transparency
    event.target.style.opacity = "";
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function(event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
      event.target.style.background = "purple";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);

//
//
//
//
//
//
//
//
//

// TWEEN MAX EXTRAS \\
