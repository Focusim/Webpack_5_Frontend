(function (){
	const header = document.querySelector('header.header');
	const burger = header.querySelectorAll('[data-burger-btn]');
	burger.forEach(element => {
		element.addEventListener('click', (event) => {
			document.body.classList.toggle('burger-menu--open')
		});
	});
}());
