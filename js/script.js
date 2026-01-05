// Footer 
// Automatisches Jahr setzen
document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const afterImg = document.querySelector('.comparison-container .after');
    const handle = document.querySelector('.slider-handle');

    slider.addEventListener('input', () => {
        const pct = slider.value + '%';
        afterImg.style.width = pct;
        handle.style.left = pct;
    });
});
