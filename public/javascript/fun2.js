// qr code implementation
// var getqr=document.querySelector("#qr");
window.pass=""
function displaypassinput(){

	let uid= localStorage.getItem("link").slice(38);
	
	$.ajax({

		url:"/api/files/checkauth",
		method:"GET",
		contentType:"application/json",
		data:{getuuid:uid},
		success:function(result){
		window.pass=result.hashcode;
		if(result.text==false){
			document.querySelector(".inpass").style.display="none";
			document.querySelector(".access").style.display="none";
		}else{
			document.querySelector(".inpass").style.display="inline";
			
			document.querySelector(".access").style.display="inline";
			
			document.querySelector(".send-btn-container").style.background="grey";
			document.querySelector(".send-btn-container").setAttribute("disabled", "");
			
		}
		  
		

		  
		}
		})

}


document.querySelector(".access").addEventListener("click",(e)=>{
	e.preventDefault();
	let gettext=document.querySelector('.inpass').value;
	if(gettext===window.pass)
{
	
	document.querySelector("#passmsg").innerHTML=`<span style="color:greenyellow"> Hooray! You can download now</span>`;
	document.querySelector(".inpass").style.display="none";
			document.querySelector(".access").style.display="none";
	document.querySelector(".send-btn-container").removeAttribute("disabled");
	document.querySelector(".send-btn-container").style.background="linear-gradient(to right, rgb(255, 0, 55) , rgb(255, 94, 0))";
	
}	else{
	document.querySelector("#passmsg").innerHTML=`<span style="color:red">Sorry! wrong Passcode</span>`;
	document.querySelector(".inpass").style.boxShadow="0 0 10px rgb(42, 44, 44)";
	
    
}

});

function qrcodedisplay(){
// e.preventDefault();

displaypassinput();

// console.log("reached here");
// 

//  uploads
// !uploads/.gitkeep
// console.log(localStorage.getItem("link"));
var qrcode = new QRCode(document.getElementById("qrcode")
, {
	width : 300,
	height : 300,

});

function makeCode () {		
	var elText = localStorage.getItem("link");
    
	// var elText = "http://jindo.dev.naver.com/collie";
	// console.log("text"+elText);
	if (!elText) {
		alert("Input a text");
		return;
	}
	
	qrcode.makeCode(elText);
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

};

