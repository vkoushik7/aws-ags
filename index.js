const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("hello, bugga - " +process.pid);
});

app.get('/add',(req,res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const sum = num1 + num2;
    res.send("Sum is: " + sum);
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});