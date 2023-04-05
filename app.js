const express = require("express");
const feedRoutes = require("./routes/feed");
const app = express();

app.get("/feed", feedRoutes);

app.listen(8080);
