const express=require('express');
const cors = require('cors');
const path = require('path'); //------
const app=express();

app.use(express.json());
app.use(cors());

//endpoits

app.post("/api/requerimiento",(req,res)=>{
    console.log(req.body);
    res.json({mensaje:"ok"});
});

app.get("/api/numero/:numero",(req,res)=>{
    console.log(req.params.numero);
    res.json({mensaje:"oki"});
});

//rutas de vue

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//------------

app.listen(3000, (error)=>{
    console.log("APIs listas en el puesto 3000");
});