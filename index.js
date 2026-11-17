<<<<<<< HEAD
import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
  return res.json({ msg: 'Hello from the server' })
})

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`)
})
=======
﻿const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Node.js CI/CD Pipeline with Docker is running!' });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
>>>>>>> 7603ce9b45d7ddf743da6bf9f5b94436e579d84c
