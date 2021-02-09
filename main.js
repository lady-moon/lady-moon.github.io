window.onscroll = function showHeader() {
	const header = document.querySelector('header');
	const headerA = document.querySelectorAll('.header_menu a');
	const headerLi = document.querySelectorAll('.header_menu li');
	const headerUl = document.querySelector('.header_menu ul');
	const burger = document.querySelectorAll('.burger__line');

	if(window.pageYOffset > 20 && document.documentElement.clientWidth > 767){
		headerUl.style.fontSize = "2em";
		for(let i = 0; i < headerLi.length; i++){
			headerLi[i].style.padding = "0 0 5px";
			headerLi[i].style.transition = ".3s";
			headerLi[i].classList.add('header_scroll_menu');
		}
		for(let i = 0; i < headerUl.length; i++){
			headerLi[i].style.transition = ".3s";
		}
	} else{
		headerUl.style.fontSize = "";

		for(let i = 0; i < headerLi.length; i++){
			headerLi[i].style.padding = "";
			headerLi[i].classList.remove('header_scroll_menu');
		}
	}
	if(window.pageYOffset > 20){
		header.style.background = "#000000a6";
		header.style.color = "#fff";
		for(let i = 0; i < headerA.length; i++){
			headerA[i].style.color = "#fff";
		}
		for(let i = 0; i < burger.length; i++){
			burger[i].style.background = "#fff";
		}
	} else{
		header.style.background = "";
		header.style.color = "";
		for(let i = 0; i < headerA.length; i++){
			headerA[i].style.color = "";
		}
		for(let i = 0; i < burger.length; i++){
			burger[i].style.background = "";
		}
	}
}

// якорня ссылка плавный переход
const anchors = document.querySelectorAll('a[href^="#"]');
for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
	const header = document.querySelector('header');
	const varcheckbox = document.getElementById('checked');
	const headerUl = document.querySelector('.header_menu');
	const headerA = document.querySelectorAll('.header_menu a');
	const burger = document.querySelectorAll('.burger__line');
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        varcheckbox.checked = false;
		headerUl.style.position = "";
		headerUl.style.top = "";
		header.style.minHeight = "";
		document.body.style.overflow = "";
		if( window.pageYOffset < 150 ){
			header.style.background = "";
			header.style.color = "";
			for(let i = 0; i < headerA.length; i++){
				headerA[i].style.color = "";
			}
			for(let i = 0; i < burger.length; i++){
				burger[i].style.background = "";
			}
		}
    })
}

// burger menu
function checkFluency(){
	const header = document.querySelector('header');
	const varcheckbox = document.getElementById('checked');
	const headerUl = document.querySelector('.header_menu');
	const headerA = document.querySelectorAll('.header_menu a');
	const burger = document.querySelectorAll('.burger__line');
	if( varcheckbox.checked == true){
		headerUl.style.top = "80px";
		header.style.minHeight = "100vh";
		document.body.style.overflow = "hidden";
		if( header.style.background != "#000000a6"){
			header.style.background = "#000000a6";
			header.style.color = "#fff";
			for(let i = 0; i < headerA.length; i++){
				headerA[i].style.color = "#fff";
			}
			for(let i = 0; i < burger.length; i++){
				burger[i].style.background = "#fff";
			}
		}
	}
	if( varcheckbox.checked == false){
		headerUl.style.position = "";
		headerUl.style.top = "";
		header.style.minHeight = "";
		document.body.style.overflow = "";
		if( window.pageYOffset < 150 ){
			header.style.background = "";
			header.style.color = "";
			for(let i = 0; i < headerA.length; i++){
				headerA[i].style.color = "";
			}
			for(let i = 0; i < burger.length; i++){
				burger[i].style.background = "";
			}
		}
	}

	let links = document.querySelectorAll('a[href^="#"]');
	for (let i=0; i<links.length; i++) {
		links[i].addEventListener( "click" , function(){
		})
	}
}