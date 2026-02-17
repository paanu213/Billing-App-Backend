const Invoice = require('../models/Invoice')

const createInvoice = async (req, res)=>{
    try{
        const {customerName, mobileNumber, eventType, eventStartDate, eventEndDate, eventAmount, eventDiscount, advancePaid } = req.body

        const invoice = new Invoice ({
            customerName,
            mobileNumber,
            eventType,
            eventStartDate,
            eventEndDate,
            eventAmount,
            eventDiscount,
            advancePaid
        })
        await invoice.save()
        res.status(200).send('invoice saved successfully')
    }
    catch(error){
        console.error(`this is a server issue: ${error}`)
        res.status(500).json({message: 'server error'})
    }
}


module.exports = {createInvoice}