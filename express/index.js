const express=require('express');
const app=express();

app.use(express.json());

app.post("/api/requerimiento",(req,res)=>{
    console.log(req.body);
    res.json({mensaje:"ok"});
});

app.get("/api/numero/:numero",(req,res)=>{
    console.log(req.params.numero);
    res.json({mensaje:"oki"});
});

app.listen(3000, (error)=>{
    console.log("APIs listas en el puesto 3000");
});