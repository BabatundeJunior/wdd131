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

function saveCourse(title) {
  let saved = JSON.parse(localStorage.getItem('savedCourses')) || [];
  if (!saved.includes(title)) {
    saved.push(title);
    localStorage.setItem('savedCourses', JSON.stringify(saved));
    alert(`Saved "${title}" for later!`);
  } else {
    alert(`"${title}" is already saved.`);
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

  card.querySelector('.save-btn').addEventListener('click', () => saveCourse(course.title));
  courseGrid.appendChild(card);
});
