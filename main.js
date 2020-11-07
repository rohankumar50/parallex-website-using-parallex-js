//Select element function
let scene = document.getElementById('scene');

let parallex = new Parallax(scene);

var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		dynamicBullets: 'true',
		clickable: 'true'
	}
	// autoplay: {
	// 	delay: 5000
	// }
});
