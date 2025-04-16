const testimonials = [
    {
      quote: "This platform has completely changed the way I learn. So intuitive and user-friendly!",
      author: "– Adaeze Okafor"
    },
    {
      quote: "Excellent support and amazing features. Highly recommended!",
      author: "– Chinedu Obasi"
    },
    {
      quote: "I feel more organized and productive since I started using this app.",
      author: "– Zainab Yusuf"
    },
    {
      quote: "The interview prep materials were on point! Helped me secure my first tech job.",
      author: "– Tunde Adebayo"
    },
    {
      quote: "I never knew online learning could be this practical and personalized. Kudos!",
      author: "– Aminat Salisu"
    },
    {
      quote: "The curriculum is so aligned with industry needs. I didn’t waste time on fluff.",
      author: "– Emeka Nwosu"
    },
    {
      quote: "What I love most is the sense of community and mentorship here.",
      author: "– Blessing Etim"
    },
    {
      quote: "I got 4 interview invites just a week after completing the resume module!",
      author: "– Ibrahim Bello"
    },
    {
      quote: "ACAD Connect gave me clarity and a solid portfolio that speaks for itself.",
      author: "– Kelechi Umeh"
    },
    {
      quote: "I keep recommending this to my friends. It’s honestly the best decision I made.",
      author: "– Yetunde Alabi"
    }
  ];
  
  
  let current = 0;
  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('author');
  
  function showTestimonial(index) {
    quoteEl.style.opacity = 0;
    authorEl.style.opacity = 0;
  
    setTimeout(() => {
      quoteEl.textContent = testimonials[index].quote;
      authorEl.textContent = testimonials[index].author;
  
      quoteEl.style.opacity = 1;
      authorEl.style.opacity = 1;
    }, 500);
  }
  
  function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }
  
  
  showTestimonial(current);
  
  
  setInterval(nextTestimonial, 5000);
  