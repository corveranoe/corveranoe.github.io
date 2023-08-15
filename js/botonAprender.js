// script.js
document.addEventListener("DOMContentLoaded", function() {
  const ctaLink = document.getElementById("ctaLink");
  
  ctaLink.addEventListener("click", function(event) {
    event.preventDefault();
    
    const targetElement = document.querySelector(ctaLink.getAttribute("href"));
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  });
});
