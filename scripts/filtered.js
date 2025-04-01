const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "St. George Utah Temple",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40449.jpg"
      },
      {
        templeName: "Logan Utah Temple",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-52352.jpg"
      },
      {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-45008.jpg"
      },
      {
        templeName: "Bountiful Utah Temple",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-44017.jpg"
      },
      {
        templeName: "Casper Wyoming Temple",
        location: "Casper, Wyoming, United States",
        dedicated: "2024, November, 24",
        area: 9950,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/casper-wyoming-temple/casper-wyoming-temple-51917.jpg"
      },
      {
        templeName: "Cobán Guatemala Temple",
        location: "Cobán, Alta Verapaz, Guatemala",
        dedicated: "2024, June, 9",
        area: 8772,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-47554.jpg"
      }
  ];


  const templesContainer = document.querySelector(".temple-container");
  const navLinks = document.querySelectorAll(".navigation li a");
  const heading = document.querySelector("main h2"); 
  
  function displayTemples(filteredTemples, title = "Home") {
      templesContainer.innerHTML = ""; 
      heading.textContent = title; 
  
      filteredTemples.forEach(temple => {
          const card = document.createElement("div");
          card.classList.add("temple-card");
  
          card.innerHTML = `
              <h3>${temple.templeName}</h3>
              <p><strong>Location:</strong> ${temple.location}</p>
              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
              <p><strong>Area:</strong> ${temple.area} sq ft</p>
              <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          `;
  
          templesContainer.appendChild(card);
      });
  }
  
  // Filtering function
  function filterTemples(criteria) {
      let filtered = [];
      let title = "Home"; 
  
      switch (criteria) {
          case "Old":
              filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
              title = "Old Temples";
              break;
          case "New":
              filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
              title = "New Temples";
              break;
          case "Large":
              filtered = temples.filter(t => t.area > 90000);
              title = "Large Temples";
              break;
          case "Small":
              filtered = temples.filter(t => t.area < 10000);
              title = "Small Temples";
              break;
          default:
              filtered = temples;
              title = "Home";
              break;
      }
  
      displayTemples(filtered, title);
  }

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
  
  
  // Display all temples by default
  displayTemples(temples, "Home");
  