const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, requiered: true },
    value: { type: Number, min: 0, required: true }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, require: true },
    value: { type: Number, min: 0, required: true },
    status: { type: String, required: false, uppercase: true }, enum: ['PAID', 'PENDING', 'SCHEDULED']
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, moin: 1970, max: 2100, required: true },
    credits: [creditSchema],
    debits: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)