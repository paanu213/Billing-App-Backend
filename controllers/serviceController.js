const service = require('../models/service')

const createService = async (req, res)=>{
    try{
        const {name, price} = req.body

        const service = new Service ({
            name,
            price
        })
        await service.save()
        res.status(201).json(service)
    }
    catch(error){
        console.log(`this is an error: ${error}`)
        res.status(500).json({message: 'server error'})
    }
}

module.exports = {createService}