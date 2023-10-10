import OPENAI_API_KEY from './config.js';
import generatePrompt from './promptGen.js';
import animate from './animate.js';

function bot(){
    console.log("bot called");
    const API_KEY = 'earer ' + OPENAI_API_KEY;
    const userInput = generatePrompt();

    fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': API_KEY,
    },
    body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
        {
            role: 'system',
            content: 'You are a helpful assistant helping farmers trade better.',
        },
        {
            role: 'user',
            content: userInput,
        },
        ],
    }),
    })
    .then(response => response.json())
    .then(data => { 
    var response = `Here, we've made sure to get the cursor element outside of the animateText function to avoid unnecessary DOM queries. Additionally, I've adjusted the timing to slow down the cursor blinking. You can further tweak the delay (in milliseconds) as needed.

    Remember to adjust the delay as per your preference for the blinking effect.`;
    //console.log(`Bot says ${response}`);
    animate(response);
    })
    .catch(error => {
    var err = error;
    //console.log('Error: ', error);
    animate(err);
    });
}
export default bot;

window.been_called = false;

document.querySelector('#chat-circle').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'block';
    document.querySelector('.chat-overlay').style.display = 'block';
    animatedText.textContent = '';
    if (window.been_called == false){
        window.been_called = true;
        bot();
    }
    });
    
document.querySelector('.chat-overlay').addEventListener('click', function() {
document.getElementById('chat-box').style.display = 'none';
document.querySelector('.chat-overlay').style.display = 'none';
    });
    