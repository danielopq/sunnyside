// JavaScript Document
window.onload=start;

function start(){
	document.getElementById("hamburger").addEventListener('click',showSubmenu,false);
}

function showSubmenu(){
	if(document.getElementById("submenu-mobile").getAttribute("style") == "display:flex;"){
		document.getElementById("submenu-mobile").setAttribute("style","display:none;");
	}else{
		document.getElementById("submenu-mobile").setAttribute("style","display:flex;");
	}
	
}