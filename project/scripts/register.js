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
      localStorage.removeItem("selectedCourse"); // clear after use
    }
  
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // You can replace this with actual email or backend handling later
      alert("Registration submitted successfully!");
      form.reset();
    });
  });
  