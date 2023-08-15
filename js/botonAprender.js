// botonAprender.js
document.addEventListener("DOMContentLoaded", function() {
  const linkCta = document.getElementById("linkCta");
  
  linkCta.addEventListener("click", function(event) {
    event.preventDefault();
    
    const scrollToId = linkCta.getAttribute("data-scroll-to");
    const targetSection = document.getElementById(scrollToId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
