const express = require('express');
const app = express();
const db = require('./db');
const routes = require('./routes');

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
