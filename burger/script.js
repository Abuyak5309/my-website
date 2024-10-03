document.addEventListener("DOMContentLoaded", function() {
    // Function to adjust styles based on screen size
    function adjustLayout() {
        const width = window.innerWidth;

        // Adjust newsletter signup padding and font size for smaller screens
        const signupSection = document.querySelector('.newsletter-signup');
        const ctaSection = document.querySelector('.cta-banner');

        if (width < 768) {
            signupSection.style.padding = '20px 10px';
            ctaSection.style.padding = '20px 10px';
        } else {
            signupSection.style.padding = '40px 20px';
            ctaSection.style.padding = '20px 20px';
        }

        // Adjust announcement bar size
        const announcementBar = document.querySelector('.announcement-bar');
        if (width < 480) {
            announcementBar.style.fontSize = '0.9rem';
            announcementBar.style.padding = '5px';
        } else {
            announcementBar.style.fontSize = '1rem';
            announcementBar.style.padding = '10px';
        }
    }

    // Initial adjustment
    adjustLayout();

    // Adjust on resize
    window.addEventListener('resize', adjustLayout);
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    // Function to adjust layout and styles dynamically
    function adjustLayout() {
        const width = window.innerWidth;

        // Adjust header font size and padding for smaller screens
        const headerTitle = document.querySelector('.header h1');
        if (width < 480) {
            headerTitle.style.fontSize = '1.5rem';
            document.querySelector('.header').style.padding = '15px';
        } else {
            headerTitle.style.fontSize = '1.8rem';
            document.querySelector('.header').style.padding = '20px';
        }
    }

    // Toggle navigation menu
    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Initial layout adjustment
    adjustLayout();

    // Adjust layout on resize
    window.addEventListener('resize', adjustLayout);
});

