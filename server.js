
const express = require('express');

// rest object 
const app = express();

// routes 
// 1st test route 
app.use('/api/v1/test', require("./routes/testRoutes"));

// port 
const port = 3000

// listen 
app.listen(port, () => {
    console.log("server running on port 3000")
})