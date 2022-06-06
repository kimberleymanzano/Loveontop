const { Router } = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = Router();

const product = require("./data.json");
console.log(product);

//rutas
router.get('/',(req,res)=>{
    res.json(product);
});

//sacar toda la info desde un ID
router.get('/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id);

    planta.forEach(plantita => {
        if(plantita.id == id){
            res.json(plantita);
            console.log(plantita.title);
        }
    });
});

module.exports = router;