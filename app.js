const express = require('express');
const path = require('path');
const PORT=3030;
app.use(express.static(path.join(__dirname,'public')))
const app = express()
app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views','home.html')))
app.listen(PORT,() => console.log(`server running http://localhost:${PORT}`));
