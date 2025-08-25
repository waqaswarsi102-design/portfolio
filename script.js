document.addEventListener("DOMContentLoaded", () => {
    const calculateBmiBtn = document.getElementById("calculate-bmi");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const bmiResultSpan = document.getElementById("bmi-result");

    // BMI Calculator functionality
    calculateBmiBtn.addEventListener("click", () => {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            bmiResultSpan.textContent = "Please enter valid height and weight.";
            bmiResultSpan.style.color = "#e74c3c";
            return;
        }

        const bmi = weight / ((height / 100) * (height / 100));
        let category = "";
        let color = "";

        if (bmi < 18.5) {
            category = " (Underweight)";
            color = "#3498db";
        } else if (bmi >= 18.5 && bmi < 25) {
            category = " (Normal weight)";
            color = "#27ae60";
        } else if (bmi >= 25 && bmi < 30) {
            category = " (Overweight)";
            color = "#f39c12";
        } else {
            category = " (Obese)";
            color = "#e74c3c";
        }

        bmiResultSpan.textContent = bmi.toFixed(2) + category;
        bmiResultSpan.style.color = color;
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Get Started button smooth scroll
    const getStartedBtn = document.querySelector('.hero-section .btn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector('#tips');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = contactForm.querySelector('input[type="text"]');
            const emailInput = contactForm.querySelector('input[type="email"]');
            const messageInput = contactForm.querySelector('textarea');
            
            if (nameInput.value.trim() && emailInput.value.trim() && messageInput.value.trim()) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});

