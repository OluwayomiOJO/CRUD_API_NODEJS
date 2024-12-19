const app = require('./src/app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`My local Server running on http://localhost:${PORT}`);
});
