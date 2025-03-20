const menu = document.getElementById("menu");
const navLinks = document.querySelector("ul");
const menuBtnIcon = document.querySelector('i');

menu.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"

    );
})
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

var typed = new Typed(".ani-text",{
    strings:["Civil Engineering","Contractor","Site Engineer","Project Manager"],
    typeSpeed:50,
    backSpeed:50,
    delay:1000,
    loop:true
});

const experienceBtn= document.querySelectorAll(".experience-btn");

experienceBtn.forEach((btn,idx)=>{
    btn.addEventListener("click",()=>{
        const detailsBox = document.querySelectorAll(".details-box");

        experienceBtn.forEach(btn=>{
           btn.classList.remove("active"); 
        });
        btn.classList.add("active");

        detailsBox.forEach(detail=>{
            detail.classList.remove("active"); 
        });

        detailsBox[idx].classList.add("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const jobs = document.querySelectorAll(".job");

    jobs.forEach(job => {
        job.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});


const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    loop: true
  });
  
  sr.reveal('.home h2', { origin: 'top', delay: 200 });
  sr.reveal('.home h3', { origin: 'top', delay: 300 });
  sr.reveal('.ani-text', { origin: 'left', delay: 400 });
  sr.reveal('.section-des', { origin: 'bottom', delay: 500 });
  sr.reveal('.btn', { origin: 'bottom', delay: 600 });
  sr.reveal('.home-image', { origin: 'right', delay: 700 });
  
  sr.reveal('.about-content h2', { origin: 'top', delay: 200 });
  sr.reveal('.about-content .section-des', { origin: 'bottom', delay: 300 });
  sr.reveal('.btns', { origin: 'bottom', delay: 400 });
  sr.reveal('.about-image', { origin: 'left', delay: 500 });
  
//   sr.reveal('.experience-box h2', { origin: 'top', delay: 200 });
//   sr.reveal('.experience-btn', { origin: 'bottom', delay: 300 });
//   sr.reveal('.skills-item', { origin: 'left', delay: 400, interval: 200 });
//   sr.reveal('.Qualifications-item', { origin: 'right', delay: 400, interval: 200 });
  
  sr.reveal('.mywork h2', { origin: 'top', delay: 200 });
  sr.reveal('.job', { origin: 'bottom', delay: 300, interval: 200 });
  
  sr.reveal('.contact h2', { origin: 'top', delay: 200 });
  sr.reveal('.input-box', { origin: 'bottom', delay: 300 });
  sr.reveal('.textarea-field', { origin: 'bottom', delay: 400 });