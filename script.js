// Add interactivity to the website

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Dynamic text effect
    const dynamicText = [
        "Web Development",
        "Java",
        "JavaScript",
        "Game Development",
        "Android Development",
        "Ethical Hacking",
        "And Many More!"
    ];

    let textIndex = 0;
    const textElement = document.createElement("h3");
    textElement.style.color = "#f39c12";
    textElement.style.textAlign = "center";
    textElement.style.marginTop = "1rem";
    document.querySelector("header .container").appendChild(textElement);

    function updateText() {
        textElement.textContent = dynamicText[textIndex];
        textIndex = (textIndex + 1) % dynamicText.length;
        setTimeout(updateText, 2000);
    }

    updateText();

    // Form submission handling
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Thank you, " + name + "! Your message has been sent.");
            contactForm.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});
