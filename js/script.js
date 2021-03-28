const navMobile = document.querySelector('.mobile i');

navMobile.addEventListener('click',function(){
	const menu = document.querySelector('.mobile');
	menu.classList.toggle("open");
})

const tooth = document.querySelector('.preloader');

window.addEventListener('load',function(){
	tooth.style.opacity = '0';
	setTimeout(function(){
		tooth.style.display = 'none';
	}, 300);
})