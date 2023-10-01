const PORT = process.env.PORT || 5000
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const parseURL = require('./framework/parseURL')
const mongoose = require('mongoose')

const app = new Application()

app.use(jsonParser)
app.use(parseURL('http://localhost:5000'))

app.addRouter(userRouter)

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://user:123@cluster0.jbpfdho.mongodb.net/?retryWrites=true&w=majority')
    app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()