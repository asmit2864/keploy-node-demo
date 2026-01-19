const express = require("express");
const app = express();

// Simple API
app.get("/sum", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    result: a + b
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


