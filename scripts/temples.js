// Function to set the current year in the footer
function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

// Function to set the last modified date in the footer
function setLastModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById('lastmodified').textContent = lastModified;
}

// Call the functions to update the footer
setCurrentYear();
setLastModifiedDate();

// Hamburger Menu Functionality
const nav = document.querySelector('nav');
const hamburgerButton = document.createElement('button');
hamburgerButton.innerHTML = '☰'; // Hamburger icon (you can use any symbol)
hamburgerButton.id = 'hamburger-button';
hamburgerButton.style.display = 'block'; // Show by default

// Add styles for the hamburger button
hamburgerButton.style.background = 'none';
hamburgerButton.style.border = 'none';
hamburgerButton.style.color = 'white';
hamburgerButton.style.fontSize = '24px';
hamburgerButton.style.cursor = 'pointer';

// Append the hamburger button to the header
const header = document.querySelector('header');
header.insertBefore(hamburgerButton, nav);

// Toggle nav visibility on button click
hamburgerButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // Change the button to an 'X' when active
    if (nav.classList.contains('active')) {
        hamburgerButton.innerHTML = '✖'; // Close icon
        nav.style.display = 'flex'; // Show the nav
    } else {
        hamburgerButton.innerHTML = '☰'; // Hamburger icon
        nav.style.display = 'none'; // Hide the nav
    }
});

// Media Query for Responsive Design
function handleResize() {
    if (window.innerWidth >= 768) {
        nav.style.display = 'flex'; // Ensure nav is displayed properly on larger screens
        hamburgerButton.style.display = 'none'; // Hide hamburger button on larger screens
    } else {
        nav.style.display = 'none'; // Hide nav on small screens initially
        hamburgerButton.style.display = 'block'; // Show hamburger button on mobile
    }
}

// Event listeners
window.addEventListener('resize', handleResize);
handleResize(); // Call once to set initial state