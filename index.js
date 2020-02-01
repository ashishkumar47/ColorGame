var number=9;
var box= generaterandom(number);
var select=document.querySelectorAll(".square");
var answer=document.querySelector(".answer");
var pickedcolor=box[Math.floor(Math.random()*box.length)];
var displaycolor=document.querySelector("#name");
var h1=document.querySelector("h1");
var reset=document.querySelectorAll("button");
for(var i=6;i<select.length;i++)
{
	select[i].style.display="none";
}
displaycolor.textContent= pickedcolor;
reset[0].addEventListener("click",function(){
	var newcolor=generaterandom(number);
	var newpickedcolor=newcolor[Math.floor(Math.random()*newcolor.length)];
	for(var i=0;i<newcolor.length;i++)
	{
		select[i].style.background=newcolor[i];
	}
	displaycolor.textContent=newpickedcolor;
	pickedcolor=newpickedcolor;
	this.textContent="NEW COLORS";
	h1.style.background="steelblue";
	answer.textContent="";
});
for(var i=0; i<box.length;i++)
{
	select[i].style.background=box[i];
	select[i].addEventListener("click",function(){
      var clickedcolor = this.style.background;
       if(clickedcolor===pickedcolor)
       {
           for(var j=0;j<select.length;j++)
           {
               select[j].style.background= clickedcolor;	
           }
           answer.textContent="correct";
           h1.style.background=pickedcolor;
           reset[0].textContent="play again";
       }
       else
       {
       	this.style.background="#232323";
       	answer.textContent="try again";
       }
	});
}

function generaterandom(x){
	var color=[];
  for(var i=0;i<x;i++)
  {
  	var a=Math.floor(Math.random()*256);
  	var b=Math.floor(Math.random()*256);
  	var c=Math.floor(Math.random()*256);
  	var fill="rgb("+a+","+" "+b+","+" "+c+")";
  	color.push(fill);
  	//console.log(a, b, c);
  	//console.log(fill);
  }
  return color;
}
reset[1].addEventListener("click",function(){
    this.classList.add("selected");
    reset[2].classList.remove("selected");
    reset[3].classList.remove("selected");
    number=3;
    var newcolor=generaterandom(number);
	var newpickedcolor=newcolor[Math.floor(Math.random()*newcolor.length)];
	// for(var i=0;i<newcolor.length;i++)
	// {
	// 	select[i].style.background=newcolor[i];
	// }
	displaycolor.textContent=newpickedcolor;
	pickedcolor=newpickedcolor;
	for(var i=0;i<select.length;i++)
	{
		if(newcolor[i])
		{    //select[i].style.display="block";
			select[i].style.background=newcolor[i];
		}
		else
		{
			select[i].style.display="none";
		}
	}
	h1.style.background="steelblue";
	answer.textContent="";
	reset[0].textContent="NEW COLORS";
});
reset[2].addEventListener("click",function(){
	this.classList.add("selected");
    reset[1].classList.remove("selected");
    reset[3].classList.remove("selected");
    number=6;
    var newcolor=generaterandom(number);
	var newpickedcolor=newcolor[Math.floor(Math.random()*newcolor.length)];
	// for(var i=0;i<newcolor.length;i++)
	// {
	// 	select[i].style.background=newcolor[i];
	// }
	displaycolor.textContent=newpickedcolor;
	pickedcolor=newpickedcolor;
	for(var i=0;i<select.length;i++)
	{
		
		if(newcolor[i])
		{   select[i].style.display="block";	
			select[i].style.background=newcolor[i];
		}
		else
		{
			select[i].style.display="none";
		}
		
	}
	h1.style.background="steelblue";
	answer.textContent="";
	reset[0].textContent="NEW COLORS";
});


reset[3].addEventListener("click",function(){
	this.classList.add("selected");
	reset[2].classList.remove("selected");
	reset[1].classList.remove("selected");
	number=9;
	var newcolor=generaterandom(number);
	var newpickedcolor=newcolor[Math.floor(Math.random()*newcolor.length)];
	displaycolor.textContent=newpickedcolor;
	pickedcolor=newpickedcolor;
	//select[i].style.display="block";
	for(var i=0;i<select.length;i++)
	{
	select[i].style.display="block";	
	select[i].style.background=newcolor[i];			
	}
	h1.style.background="steelblue";
	answer.textContent="";
	reset[0].textContent="NEW COLORS";
});
