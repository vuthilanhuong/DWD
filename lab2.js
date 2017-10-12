var male = document.getElementById("male");
var female = document.getElementById("female");
var color =document.getElementsByClassName("color");
var action =document.getElementsByClassName("action");


male.onclick = function() {
	if (male.checked="true")
	{
		for (var i=0;i<3;i++)
		{
			color[i].parentNode.style.display="block";
			action[i].parentNode.style.display="block";
		}
		for (var i=3;i<6;i++)
		{
			color[i].parentNode.style.display="none";
			action[i].parentNode.style.display="none";
		}
	}
}

female.onclick = function() {
if (female.checked="true")
	{
		for (var i=0;i<3;i++){
			color[i].parentNode.style.display="none";
			action[i].parentNode.style.display="none";
		}
		for (var i=3;i<6;i++){
			action[i].parentNode.style.display="block";
			color[i].parentNode.style.display="block";
		}
	}
}

