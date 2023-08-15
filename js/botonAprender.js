// botonAprender.js
document.addEventListener("DOMContentLoaded", function() {
  const linkCta = document.getElementById("linkCta");
  
  linkCta.addEventListener("click", function(event) {
    event.preventDefault();
    
    const aboutSection = document.getElementById("aboutSection");
    
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth"
      });
    }
  });
});
