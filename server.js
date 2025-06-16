const express = require("express");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.redirect(303, "/hello-world");
});

app.get("/hello-world", (req, res) => {
  res.redirect(303, "/hello-world.json");
});

app.get("/hello-world.json", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("/image", (req, res) => {
  res.redirect(
    303,
    "https://images.pexels.com/photos/31285211/pexels-photo-31285211/free-photo-of-serene-landscape-of-scottish-highlands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  );
});

app.use((req, res) => {
  res.status(405).send(`${req.method} is not supported on url ${req.path}`);
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Server running at http://localhost:${port}`);
});