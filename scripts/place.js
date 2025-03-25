// Function to calculate wind chill factor in Celsius
function calculateWindChill(tempC, windSpeedKmh) {
    return (
        13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKmh, 0.16)
    ).toFixed(1);
}

// Function to update wind chill
function updateWindChill() {
    // Static values for now
    const temperature = 10; // °C
    const windSpeed = 5; // km/h

    // Wind chill calculation conditions
    let windChill = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed) + "°C";
    }


    document.getElementById("wind-chill").textContent = windChill;
}

document.addEventListener("DOMContentLoaded", updateWindChill);
