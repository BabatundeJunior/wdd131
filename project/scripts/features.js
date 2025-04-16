const features = [
    {
      title: "🎓 Modern Curriculum",
      description: "Created to teach you exactly what the industry needs today.",
    },
    {
      title: "💼 Interview Prep",
      description: "Tailored coaching for each company you're applying to.",
    },
    {
      title: "📝 Resume Writing",
      description: "Professional guidance to help your resume stand out.",
    },
    {
      title: "🌍 Job Outsourcing",
      description: "We help you find jobs globally, not just locally.",
    },
    {
      title: "🧰 Portfolio Building",
      description: "Craft a project portfolio that shows real skills and results.",
    },
    {
      title: "🔁 Unlimited Interviews",
      description: "Keep practicing with mock interviews until you land the job.",
    },
  ];

  const container = document.getElementById("featureContainer");

  features.forEach(feature => {
    const card = document.createElement("div");
    card.classList.add("feature-card");

    card.innerHTML = `
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    `;

    container.appendChild(card);
  });
  










