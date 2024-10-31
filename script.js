document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Event listener for scrolling
window.addEventListener('scroll', animateContainers);


// Event listener for scrolling
window.addEventListener('scroll', animateContainers);
// Function to add fade-in class when the footer is in the viewport
const footer = document.querySelector('footer');

function animateFooterOnScroll() {
    const rect = footer.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        footer.classList.add('fade-in');
    }
}

window.addEventListener('scroll', animateFooterOnScroll);
