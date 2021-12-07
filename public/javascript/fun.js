// import mongoose from 'mongoose';
const dropzone=document.getElementById("div-1");
const lcb=document.getElementById("left-con-but");
const dinfile=document.getElementById("infile");
const dbrowse=document.getElementById("browse");
const togbutdiv=document.querySelector(".pass-tog");

window.checked=false;
let checkanother=true;
const host="https://sharerasp.herokuapp.com";
const uploadURL=host+"/api/files";
const emailURL=host+"/api/files/send";
window.protection=false;
const logo=document.querySelector(".wrapper-logo");
const send=document.querySelector("#emailform");
const progress=document.querySelector(".div-2");

var responselink="";

window.puuid="";

const cp=document.querySelector(".copypaste");


send.addEventListener("submit",(e)=>{
e.preventDefault();

document.querySelector(".msg").style.display="none"; 
const sender=document.getElementById("ymail").value;
const receiver=document.getElementById("rmail").value;
const getuuid=responselink.slice(28);
// const url = fileURL.value;

  const formData = {
    uuid: getuuid,
    emailTo: receiver,
    emailFrom: sender,
  };

if(receiver==="" ||sender===""){
  document.querySelector(".msg").style.display="block";      
        
  document.querySelector(".msg").innerText="Invalid credentials";

  return;

}

    // console.table(formData);
  fetch(emailURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        document.querySelector(".msg").style.display="block";
        
        document.querySelector(".msg").style.color="green";
        document.querySelector(".msg").innerText="File successfully sent";
        window.alert("File successfully sent.");
        document.querySelector(".div-2").style.display="none";
        document.querySelector(".div-3").style.display="none";  
        document.querySelector(".pass-tog").style.display="none";  
        document.querySelector(".div-4").style.display="none";
        document.querySelector(".div-5").style.display="none";
        document.querySelector(".div-6").style.display="none";
        
        document.querySelector(".div-6").style.display="none";
        
        dbrowse.value="";
      
        
        
        document.querySelector(".wright-con-drop").style.height="310px";
        
        document.querySelector("#rmail").value="";
        document.querySelector("#ymail").value="";
      }else{
        document.querySelector(".msg").display="block";      
        
        document.querySelector(".msg").innerText="Newtwork Error";
      }
    });

})

cp.addEventListener("click",(e)=>{
  e.preventDefault();
  myFunction();
})

lcb.addEventListener("click",(e)=>{  
  e.preventDefault();

  document.getElementById('target1').scrollIntoView({
    behavior: 'smooth'
  });
});


dropzone.addEventListener("dragover",(e)=>{  
  e.preventDefault();
if(!logo.classList.contains("wls")){
logo.classList.add("wls");
}
});

dropzone.addEventListener("dragleave",()=>{
logo.classList.remove("wls");

});


dropzone.addEventListener("drop",(e)=>{
  e.preventDefault();
progress.style.display='block';
  const files=e.dataTransfer.files;
  if(files.length){
    dinfile.files=files;
  uploadfile();
  }
});


dbrowse.addEventListener("click",(e)=>{
  e.preventDefault();
  dinfile.click();
  
});

dinfile.addEventListener("change",(e)=>{
  e.preventDefault();
  logo.classList.add("wls");
  // console.log("hi");
  
progress.style.display='block';
  uploadfile();
  
});

 window.firsttime=true;
