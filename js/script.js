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
},500)

const angka = [0,1,2,3,4,5,6,7,8,9]

const waktuSkrg = setInterval(function(){
	let jamSkrg = new Date().getHours();
	let menitSkrg = new Date().getMinutes();
	let detikSkrg = new Date().getSeconds();
	
	const jSkrg = document.querySelector('#jamSkrg');
	const mSkrg = document.querySelector('#menitSkrg');
	const dSkrg = document.querySelector('#detikSkrg');

	for (i=0;i<angka.length;i++){
		if (detikSkrg == angka[i]){
			detikSkrg = '0'+detikSkrg;
		}else if (menitSkrg == angka[i] ){
			menitSkrg = '0'+menitSkrg;
		}else if(jamSkrg == angka[i]){
			jamSkrg = '0'+jamSkrg;
		}
	}

	jSkrg.innerHTML = jamSkrg;
	mSkrg.innerHTML = menitSkrg;
	dSkrg.innerHTML = detikSkrg;
},1000)