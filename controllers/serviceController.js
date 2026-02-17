const Service = require('../models/Service')

const createService = async (req, res)=>{
    try{
        const {name, price} = req.body

        const service = new Service ({
            name,
            price
        })
        await service.save()
        //res.status(201).json(service)
        res.status(201).send('Service added successfully')
    }
    catch(error){
        console.error(`this is an error: ${error}`)
        res.status(500).json({message: 'server error'})
    }
}

//get services list and details
const getServices = async(req, res)=>{
    try{
        const services = await Service.find()
        res.status(200).json(services)
    }
    catch(error){
        console.error(`this is an error: ${error}`)
        res.status(500).json({message: 'server error'})
    }
}

module.exports = {createService, getServices}