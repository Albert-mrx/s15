const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`la suma de 2+2 = ${2+2} `);
})
app.listen(port,()=>{
    console.log(`el servidor esta ejecutandose en http://localhost:${port}`);
})