// code by @Daniel Shlusaver

document.addEventListener("DOMContentLoaded", function() { // wait for the page to load
    const facts = [ // string array of random facts
        "If current trends continue, by 2030 approximately 575 million people will still be living in extreme poverty",
        "If current trends continue by 2030, only one third of countries will have halved their national poverty levels",
        "Between 2022 and 2023 and in response to the cost of living crisis, 105 countries announced almost 350 social protection measures",
        "In low income countries, only 7.8% of vulnerable people received social protection cash benefits.",
        "Worldwide, countries have increased government spending on essential services (education, health and social protection) by 53% since 2015"
    ];

    // fetch the p tag by its id
    const factElement = document.getElementById("random-fact");

    // fetch the random fact button
    const factBtn = document.getElementById("fact-button");

    // fetch the gallery view button
    const galleryBtn = document.getElementById("gallery-button");

    // fetch the carousel and grid view elements
    const carouselView = document.getElementById("carousel-view");
    const gridView = document.getElementById("grid-view");

    // fetch the toggle icon and text elements from the gallery button
    const toggleIcon = galleryBtn.querySelector(".toggle-icon");
    const toggleText = galleryBtn.querySelector(".toggle-text");
    
    // function to display a random fact
    function displayRandomFact() {
        // generates a number between 0 and the length of the facts arra
        const randomIndex = Math.floor(Math.random() * facts.length);
        
        // update the p tag with a random fact
        factElement.textContent = facts[randomIndex];
    }

    // display a random fact when the page loads
    displayRandomFact(); 
    
    // click event listener for the random fact button
    factBtn.addEventListener("click", displayRandomFact);
    
    // function to toggle between carousel and grid view
    galleryBtn.addEventListener("click", function() {
        // checks if the carousel view is hidden
        if (carouselView.style.display == "none") {
            // display the carousel view and hide the grid view
            carouselView.style.display = "block";
            gridView.style.display = "none";

            // update the toggle icon and text
            toggleIcon.textContent = "🔲";
            toggleText.textContent = "Switch to Grid View";

        } else {
            // display the grid view and hide the carousel view
            carouselView.style.display = "none";
            gridView.style.display = "grid";
            
            // update the toggle icon and text
            toggleIcon.textContent = "📸";
            toggleText.textContent = "Switch to Carousel View";
        }
    });
});