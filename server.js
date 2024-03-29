const express = require("express");
const path = require('path');
const Gun = require("gun");
const app = express();
const port = process.env.PORT || 8080;

app.use(Gun.serve);

app.get("/", (req, res) => {
    res.send(`Relay peer en línea en el puerto ${port}`);
});
const server = app.listen(port, () => {
    console.log(`Listening at port localhost:${port}`);
});
const dataFilePath = path.join(__dirname, 'db/data');

const gun = Gun({ file:dataFilePath, web: server });


// var cont = 0;

// gun.on("in", (msg) => {
//     console.log("Conexión entrante:", ++cont);
// });
