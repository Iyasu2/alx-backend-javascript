// full_server/server.js

const express = require('express');
const app = express();
const PORT = 1245; // Set the desired port number

// Import and use the routes from index.js
const routes = require('./routes/index');
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});

export default app;
