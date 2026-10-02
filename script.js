const menuIcon=document.querySelector(".menu-icon")
const links = document.querySelector(".links")
menuIcon.addEventListener("click",()=>{
	links.classList.toggle("mobile")
})
