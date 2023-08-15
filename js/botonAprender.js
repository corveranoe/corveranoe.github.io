// script.js
document.addEventListener("DOMContentLoaded", function() {
  const ctaLink = document.getElementById("ctaLink");
  
  ctaLink.addEventListener("click", function(event) {
    event.preventDefault();
    
    const nextSection = ctaLink.nextElementSibling;
    
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth"
      });
    }
  });
});
