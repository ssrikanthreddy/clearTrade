let animationInProgress = false;

function animate(response) {
    console.log("Animate called");
    

    document.getElementById("blinking-cursor").style.display = 'none';
    const animatedText = document.getElementById('animated-text');
    const text = response;
    let index = 0;

    function animateText() {
        if (index < text.length) {
            animatedText.textContent += text[index];
            index++;
            setTimeout(animateText,15); // Set a delay of 20ms
        }
    }
    
    animateText();
}

export default animate;
