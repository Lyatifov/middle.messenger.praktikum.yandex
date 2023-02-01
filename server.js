const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/dist/`));
const root = `${__dirname}\\dist\\index.html`;
app.get("/*", function (req, res) {
    res.sendFile(root);
});

app.listen(PORT, () => {
    console.log(`Server started in http://localhost:${PORT}`);
});
