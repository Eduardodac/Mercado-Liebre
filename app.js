const express = require ('express');
const path = require('path');

const app = express ();
const publicPath=path.resolve(__dirname, './public');

app.use(express.static(publicPath))

app.listen(process.env.port || 3000, () => {
    console.log('Estamos listos par arrancar en el puerto 3000')
});

app.get('/', (_req,res)=>{
    let rutaHTML=path.join(__dirname, "./views/home.html");
    res.sendFile(rutaHTML)
});