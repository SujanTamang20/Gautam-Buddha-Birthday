// Change Font Style
document.getElementById('changeFontBtn').addEventListener('click', function() {
    document.getElementById('title').style.fontFamily = 'Courier New, Courier, monospace';
});

// Image Slider
let currentIndex = 0;
const images = document.querySelectorAll('#imageSlider img');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

// Initial display
showImage(currentIndex);

// Interactive Quote Generator
const quotes = [
    "The mind is everything. What you think you become.",
    "Three things cannot be long hidden: the sun, the moon, and the truth.",
    "You, yourself, as much as anybody in the entire universe, deserve your love and affection."
];

document.getElementById('quoteBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
});

// Toggle Day/Night Mode
document.getElementById('toggleModeBtn').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
});
