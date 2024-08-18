const ExpenseSchema = require('../models/ExpenseModel');

// Add Expense
exports.addExpense = async (req, res) => {
    const { amount, category, date, description } = req.body;

    // Validating to get all the fields filled
    if (!amount || !category || !date || !description) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    // Ensure amount is a positive number
    if (amount == 'number' || amount <= 0) {
        return res.status(400).json({ message: "Amount should be a positive number" });
    }

    const expense = new ExpenseSchema({
        amount,
        category,
        date,
        description,
    });

    try {
        await expense.save();
        res.status(200).json({ message: "Expense added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error: Could not add expense" });
    }
    console.log(expense);
};

// Get Expenses
exports.getExpense = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: "Server error: Could not get expenses" });
    }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        const expense = await ExpenseSchema.findByIdAndDelete(id);
        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error: Could not delete expense" });
    }
};
