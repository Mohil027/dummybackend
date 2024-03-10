import dotenv from 'dotenv';
import express from 'express';
const app = express()
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Server is ready!")
});

app.get("/jokes", (req, res) => {
    const jokes = [
        { id: 1, title: "A joke", content: "This is a joke" },
        { id: 2, title: "Penguin joke", content: "Why don't penguins like talking to strangers at parties? Because they find it hard to break the ice!" },
        { id: 3, title: "Math joke", content: "Why was the math book sad? Because it had too many problems." },
        { id: 4, title: "Programming joke", content: "Why do programmers prefer dark mode? Because light attracts bugs!" },
        { id: 5, title: "Doctor joke", content: "Doctor: I'm sorry but you suffer from a terminal illness and have only 10 to live. Patient: What do you mean, 10? 10 what? Months? Weeks?! Doctor: Nine." }
      ];
    res.send(jokes);

});

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});