const router = require('express').Router()
const Employee = require('../models/Employee')
const Admin = require('../models/Admin')
const bcrypt = require('bcrypt')

//Admin registration
router.post('/addAdmin', async (req,res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword =  await bcrypt.hash(req.body.password,salt)
        const newAdmin = new Admin({
            email: req.body.email,
            password: hashedPassword,
        })
        const admin = await newAdmin.save()
        res.status(200).json(admin)
    } catch (error) {
        console.log(error)
    }
})

//Login admin 
router.post('/login', async(req,res) => {
    try {
        const admin = await Admin.findOne({email: req.body.email})
        !admin && res.status(404).json('Not Admin')

        const validPassword = await bcrypt.compare(req.body.password, admin.password)
        !admin && res.status(404).json('Wrong Password')

        res.status(200).json(admin)
    } catch (error) {
        console.log(error)
    }
})


// Add new employees
router.post('/addEmployee', async (req,res) => {
    try {
        // const salt = await bcrypt.genSalt(10)
        // const hashedPassword =  await bcrypt.hash(req.body.password,salt)
            const newEmployee = new Employee({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                // password: hashedPassword,
                dateOfBirth: req.body.dateOfBirth,
                phone: req.body.phone,
                address: req.body.address,
                aadharCard: req.body.aadharCard,
                department: req.body.department,
                designation: req.body.designation,
                ctc: req.body.ctc,
                joiningBonus: req.body.joiningBonus,
                relocationBonus: req.body.relocationBonus,
                stocks: req.body.stocks
        })
        const employee = await newEmployee.save()
        res.status(200).json(employee)
    } catch (error) {
        console.log(error)
    }
})


//update info 
router.put('/update/:id', async(req,res) => {
        try {
            const employee = await Employee.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })
            res.status(200).json(employee)
        } catch (error) {
            return res.status(500).json(error)
        }
})

//delete employee
router.delete('/remove/:id', async(req,res) => {
        try {
            await Employee.findByIdAndDelete(req.params.id)
            res.status(200).json('Deleted')
        } catch (error) {
            return res.status(500).json(error)
        }
    }
)

//get a user
router.get("/view/:id", async (req, res) => {
    try {
        try {
            const employee = await Employee.findById(req.params.id);
            const { password, updatedAt, ...other } = employee._doc;
            res.status(200).json(other);
        } catch (err) {
            res.status(500).json(err);
            }
    } catch (error) {
        res.status(404).json('You cannot get employee')
    }
    
});

//performance
router.put("/performance/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    await employee.updateOne({ $push: { overAll : req.body } });
    res.status(200).json("Performance added");
  } catch (err) {
    res.status(500).json(err);
  }
});

//leave application
router.put("/leave/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    await employee.updateOne({ $push: { leave : req.body } });
    res.status(200).json("Leave application accepted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router