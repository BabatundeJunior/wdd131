const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const nav= document.querySelectorAll(".navigation li a");

// Hamburger Script
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
// Collapse menu when clicking any menu item
nav.forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        hamButton.classList.remove("open");
    });
}); 

  
  // Event listeners for menu items
  navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          filterTemples(this.textContent);
      });
  });