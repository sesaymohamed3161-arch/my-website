function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

// Smooth scrolling effect
const links = document.querySelectorAll('nav ul li a');

links.forEach(link ="sesay.mohamed3161@gmail.com"> {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});