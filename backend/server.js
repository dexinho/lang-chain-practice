import express from "express";

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const a = res.sendStatus(403)
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:3000`);
});
