/**
 * Mock the external api which is called by backend api.
 */

 const express = require('express');

 const host = 'localhost';
 const port = 5030;
 const app = express();
 
 app.get('/target-api/**', (req, res) => {
     req.send('mock data');
 });
 
 app.listen(port, () => {
     console.log(`Mock external server is running on ${host}:${port}`);
 });
 