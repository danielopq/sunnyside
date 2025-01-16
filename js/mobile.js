/**
 * Hide or shows the mobile menu.
 */
const showSubmenu = ()=>{
	if(document.getElementById("navbar-mobile-menu").getAttribute("style") == "display:flex;"){
		document.getElementById("navbar-mobile-menu").setAttribute("style","display:none;");
	}else{
		document.getElementById("navbar-mobile-menu").setAttribute("style","display:flex;");
	}
}

(()=>{
	document.getElementById("hamburger").addEventListener('click',showSubmenu,false);
})()