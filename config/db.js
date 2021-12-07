require('dotenv').config({path:'./config/.env'});
const mongoose=require('mongoose');





function connectDB(){

    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,
    useUnifiedTopology:true});
    const connection=mongoose.connection;
         
    // mongoose.connection.on('open', () => {
    //     console.log('Connected to mongodb server.');
    //     mongoose.connection.db.listCollections().toArray(function (err, names) {
    //       console.log(names);
    //      });
    //   })
    try{
    connection.once('open',()=>{
        console.log('Database connected');
    })}
    catch{
        console.log('Connection failed.');
    }
 }

 module.exports=connectDB;