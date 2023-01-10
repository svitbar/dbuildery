const express = require("express");
const db = require('./config.js');
const router = require("./router.js");

const app = express();

const PORT = 8080;

app.use(express.json());
app.use('/', router);

db.connect(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)));
