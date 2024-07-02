document.addEventListener("DOMContentLoaded", function() {
    // Function to update the current UTC time and day
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(17, 25);
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

        document.getElementById("utc-time").textContent = utcTime;
        document.getElementById("current-day").textContent = dayOfWeek;
    }

    // Function to toggle between light and dark theme
    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
        const themeToggleBtn = document.getElementById("theme-toggle");
        themeToggleBtn.textContent = document.body.classList.contains("dark-mode") ? "Back to Light mode 🌞" : "Change Theme 🌙";
    }

    // Update time every second
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to set the time immediately

    // Add event listener to the theme toggle button
    const themeToggleBtn = document.getElementById("theme-toggle");
    themeToggleBtn.addEventListener("click", toggleTheme);

    // Smooth scroll for navigation links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Hide the navbar on mobile after clicking a link
            if (window.innerWidth <= 600) {
                document.getElementById('navbar').style.display = 'none';
            }
        });
    });

    // Toggle the display of the navbar on mobile
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close the navbar when clicking outside of it on mobile
    document.addEventListener('click', function(event) {
        const navbar = document.getElementById('navbar');
        const isClickInside = navbar.contains(event.target) || hamburger.contains(event.target);

        if (!isClickInside && window.innerWidth <= 600) {
            navbar.style.display = 'none';
        }
    });

    // Hide the overlay after 1 second
    setTimeout(() => {
        const overlay = document.getElementById('overlay');
        overlay.classList.add('hide');
    }, 1000);
});

// JavaScript for scroll-to-top button
const scrollToTopButton = document.getElementById('scroll-to-top');
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// JavaScript for scroll-to-bottom button
const scrollToBottomButton = document.getElementById('scroll-to-bottom');
scrollToBottomButton.addEventListener('click', () => {
    const footer = document.querySelector('footer');
    footer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Show or hide scroll buttons based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }

    if (window.scrollY < (document.documentElement.scrollHeight - window.innerHeight - 100)) {
        scrollToBottomButton.style.display = 'block';
    } else {
        scrollToBottomButton.style.display = 'none';
    }
});
