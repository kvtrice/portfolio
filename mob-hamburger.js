document.addEventListener('DOMContentLoaded', () => {
    const closeMenuButton = document.getElementById('close-menu');
    
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMobileMenu);
    }
});

function closeMobileMenu() {
    window.history.back();
}

