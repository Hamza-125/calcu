let inpscr = document.getElementById('inpscr');
 let buttons = document.querySelectorAll('button')
 let txtarea=document.getElementById('txtarea')
buttons.forEach((e)=>{
	e.addEventListener('click' , (e)=>{
buttonText= e.target.innerText;
let his;
let equalop
if(buttonText==='X'){
		buttonText="*";
		inpscr.value+=buttonText
	}
	else if(buttonText=='C'){
		inpscr.value=" "
	}
else if(buttonText=='='){
	his=inpscr.value
	console.log(his)
		inpscr.value=eval(inpscr.value)
		equalop=inpscr.value
		console.log(equalop)
		txtarea.value+= his+"=" +equalop+'\r\n' 


	
	}
	else if(inpscr.value[0]==="%"){
		alert("wrong")
	}
	else if(buttonText=='Del'){
		let s=inpscr.value.slice(0,-1);
		inpscr.value=s;
	}
	else if(buttonText=="Clear"){
		txtarea.value=""
	}
	else{
		inpscr.value+=buttonText
			}
	})
})
