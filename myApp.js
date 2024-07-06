let express = require('express');
let app = express();
let dotenv = require('dotenv');
const { json, urlencoded} = require('body-parser');

app.use(urlencoded({extended: false}))

app.route('/name')
.get((req, res) => {
  res.json({ name: `${req.query.first} ${req.query.last}` })
})
.post((req, res)=>{
  res.json({ name: `${req.body.first} ${req.body.last}` })
})

// app.get('/:word/echo', (req, res) => {
//   res.json({echo: req.params.word})
// })

// load the environment variables
// dotenv.config();

// console.log("Hello World");

// app.use((req, res, next) =>{
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next();
// })

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  // res.send('Hello Express');
  res.sendFile(__dirname + '/views/index.html');
})

// app.get('/json', (req, res) => {
//   let message = "Hello json";
//   if (process.env.MESSAGE_STYLE === 'uppercase'){
//     message = message.toUpperCase();
//   }
//   res.json({"message": message})
// })

// app.get('/now', (req, res, next) => {
//   req.time = new Date().toString();
//   next()
// }, (req, res) => {
//   res.json({time: req.time})
// })





























module.exports = app;
