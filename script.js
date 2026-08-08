gsap.registerPlugin(ScrollTrigger);

const path = document.querySelector("#drawingpath");
const length = path.getTotalLength();

path.style.fill = "none";
path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

gsap.to(path, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".gallery",
        start: "top 90%",
        end: "+=1600",
        scrub: true,
        // markers: true
    }
});

console.log("Yeh i didnt put all the pics into the images folder. so what");