const express = require('express');
const app = express();
const port = 7865;

// Define a route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Define a route for GET /available_payments
app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    credit_cards: true,
    paypal: false,
  };
  res.json({ payment_methods: paymentMethods });
});

// Define a route for POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
