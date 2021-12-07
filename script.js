const File=require('./models/file');
const fs=require('fs');
const connectDB=require('./config/db');

connectDB();
async function fetchData(){
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
}



fetchData().then(()=>{
    
    console.log("Deletion complete");
    process.exit();
    
})