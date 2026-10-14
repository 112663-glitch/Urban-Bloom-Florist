
/* Urban Bloom Florist - Interactive FAQs */

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {

        const answerId = button.getAttribute("aria-controls");
        const answer = document.getElementById(answerId);

        if (!answer) return;

        const isOpen = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!isOpen));
        answer.hidden = isOpen;

        const symbol = button.querySelector("span");

        if (symbol) {
            symbol.textContent = isOpen ? "+" : "−";
        }
    });
});

/* Contact Form Validation */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const fullName =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const enquiryType =
            document.getElementById("enquiryType").value;

        const message =
            document.getElementById("message").value.trim();

        const formMessage =
            document.getElementById("formMessage");

        if (!fullName || !email || !enquiryType || !message) {
            formMessage.textContent =
                "Please complete all required fields.";
            return;
        }

        formMessage.textContent =
            "Your enquiry is ready. This is a demonstration " +
            "form, so no message has been sent.";

        contactForm.reset();
    });
}
