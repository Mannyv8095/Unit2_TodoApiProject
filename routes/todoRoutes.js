const express = require('express')
const router = express.Router{}
const todoController = require('../controllers/todoController')

router.get('/', )
router.post('/', )
router.get('/:id', )
router.put('/:id', )
router.delete('/:id', )

module.exports = router


app.get(‘/fibonacci/:num’, (req, res) => {
    const fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765,10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155]
    const numInt = Number(req.params.num)
    if (fibSequence.includes(numInt)) {
        res.send(“Very good. It is Fibonacci.“)
    }else {
        res.send(‘I can tell this is not a fibonacci number.’)
    }

})

