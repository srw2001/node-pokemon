const mongoose = require('mongoose');

const paymentLog = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    paidAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('PaymentLog', paymentLog);