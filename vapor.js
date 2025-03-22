document.addEventListener("DOMContentLoaded", function() {
    let foodImage = document.querySelector(".food-image");
    gsap.to(foodImage, {
        scale: 1.1,
        rotation: 360,
        x: "50vw",
        y: "30vh",
        opacity: 0.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    let vaporwareText = document.createElement("div");
    vaporwareText.classList.add("vaporware-text");
    vaporwareText.textContent = "Vaporwave Food!";
    gsap.top(vaporwareText, {
        opacity: 1,
        y: "50px",
        rotation: 20,
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        duration: 2
    });
    gsap.to(foodImage, {
        filter: "blur(5px)",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });
});