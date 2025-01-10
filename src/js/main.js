
    function navigateToAdventure() {
        window.location.href = "adventure.html"; // Adjust the path as necessary
    }

    // Optional: Handle the hamburger menu toggle
    document.querySelector('.hamburger-icon').addEventListener('click', function() {
        const menuLinks = document.querySelector('.menu-links');
        menuLinks.classList.toggle('active'); // Toggle class for showing/hiding menu
    });
    function toggleMenu(){
        const menu=document.querySelector(".menu-links");
        const icon=document.querySelector(".hamburger-icon");
    
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    }
