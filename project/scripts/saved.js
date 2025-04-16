const savedCoursesContainer = document.getElementById('savedCourses');

const allCourses = [
  { title: "Data Science and Machine Learning", image: "images/science.webp" },
  { title: "Full Stack Development", image: "images/web.webp" },
  { title: "Forex/Crypto Trading", image: "images/crypto.webp" },
  { title: "Graphics Design", image: "images/graphics.webp" },
  { title: "Video Editing", image: "images/video.webp" },
  { title: "Electronic Publishing", image: "images/publishing.webp" },
  { title: "Foreign Languages", image: "images/language.webp" },
  { title: "JAMB/WAEC Prep", image: "images/waec.jpg" },
  { title: "Digital Marketing", image: "images/digitalmarket.webp" },
  { title: "Shopify", image: "images/shopify.webp" },
  { title: "Dropshipping", image: "images/dropship.webp" }
];

let savedTitles = JSON.parse(localStorage.getItem('savedCourses')) || [];

function removeSavedCourse(title) {
  savedTitles = savedTitles.filter(saved => saved !== title);
  localStorage.setItem('savedCourses', JSON.stringify(savedTitles));
  location.reload(); 
}

if (savedTitles.length === 0) {
  savedCoursesContainer.innerHTML = "<p>No saved courses yet.</p>";
} else {
  const savedItems = allCourses.filter(course => savedTitles.includes(course.title));

  savedItems.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <img src="${course.image}" alt="${course.title}" class="course-img" loading="lazy" onerror="this.src='images/placeholder.jpg';">
      <h3>${course.title}</h3>
      <a href="register.html" class="enroll-btn">Enroll Now</a>
      <button class="remove-btn">Remove</button>
    `;

    // to load selected course in enrolment  
  const enrollBtn = card.querySelector('.enroll-btn');
  enrollBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link behavior for a moment
    localStorage.setItem('selectedCourse', course.title);
    window.location.href = enrollBtn.href; 
  });

    card.querySelector('.remove-btn').addEventListener('click', () => removeSavedCourse(course.title));
    savedCoursesContainer.appendChild(card);
  });
}
