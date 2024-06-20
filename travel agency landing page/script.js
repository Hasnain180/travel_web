// scripts.js

document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const selectedLang = event.target.getAttribute('data-lang');
        alert('Language selected: ' + selectedLang);
        // Here you can add code to handle the language change
        // For example, redirect to a different page or change the content language
    });
});


let menulink = document.querySelector(".menu-link");
let menuicon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.addEventListener("click", () => {
    menuicon.classList.toggle("active");
    menulink.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function() {
    const upArrow = document.querySelector('.bx-chevron-up');
    const downArrow = document.querySelector('.bx-chevron-down');
    const reviews = document.querySelectorAll('.review');

    const toggleReview = (direction) => {
        const currentIndex = Array.from(reviews).findIndex(review => review.classList.contains('current'));
        reviews[currentIndex].classList.remove('current');
        
        let newIndex;
        if (direction === 'up') {
            newIndex = (currentIndex === 0) ? reviews.length - 1 : currentIndex - 1;
        } else {
            newIndex = (currentIndex === reviews.length - 1) ? 0 : currentIndex + 1;
        }
        
        reviews[newIndex].classList.add('current');
    };

    upArrow.addEventListener('click', () => toggleReview('up'));
    downArrow.addEventListener('click', () => toggleReview('down'));
});


