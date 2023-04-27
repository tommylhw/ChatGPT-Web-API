const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(config);

// set up the server
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
    const { prompt } = req.body;

    const completion = await openai.createCompletion({
         model: "text-davinci-002",
         max_tokens: 512,
         temperature: 0,
         prompt: prompt,
    });

    res.send(completion.data.choices[0].text);
});

const PORT = 8020;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));