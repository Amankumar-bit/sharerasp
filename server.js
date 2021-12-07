require('dotenv').config();
const express =require('express');
const app=express();
const File=require('./models/file');
const fs=require('fs');
var cron = require('node-cron');
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
  origin:process.env.ALLOWED_CLIENTS
  
}

app.use(cors(corsOptions));

//node corn


cron.schedule('* * * * *',async()=>{
  console.log("Starting deletion of files");
  const pastDate=new Date(Date.now()-24*60*60*1000);
  const files= await File.find({createdAt:{$lt:pastDate}});
  if(files.length){
      console.log("reached here");
      for(const file of files){
        try{
          fs.unlinkSync(file.path);
          await file.remove();
          console.log(`successfully deleted${file.filename}`);
        }catch(err){
            console.log("while deleting file"+err);
        }
      }
  }else{
      console.log("no length");
  }
});

//Routes
app.use('/',require('./routes/files'));
app.use('/api/files',require('./routes/files'));
app.use('/files/download',require('./routes/download'));
app.use('/files',require('./routes/show'));
 app.listen(PORT,() => {
   console.log(`Listening on port ${PORT}`);
})







