document.body.addEventListener('mousemove', function(event){
	// posisi mouse
	// console.log(event.clientX); --> menampilkan posisi mouse pada sumbu X
	// console.log(event.clientY); --> menampilkan posisi mouse pada sumbu Y

	// ukuran windows
	// window.innerHeight --> menampilkan tinggi browser saja, tanpa tombole close, perkecil, dan lainnya
	// window.innerWidth --> menampilkan lebar browser saja, tanpa tombole close, perkecil, dan lainnya

	const xPost = Math.round((event.clientX/window.innerWidth)*255);
	const yPost = Math.round((event.clientY/window.innerHeight)*255);
	console.log(xPost,yPost)
	document.body.style.backgroundColor= 'rgb('+xPost+','+yPost+',100)';
})