const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    amount:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        default: 'expense'
    },
}, {timestamps: true})

module.exports = mongoose.model('Expense', ExpenseSchema)