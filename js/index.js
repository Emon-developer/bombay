
      
      const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
   



	const sections = document.querySelectorAll('section.category');
	const navLi = document.querySelectorAll('[data-nav-section]');

	window.addEventListener("scroll", () => {
		let current = "";
		sections.forEach(section => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;

			if (window.pageYOffset >= sectionTop - (sectionHeight) / 3) {
				current = section.id;
			}
		})

		navLi.forEach(li => {
			li.classList.remove('active');
			if (li.dataset.navSection == current) {
				li.classList.add('active');
			}
		});

		if (current == '') {
			navLi[0].classList.add('active');
		}
	})

	const deliveryOptionBtns = document.querySelectorAll('[data-delivery-option]');
	deliveryOptionBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			deliveryOptionBtns.forEach(element => {
				const elDiv = element.querySelector(':scope > div');
				elDiv.classList.remove('delivery-option-selected');
				elDiv.classList.add('deliverry-option');
			});

			const div = btn.querySelector(':scope > div');
			div.classList.add('delivery-option-selected');
		})
	})
