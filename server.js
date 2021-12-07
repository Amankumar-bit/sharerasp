require('dotenv').config();
const express =require('express');
const app=express();
const path=require('path');
const PORT =process.env.PORT || 3000;
//template engine
const cors=require('cors');
app.use(express.static('public'));
app.use(express.json());
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
const connectDB=require('./config/db');
connectDB(); 


//cors

const corsOptions={
  origin:'https://sharerasp.herokuapp.com'
}

app.use(cors(corsOptions));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Routes
app.use('/',require('./routes/files'));
app.use('/api/files',require('./routes/files'));
app.use('/files/download',require('./routes/download'));
app.use('/files',require('./routes/show'));
 app.listen(PORT,() => {
   console.log(`Listening on port ${PORT}`);
})