const router = require('express').Router()
const Employee = require('../models/Employee')

router.post('/login', async(req,res) => {
    try {
        const employee = await Employee.findOne({email: req.body.email})
        !employee && res.status(404).json('no employee found')

        const validPassword = await bcrypt.compare(req.body.password, employee.password)
        !employee && res.status(404).json('Wrong Password')

        res.status(200).json(employee)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router