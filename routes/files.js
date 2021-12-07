const router=require('express').Router();
const multer=require('multer');
const path=require('path'); 
const File=require('../models/file');
const {v4:uuid4}=require('uuid');

require('dotenv').config({path:'./config/.env'});

let storage=multer.diskStorage({
    destination:(req,file,cb)=>cb(null,'uploads/'),
    filename:(req,file,cb)=>{
const uniquename=`${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}`;
    cb(null,uniquename);
    },
});

let upload=multer({
    storage,
    limits:{fileSize:1000000*100},
    }).single('myfile');



    router.get("/checkauth",(req,res)=>{

        let getu=req.query.getuuid;

    File.find({uuid:getu},function(err,result){
        if(err){
           console.log(err);
        }else{
            
         res.send({text:result[0].isprotectionon,hashcode:result[0].protection});
        }
    })
    
    
    });

router.get('/',(req,res)=>{

    return res.render('home',{});
});





router.post('/',(req,res)=>{
    //validate request
    //store file
   upload(req,res, async (err)=>{
    
    if(!req.file){
        return res.json({error:'All fields are required'});
    }
    if(err){
        return res.status(500).send({error:err.message})
    }

    const file=new File({
        filename:req.file.filename,
        uuid:uuid4(),
        path:req.file.path,
        size:req.file.size,
        protection:generateP(),
        isprotectionon:false
    });

    const response=await file.save();

return res.json({file:`${process.env.APP_BASE_URL}/files/${response.uuid}`});
   });
    //store into database


    //response
});


// 



function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        pass += str.charAt(char)
    }
      
    return pass;
  }

// 
router.post('/send',async (req,res)=>{
    const{uuid,emailTo,emailFrom}=req.body;
    
    if(!uuid||!emailTo||!emailFrom){
        return res.status(422).send({error:'All fields are required'});
    }
    // console.log(uuid);
    const file=await File.findOne({uuid:uuid});
    // console.log(file);
    if(file.sender){
        return res.status(422).send({error:'Email already sent'});
    }
    // 
    
    let protect="";
    let iso=false;
    File.find({uuid:uuid},function(err,result){
        if(err){
    console.log(err);
        }else{
      iso=result[0].isprotectionon;
      protect=result[0].protection;

    //   console.log(iso);
        }
    });

    

    // 
    file.sender=emailFrom;
    file.receiver=emailTo;
    const response=await file.save();
    
    //send email
    
    const sendMail=require('../services/emailservice');
    sendMail({
        from:emailFrom,
        to:emailTo,
        subject:'You got a link for new files from '+emailFrom,
        text:`${emailFrom} shared a file with you.`,
        html:require('../services/emailTemplate')({
            emailFrom:emailFrom,
            downloadLink:`${process.env.APP_BASE_URL}/files/${file.uuid}`,
            size:parseInt(file.size/1000)+'KB',
            expires:'24 hours',
            ison:iso,
            protection:protect
        })
    })

    return res.send({success:true});
    });



// vggggggggggggg

router.post("/secure",(req,res)=>{
let getu=req.body.getuuid;
let check=req.body.ison;
// console.log(getu+"check"+check);


if(check==true){
    // console.log("g"+getu);
File.updateMany({uuid:getu},{$set:{isprotectionon:true}},(err,result)=>{});



}
else{
File.updateMany({uuid:getu},{$set:{isprotectionon:false}},(err,result)=>{});
 
}


File.find({uuid:getu},function(err,result){
    if(err){
console.log(err);
    }else{

        if(check==true){
        res.send({text:result[0].protection});
        }
        else{

        res.send({text:""});
        
        }
    }
})
})


// ggggggggggggggggggg






    
module.exports=router;

// 50.58