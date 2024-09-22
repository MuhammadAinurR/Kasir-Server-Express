const express = require("express");
const app = express();
const port = 80;

app.get("/", (req, res) => {
    res.status(200).send({
        message: "app initialization",
    });
});

app.listen(port, () => console.log(`service is running on port ${port}`));
