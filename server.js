const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
