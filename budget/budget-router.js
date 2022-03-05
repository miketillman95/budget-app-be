const Budget = require('./budget-model')
const router = express('express').Router()



// from the way the budget FE is set up it would be updating and deleting budgets with the  api
router.post('/', (req, res) => {
    Budget.add(req.body)
    .then(budget => {
        console.log("success",req.body)
        res.status(201).json(budget)
    })
    .catch(error => {
      console.log("failure", error)
        res.status(500).json({
        message: 'Error adding the budget',
        });
  });
}) // return the added item object

// works
router.delete('/:id', (req, res) => {
    Budget.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({
                message: 'Budget has been removed'
            }) 
        } else {
            res.status(404).json({
                message: 'Budget cannot be found'
            })
        }
    })
    .catch(error => {
        res.status(500).json({
        message: 'Error removing the item',
        });
  });
})