const express = require("express");

const app = express();

const port = 3333;

app.listen(port, () => console.log(`Server Running ${port}`));

app.use(express.json());

app.get("/get", (req, res) => {
    res.send("Olá, Mundo!");
});

app.post("/post", (req, res) => {
    const name = req.body.name;
    res.send(`Meu nome é ${name}`);
})

app.put("/put/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Meu ID é ${id}`);
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Meu ID é ${id}`);
});