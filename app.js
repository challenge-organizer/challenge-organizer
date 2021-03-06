const express = require('express')
const app = express()
const PORT = process.env.PORT || 3003
const session = require('express-session')
const router = require('./routers')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(session({
  secret: 'Pair-project-random-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use('/', router)

app.listen(PORT, () => {
  console.log(`Challenge Organizer App server is running on http://localhost/:${PORT}`);
})