const express = require('express')
const app = express()
app.get('/', (req, res)=>res.send('Hello Express zzj'))
app.listen(80)