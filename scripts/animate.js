const textContainer = document.getElementById('text-container');
const animatedText = document.getElementById('animated-text');
let text = document.getElementById('output').innerHTML;

let index = 0;
let animationInProgress = false; // Track if animation is in progress

function animateText() {
    let text = document.getElementById('output').innerHTML;
    if (!animationInProgress) return;

    animatedText.textContent += text[index];
    index++;

    if (index < text.length) {
        setTimeout(animateText, 20);
    }
}

document.querySelector('#chat-circle').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'block';
    document.querySelector('.chat-overlay').style.display = 'block';
    document.getElementById('animated-text').textContent = '';
    
    // Set animation to in progress
    animationInProgress = true;

    // Reset index
    index = 0;

    // Start animation
    animateText();
});

document.querySelector('.chat-overlay').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'none';
    document.querySelector('.chat-overlay').style.display = 'none';

    // Set animation to not in progress
    animationInProgress = false;
});