const uploadfile=()=>{
  
 
    document.querySelector(".msg").style.display="none";
         
 
 
  // checkanother=true; 
  



  

// document.querySelector(".slider").style.transform="translateX(45px)";

  
  const file=dinfile.files[0];
  const formdata=new FormData();
  formdata.append("myfile",file);
  const xhr=new XMLHttpRequest();

  xhr.onreadystatechange=()=>{
if(xhr.readyState===XMLHttpRequest.DONE){
  // console.log(xhr.response);
   
 let rl= Object.keys(xhr.response).map(function(k){return xhr.response[k]});
let textlink=rl.toString();
let t1=textlink.replace(/{/g,'');
let t2=t1.replace(/}/g,'');
let t3=t2.replace(/,/g,'');
let t4=t3.replace(/"/g,'');


let stringWithoutComma =t4; 
responselink=stringWithoutComma.slice(5);

//  window.link=responselink;
localStorage.setItem("link",""+responselink)
// console.log("iiii"+ localStorage.getItem("link"));



document.querySelector(".copytext").value=""+responselink;
    // console.log(stringWithoutComma);
    if(window.firsttime==false&&window.isclicked==true){
      afterfirst();
     }

     window.firsttime=false;

}

  }

  xhr.upload.onprogress=updateprogress;

  xhr.open("POST",uploadURL);
  xhr.send(formdata);

}









const updateprogress=(e)=>{
  
  document.querySelector(".wright-con-drop").style.height="340px";
  const percent=Math.round((e.loaded/e.total)*100);
  // console.log(percent);
  
  // if(percent<15){
    document.querySelector(".bg-process").style.width=""+percent+"%";
    
    if(percent==100){
      document.querySelector(".bg-process").innerText="Uploaded "+ percent+"%"; 
      document.querySelector(".bg-process").style.textAlign="center";
      
  // document.querySelector(".wright-con-drop").style.height="650px"; 
         displaycopy();
    }else{
      document.querySelector(".bg-process").innerText=percent+"%";
  
    }
}


const displaycopy=()=>{
  
 
  document.querySelector(".wright-con-drop").style.height="690px"; 
document.querySelector(".div-3").style.display="block";
document.querySelector(".pass-tog").style.display="flex";
document.querySelector(".div-4").style.display="block";
document.querySelector(".div-5").style.display="block";
document.querySelector(".div-6").style.display="block";
// console.log(responselink);

// }
 
}

function myFunction() {
  var copyText = document.querySelector(".copytext");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 

  navigator.clipboard.writeText(copyText.value);
  
  alert("Copied the text: " + copyText.value);
}
















var getqr=document.querySelector("#qr");


getqr.addEventListener("click",(e)=>{
e.preventDefault();
// console.log("reached here");
var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 100,
	height : 100
});

function makeCode () {		
	var elText = document.getElementById("text");
	
	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}
	
	qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
	on("blur", function () {
		makeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			makeCode();
		}
	});

});




// toggle functions


window.isclicked=false;

function afterfirst(){
  window.isclicked=true;
 
  let uid= localStorage.getItem("link").slice(28);


  let part1=document.querySelector(".part1");
   
  $.ajax({

    url:"/secure",
    method:"POST",
    contentType:"application/json",
    data:JSON.stringify({getuuid:uid,ison:true}),
    success:function(result){
      part1.innerText="PassCode : "+result.text;
      
    
      
    }
    })
    
  
}


function mytoggle(){


 let uid= localStorage.getItem("link").slice(28);


 let part1=document.querySelector(".part1");
 let text=part1.innerText;
 if(window.isclicked==true){
  window.isclicked=false;

  
  $.ajax({

    url:"/secure",
    method:"POST",
    contentType:"application/json",
    data:JSON.stringify({getuuid:uid,ison:false}),
    success:function(result){
      part1.innerText="Do you want file password protected?";
    
      
    }
    })
    
    
  // console.log("open");
}else{
  window.isclicked=true;
  
$.ajax({

  url:"/secure",
  method:"POST",
  contentType:"application/json",
  data:JSON.stringify({getuuid:uid,ison:true}),
  success:function(result){
    part1.innerText="PassCode : "+result.text;
  }
  })
  
  
}


// $.ajax({

// url:"/secure",
// method:"POST",
// contentType:"application/json",
// data:JSON.stringify({getuuid:uid}),
// success:function(result){
//   console.log(result);
// }
// })







}



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