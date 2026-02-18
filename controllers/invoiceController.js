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

        invoice.calculateAmounts()
        await invoice.save()
        res.status(201).json(invoice)
    }
    catch(error){
        console.error(`this is a server issue: ${error}`)
        res.status(500).json({message: 'server error'})
    }
}


const getInvoice = async (req, res)=>{
    try{
        const invoices = await Invoice.find()
        res.status(200).json(invoices)
    }
    catch(error){
        console.error(`message: ${error}`)
        res.status(500).json({message: 'server error'})
    }
}


module.exports = {createInvoice, getInvoice}