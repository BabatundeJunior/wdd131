const countryData = {
    area: "923,768 sq km",
    population: "223,804,632",
    capital: "Abuja",
    languages: ["English", "Hausa", "Yoruba", "Igbo"],
    currency: "Nigerian Naira (NGN)",
    timeZone: "UTC+1",
    callingCode: "+234",
    internetTLD: ".ng"
};

// Function to populate the data dynamically
function populateData() {
    document.getElementById("area").textContent = countryData.area;
    document.getElementById("population").textContent = countryData.population;
    document.getElementById("capital").textContent = countryData.capital;
    document.getElementById("languages").textContent = countryData.languages.join(", ");
    document.getElementById("currency").textContent = countryData.currency;
    document.getElementById("timeZone").textContent = countryData.timeZone;
    document.getElementById("callingCode").textContent = countryData.callingCode;
    document.getElementById("internetTLD").textContent = countryData.internetTLD;
}

// Ensure the function runs after the page loads
document.addEventListener("DOMContentLoaded", populateData);
