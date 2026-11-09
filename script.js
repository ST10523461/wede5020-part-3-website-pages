// ...existing code...

const showMessage = (targetId, name, message) => {
    const target = document.getElementById(targetId);

    if (!target) return;

    target.innerHTML = `
        <div class="notice">
            ${message.replace("{name}", `<strong>${name}</strong>`)}
        </div>
    `;
};

// ==========================================
// 1. ENQUIRY FORM VALIDATION & SUBMISSION
// ==========================================
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameField = document.getElementById("name") || document.getElementById("enquiryName");
        const emailField = document.getElementById("email") || document.getElementById("enquiryEmail");
        const categoryField = document.getElementById("enquiryCategory");
        const messageField = document.getElementById("message") || document.getElementById("enquiryDetails");
        const formMessage = document.getElementById("formMessage") || document.getElementById("enquiryResponse");

        if (!nameField || !formMessage) return;

        const name = nameField.value.trim();
        const email = emailField ? emailField.value.trim() : "";
        const category = categoryField ? categoryField.value : "";
        const details = messageField ? messageField.value.trim() : "";

        let isValid = true;
        let errorMessage = "";

        // Client-side validation checks
        if (name === "") {
            errorMessage = "Please enter your name.";
            isValid = false;
        } else if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessage = "Please enter a valid email address.";
            isValid = false;
        } else if (categoryField && category === "") {
            errorMessage = "Please select an enquiry type.";
            isValid = false;
        } else if (messageField && details.length < 10) {
            errorMessage = "Please provide at least 10 characters in your enquiry details.";
            isValid = false;
        }

        if (!isValid) {
            formMessage.innerHTML = `
                <div class="notice" style="color: #ff4d4d; border-color: #ff4d4d;">
                    ${errorMessage}
                </div>
            `;
            return;
        }

        // Success display using your helper structure
        formMessage.innerHTML = `
            <div class="notice">
                Thank you, <strong>${name}</strong>!<br>
                Your enquiry${category ? ' regarding <strong>' + category + '</strong>' : ''} has been received. 
                We will contact you as soon as possible.
            </div>
        `;

        enquiryForm.reset();
    });
}

// ==========================================
// 2. CONTACT FORM VALIDATION & SUBMISSION
// ==========================================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameField = document.getElementById("contactName");
        const emailField = document.getElementById("contactEmail");
        const msgTypeField = document.getElementById("msgType");
        const messageField = document.getElementById("contactMessage");
        const contactMessageResult = document.getElementById("contactMessageResult");

        if (!nameField || !contactMessageResult) return;

        const name = nameField.value.trim();
        const email = emailField ? emailField.value.trim() : "";
        const message = messageField ? messageField.value.trim() : "";

        let isValid = true;
        let errorMessage = "";

        // Client-side validation checks
        if (name === "") {
            errorMessage = "Please enter your name.";
            isValid = false;
        } else if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessage = "Please enter a valid email address.";
            isValid = false;
        } else if (messageField && message === "") {
            errorMessage = "Please enter your message text.";
            isValid = false;
        }

        if (!isValid) {
            contactMessageResult.innerHTML = `
                <div class="notice" style="color: #ff4d4d; border-color: #ff4d4d;">
                    ${errorMessage}
                </div>
            `;
            return;
        }

        // Success display
        contactMessageResult.innerHTML = `
            <div class="notice">
                Thank you, <strong>${name}</strong>!<br>
                Your message has been submitted successfully.
            </div>
        `;

        contactForm.reset();
    });
}

// ...existing code...