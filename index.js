import express from 'express'
import ConnectionDB from './DB/connection.js'

import * as allRouters from './src/modules/index.routes.js'


const app = express()
const port = 3000
app.use(express.json())
ConnectionDB()
app.use("/user",allRouters.userRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))