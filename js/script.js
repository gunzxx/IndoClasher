// document.body.addEventListener('mousemove', function(event){
// 	// posisi mouse
// 	// console.log(event.clientX); --> menampilkan posisi mouse pada sumbu X
// 	// console.log(event.clientY); --> menampilkan posisi mouse pada sumbu Y

// 	// ukuran windows
// 	// window.innerHeight --> menampilkan tinggi browser saja, tanpa tombole close, perkecil, dan lainnya
// 	// window.innerWidth --> menampilkan lebar browser saja, tanpa tombole close, perkecil, dan lainnya

// 	// console.log(xPost,yPost)
// 	// const xPost = Math.round((event.clientX/window.innerWidth)*255);
// 	// const yPost = Math.round((event.clientY/window.innerHeight)*255);
	
// })

setInterval(function(){
	const xPost = Math.floor((Math.random()*100+1)/100*255);
	const yPost = Math.floor((Math.random()*100+1)/100*255);

	document.body.style.backgroundColor= 'rgb('+xPost+','+yPost+',100)';
},300)

const waktuSkrg = setInterval(function(){
	const jamSkrg = new Date().getHours();
	const menitSkrg = new Date().getMinutes();
	const detikSkrg = new Date().getSeconds();
	
	const jSkrg = document.querySelector('#jamSkrg');
	const mSkrg = document.querySelector('#menitSkrg');
	const dSkrg = document.querySelector('#detikSkrg');

	jSkrg.innerHTML = jamSkrg;
	mSkrg.innerHTML = menitSkrg;
	dSkrg.innerHTML = detikSkrg;
},1000)