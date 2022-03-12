const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/admin', require('./routes/admin'))
app.use('/api/feedback', require('./routes/feedback'))
app.use('/api/notice', require('./routes/notice'))
app.use('/api/complaint', require('./routes/complaint'))
app.use('/api/resident', require('./routes/resident'))
app.use('/api/maintenance', require('./routes/maintenance'))


app.listen(port, () => {
  console.log(`Society E-portal backend listening at http://localhost:${port}`)
})