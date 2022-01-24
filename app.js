import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.engine('ejs', ejs.renderFile)
app.use(bodyParser.urlencoded({extended: true}));

var tweet = [
  {
    name: "yard",
    content: "hi"
  },
  {
    name:"ellie",
    content:"what?"
  }
];

app.get('/tweets', (req, res, next)=>{
  res.render('./index.ejs');
  console.log(req.body);
});

app.get('/tweets?username=:username', (req, res)=>{
  res.send('hi');
});

app.get('/tweets/:id', (req, res)=>{
  res.send('hi');
});

app.post('/tweets', (req, res)=>{
  res.setHeader('Content-Type', 'application/json');
  tweet.push(req.body);
  res.json(tweet);
});

app.put('/tweets/:id', (req, res)=>{
  res.send('hi');
});

app.delete('/tweets/:id', (req, res)=>{
  res.send('hi');
});

app.listen(8080, ()=>{
  console.log('connected!');
});
