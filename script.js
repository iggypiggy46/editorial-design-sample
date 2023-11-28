gsap.registerPlugin(ScrollTrigger);

// defaults
ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

// Panel One
gsap.to(".one h1", {
  scrollTrigger: "one",
  color: "blue",
  duration: 5,
  rotate: 0,
  opacity: 1
});

// Panel Two
gsap.to(".two", {
  scrollTrigger: "two"
});

// Panel Three
gsap.to(".three p", {
  scrollTrigger: "three",
  letterSpacing: 0,
  duration: 7,
  rotate: 720
});

// Panel Four
gsap.to(".four", {
  scrollTrigger: "four"
});

// Panel Five
gsap.to(".five", {
  scrollTrigger: "five"
});

gsap.to(".six", {
  scrollTrigger: "six",
  translateX: 0,
  duration: 5
});