var namelist=[
"He","You","She","It","I"];
var mytime=null;

function doit(){
	var bt=window.document.getElementById("bt");
	if(mytime==null){
		bt.innerHTML="End";
		show();                    
	}else{
		bt.innerHTML="Start";
		clearTimeout(mytime);
		mytime=null;                    
	}
}

function show(){
	var box=window.document.getElementById("box");
	var num=Math.floor((Math.random()*100000)) % namelist.length;
	box.innerHTML=namelist[num];
	mytime=setTimeout("show()",1);
} 