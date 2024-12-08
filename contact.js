// code by @Daniel Shlusaver

document.addEventListener("DOMContentLoaded", function() { // wait for the page to load
    const contactPhoto = document.getElementById("contact-photo");

    let image = 1; // keeps track of which image is currently displayed
    
    function switchPhoto() {
        // changes the photo src between 2 images
        if (image == 1) {
            contactPhoto.src = "images/contact/un-flag.png";
            image = 2;
        } else {
            contactPhoto.src = "images/contact/phone.png";
            image = 1;
        }
    };

    // call the function every 5 seconds (5000ms)
    setInterval(switchPhoto, 5000);
});

function formSubmitted() { // when form is submitted (button clicked)
    // declare variables for each form input
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const query = document.getElementById("query");

    if (fullName.value.length < 3) { // check if name is at least 3 chars long
        alert("Please enter a valid name!");
        return;

    } else if (!email.value.includes("@")) { // i tried to use "contains" but remembered this is js and not java
        alert("Please enter a valid email address!");
        return;

    } else if (query.value.length == 0) { // check if a query dropdown option has been selected
        alert("Please select a valid query!");
        return;

    } else if (message.value.length < 10) { // check if message text is at least 10 chars long
        alert("Please enter a message with at least 10 characters!");
        return;
    }

    // passed all checks, alert the user
    alert("Your " +  query.value + " query has been sent to our team, thank you " + fullName.value + "!");
};