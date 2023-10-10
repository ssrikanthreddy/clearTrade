import OPENAI_API_KEY from './config.js';
import generatePrompt from './promptGen.js';
import animate from './animate.js';

function bot(){
    console.log("bot called");
    const API_KEY = 'Bearer ' + OPENAI_API_KEY;
    const userInput = generatePrompt();

    if (userInput === 'empty')
    {
        animate("Please input values in all the fields");
    }
    else
    {
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
            var response = data.choices[0].message.content;
            //console.log(`Bot says ${response}`);
            animate(response);
            })
            .catch(error => {
            var err = error;
            //console.log('Error: ', error);
            animate(err);
            });
    }
   
}
export default bot;

document.querySelector('#chat-circle').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'block';
    document.querySelector('.chat-overlay').style.display = 'block';
    document.getElementById('animated-text').textContent = "";

    bot();
    });
    
document.querySelector('.chat-overlay').addEventListener('click', function() {
document.getElementById('chat-box').style.display = 'none';
document.querySelector('.chat-overlay').style.display = 'none';
    });

