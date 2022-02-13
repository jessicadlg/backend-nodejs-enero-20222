const express = require("express")
function prueba(app){
     //configuro el router
    const router = express.Router()
   //le indico q lo utilicen
    app.use("/pruebas",router)

    router.get('/otraruta',(req,res)=>{
        return res.status(200).send('Hola, otra ruta')
    })
    router.post('/guardar',(req,res)=>{
        console.log(req.body)
        return res.status(200).send('Hola, guardar')
    })
    
}


module.exports = prueba