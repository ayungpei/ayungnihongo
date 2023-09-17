const toggle = document.getElementById("toggle");
const nav  = document.getElementById("nav");

toggle.addEventListener("click", ()=>{
    nav.classList.toggle("active")
})

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active")
    })
});