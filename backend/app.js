const express = require("express");
const { APIAuth } = require("./utils");

const app = express();
app.use(express.json());

app.get("/trains", async (req, res) => {
    const { access_token } = await APIAuth();
    res.send(access_token);
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Started server on ${process.env.PORT || 8080}`);
});