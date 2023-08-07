const express = require("express");
const { APIAuth, getTrains } = require("./utils");

const app = express();
app.use(express.json());

app.get("/trains", async (req, res) => {
    const { access_token } = await APIAuth();
    const trains = await getTrains(access_token);
    res.send(trains);
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Started server on ${process.env.PORT || 8080}`);
});