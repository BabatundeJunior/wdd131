const courses = [
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
const courseGrid = document.getElementById('courseGrid');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const popupClose = document.querySelector('.popup-close');

function showPopup(message) {
  popupMessage.textContent = message;
  popup.style.display = 'block'; // Show the popup
  
  // Hide the popup after 3 seconds
  setTimeout(() => {
    popup.style.display = 'none';
  }, 2000); // 3000ms = 3 seconds
}

function saveCourse(title) {
  let saved = JSON.parse(localStorage.getItem('savedCourses')) || [];
  if (!saved.includes(title)) {
    saved.push(title);
    localStorage.setItem('savedCourses', JSON.stringify(saved));
    showPopup(`Saved "${title}" for later!`); // Show popup with success message
  } else {
    showPopup(`"${title}" is already saved.`); // Show popup if the course is already saved
  }
}

courses.forEach(course => {
  const card = document.createElement('div');
  card.className = 'course-card';
  card.innerHTML = `
    <img src="${course.image}" alt="${course.title}" class="course-img" loading="lazy" onerror="this.src='images/placeholder.jpg';">
    <h3>${course.title}</h3>
    <a href="register.html" class="enroll-btn">Enroll Now</a>
    <button class="save-btn">Save for Later</button>
  `;

  // Save course when "Save for Later" is clicked
  card.querySelector('.save-btn').addEventListener('click', () => saveCourse(course.title));

  // Set course in localStorage when "Enroll Now" is clicked
  const enrollBtn = card.querySelector('.enroll-btn');
  enrollBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link behavior for a moment
    localStorage.setItem('selectedCourse', course.title);
    window.location.href = enrollBtn.href; // Navigate to the enroll page
  });

  courseGrid.appendChild(card);
});

// Close popup when close button is clicked
popupClose.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the popup
});

// Close the popup if the user clicks outside the popup content
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none'; // Hide the popup if clicked outside
  }
});
