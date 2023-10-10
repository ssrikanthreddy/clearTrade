function animate(response) {
    document.getElementById("blinking-cursor").style.display = 'none';
    const animatedText = document.getElementById('animated-text');
    const cursor = document.getElementById('blinking-cursor');
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
