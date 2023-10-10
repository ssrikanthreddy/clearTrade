import OPENAI_API_KEY from './config.js';
import generatePrompt from './promptGen.js';

window.apiCallSuccessful = false; // Set a global variable
window.respo = ""; //global text empty



const prompt = generatePrompt();
console.log(apiCallSuccessful)
//const userInput = "Hey, How are you doing?";  
fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + OPENAI_API_KEY,
    
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
        content: prompt,
      },
    ],
  }),
})
.then(response => response.json())
.then(data => {
  var response = data.choices[0].message.content;
  document.getElementById("output").textContent = response;
  window.apiCallSuccessful = true;

})
.catch(error => {
    document.getElementById("output").textContent = error;
    window.apiCallSuccessful = true;
});