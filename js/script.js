	//Javascript base
	//menu mobile
const navMobile = document.querySelector('.mobile i');

navMobile.addEventListener('click',function(){
	const menu = document.querySelector('.mobile');
	menu.classList.toggle("open");
})
	//preloader
const tooth = document.querySelector('.preloader');

window.addEventListener('load',function(){
	tooth.style.opacity = '0';
	setTimeout(function(){
		tooth.style.display = 'none';
	}, 300);
})

		//jquery
		//slides

$(function(){
		// centermode: Fica centralizado em um item
		//slides to show: limite de slides por janela
		//arrow: some as setas de navegação
	$('.wraper-mosaico').slick({
		centerMode: false,
		slidesToShow: 5,
		arrows: false,
		responsive:[

		{
			breakpoint:768,
			settings:{
				arrows: false,
				centerMode: true,
				slidesToShow: 3
			}
		},
		{
			breakpoint:580,
			settings:{
				arrows: false,
				centerMode: true,
				slidesToShow:2
			}
		},
		{
			breakpoint:380,
			settings:{
				arrows: false,
				centerMode: true,
				slidesToShow:1
			}
		}

		]
	});

	$('#tratamentos .container').slick({
		centermode:false,
		slidesToShow:3,
		arrows:false,
		infinite: false,
		responsive:[

		{
			breakpoint:768,
			settings:{
				arrows:false,
				dots:true,
				infinite:false,
				centerMode:false,
				slidesToShow:2
			}
		},
		{
			breakpoint:480,
			settings:{
				arrows:false,
				dots:true,
				infinite:false,
				centerMode:false,
				slidesToShow:1
			}
		}

		]
	})

	$('#depoimentos .container').slick({
		centermode:false,
		slidesToShow:1,
		arrows:false,
		dots:true,
		infinite: false
	})
});