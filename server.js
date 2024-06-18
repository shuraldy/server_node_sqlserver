const express = require('express');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const port = 3000;

app.use('/api', dataRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
