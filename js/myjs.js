AOS.init({
	once: false,
});

// Active Menu Ketika di Klik
// 1. tangkap element dengan class menu
const menu = document.querySelector(".navbar-nav");

// 2. jika element dengan class menu diklik
menu.addEventListener('click', function (e) {
	// 3. maka ambil element apa yang diklik oleh user
	const targetMenu = e.target;

	// 4. lalu cek, jika element itu adalah link dengan class menu__link
	if (targetMenu.classList.contains('nav-link')) {

		// 5. maka ambil menu link yang aktif
		const menuLinkActive = document.querySelector("ul li a.active");

		// 6. lalu cek, Jika menu link active ada dan menu yang di klik user adalah menu yang tidak sama dengan menu yang aktif
		// cara ceknya yaitu dengan membandingkan value attribute hrefnya
		if (menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {

			// 7. maka hapus class active pada menu yang sedang aktif
			menuLinkActive.classList.remove('active');
		}

		// 8. terakhir tambahkan class active pada menu yang di klik oleh user
		targetMenu.classList.add('active');
	}
});


// Untuk ketika di scroll active pada menu nav-link
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
	target: '#navbarNav'
});

// Auto hide collpase ketika mode tampilan device smartphone
var navbarNav = document.getElementById('navbarNav');
var navLinks = navbarNav.getElementsByClassName('nav-link');

for (var i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener('click', function () {
		navbarNav.classList.remove('show');
	});
}