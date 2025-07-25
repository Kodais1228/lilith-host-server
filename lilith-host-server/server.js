const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Lilith is live on port ${PORT}`);
});
