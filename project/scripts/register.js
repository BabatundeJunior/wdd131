document.addEventListener("DOMContentLoaded", () => {
    const courseSelect = document.getElementById("course");
  
    const selectedCourse = localStorage.getItem("selectedCourse");
    if (selectedCourse) {
      for (let option of courseSelect.options) {
        if (option.value === selectedCourse) {
          option.selected = true;
          break;
        }
      }
      localStorage.removeItem("selectedCourse"); 
    }
  
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      alert("Registration submitted successfully!");
      form.reset();
    });
  });
  