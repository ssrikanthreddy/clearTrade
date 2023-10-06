require('dotenv').config();

const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const openFun = async() => {
const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user","content":"generate a small rhyming poem!",}],
    max_tokens: 1
        })
    console.log(chatCompletion.choices[0].message.content);
    }

module.exports = { openFun };

