const { addExpense, getExpense, deleteExpense } = require('../controller/expense');

const router = require('express').Router();

router.post('/add-expense', addExpense);
router.get('/get-expense', getExpense);
router.delete('/delete-expense/:id', deleteExpense);

module.exports = router;