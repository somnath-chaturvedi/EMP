const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser');
const authEmployeeRoute = require('./routes/authEmployee')
const authAdmin = require('./routes/authAdmin')

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to MongoDB')
})

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/employee/', authEmployeeRoute)
app.use('/', authAdmin)

app.listen(5000, () => {
    console.log('Server is listening on port 5000')
})