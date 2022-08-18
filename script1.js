// var x = 20;
// var y = 100;
// console.log ('Satria Pintar');
// console.log ('isi dari satria x pintar adalah' + x + y );

// var nama = prompt ('Nama Saya : ');
// alert (nama);

// alert (' halo selamat datang');
// var masuk = true;

// while (masuk) {
//     var indentitas = prompt (' masukan nama ');
//     alert('Hai' + indentitas);

//     masuk = confirm ('mau coba lagi ?');
// }

// alert ('Thanks for your respone ^-^/');


//Perulangan Pentambahan (inkrement)

// var TambahAngka = 1;
// var TambahAngkot= 20;

// while (TambahAngka <= TambahAngkot){
//     console.log('Angkot No.' + TambahAngka + 'beroprasi degan baik.');
//     TambahAngka++
// }

//Perulangan Menggunakan For

// var TambahAngka = 1;
// var TotalAngkot= 12;
// var AngkotAktif = 10;

// while ( TambahAngka <= AngkotAktif ){
//     console.log( 'Angkot No.' + TambahAngka + 'beroprasi degan baik.');

//     TambahAngka++
// }
// for ( TambahAngka; TambahAngka <= TotalAngkot;    TambahAngka++ ){
//     console.log( 'Angkot No.' + TambahAngka + 'sendang tidak beroprasi');

// }

// var TambahAngka = 1;
// var TotalAngkot= 10;
// var AngkotAktif = 5;

// while ( TambahAngka <= AngkotAktif ){
//     console.log( 'Angkot No.' + TambahAngka + 'beroprasi degan baik.');

//     TambahAngka++
// }
// for ( TambahAngka=AngkotAktif +1; TambahAngka <= TotalAngkot;    TambahAngka++ ){
//     console.log( 'Angkot No.' + TambahAngka + 'sendang tidak beroprasi');

// }


// var taxi = 1;
// var totalTaxi = 10;
// var taxiAktif =6;

// for (taxi; taxi <= totalTaxi; taxi++ ){
//     if ( taxi <= taxiAktif ){
//         console.log("Taxi Nomer" +taxi+ "Sedang Berjalan Dengan Baik");
//     } else console.log("Taxi Nomer" + taxi + "Sedang Masa Perbaikan");
// }

// var angkot = 1;
// var totalAngkot= 10;
// var angkotAktif= 6;

// for (angkot; angkot <= totalAngkot; angkot++){
//     if ( angkot <= angkotAktif && angkot !==5){
//         console.log("Angkot Nomer " + angkot + " Sedang Beroprasi");
//     } else if ( angkot===5 || angkot === 8 || angkot === 10){
//         console.log("Angkot Nomer " + angkot + " Sedang Lembur");
//     } else {
//         console.log("Angkot Nomer " + angkot + " Sedang Tidak Beroprasi");
//     } 
// }

// var angkot = 1;
// var totalAngkot= 10;
// var angkotAktif= 6;

// for (angkot;  angkot <= totalAngkot; angkot ++){
//  if (angkot <= angkotAktif && angkot !== 5 ) {
//  console.log("Angkot Nomer " + angkot + " Sedang Beroprasi dengan baik");
//  }else if(angkot ===8 || angkot ===10 || angkot === 5) {
//  console.log ("Angkot Nomer " + angkot + " Sedang Lembur Malam");
//  }else{
//  console.log("Angkot Nomer " + angkot + " Sedang Rusak");
//  }
// }

// var item = prompt (' masukan nama / varian makanan : \n (cth: ayam bakar, nasi goreng, ayam gepuk, biawak rebus, tokek bakar, capcay cicak) ');

// switch (item){
//     case 'ayam bakar' :
//     case 'nasi goreng' :
//     case 'ayam gepuk' :
//     alert ('Ini adalah categori makanan sehat');
//     break;
//     case 'biawak rebus' :
//     case 'tokek bakar'  :
//     case 'capcay cicak' :
//     alert ('Ini adalah categori makanan tidak sehat');
//     break;
//     default :
//     alert ('Maaf makanan / minuman tidak ada di daftar menu');
//     break;
// }

// var s = '';
// for (var i = 0; i < 10; i++){
//     for (var j = 0; j < 10; j++){
//         s = s + '*';
//     }
//     s = s + '\n';
// }
// console.log(s);

// var s = '';
// for (var i = 0; i < 10; i++){
//     for (var j = 0; j <= i; j++){
//         s = s + '*';
//     }
//     s = s + '\n';
// }
// console.log(s);

// const pascalTriangle = n => {
//     const arr = []

//     for (let i = 0; i < n; i++) {
//         const row = [1]

//         for (let j = 1; j < i; j++) {
//             row.push(arr[i-1][j-1] + arr[i-1][j])
//         }

//         if( i > 0 ) row.push(1)

//         arr.push(row)
//     }

//     return arr
// }

// console.log(pascalTriangle(10))

// var tanya = true;
// while ( tanya ){
// // menangkap pilihan player
// // var tanya = true;
// var p = prompt ('pilih : gajah, semut, orang');

// // menangkap pilihan computer
// //membangkitkan bilangan random
// var computer = Math.random();

// if (computer < 0.34){
//     computer = 'gajah';
// } else if ( computer >= 0.34 && computer < 0.67){
//     computer = 'orang';
// } else{ 
//     computer = 'semut';
// }

// var hasil = '';
// // menentukan rules
// if ( p == computer){
//     hasil = 'SERI';
// } else if (p == 'gajah'){
//     hasil = (computer == 'orang') ? 'Menang!' : 'Kalah!';
// } else if (p == 'orang'){
//     hasil = (computer == 'gajah') ? 'Kalah!' : 'Menang!';
// } else if (p == 'semut'){
//     hasil = (computer == 'orang') ? 'Menang!' : 'Kalah';
// } else{
//     hasil = 'Anda memasukan pilihan yang salah!!';
// }

// // tampilkan hasil

// alert ('Kamu memilih : ' + p + ' Sedangkan Komputer Memimilih ' + computer + '\nMaka hasilnya : kamu ' + hasil);

// tanya = confirm ('LAGI ?');
// }

// alert ('Terimakasih sudah bermain.');


// function jumlahVolumeKubus (a,b){

//    var volumA;
//    var volumB;
//    var Total;

//    volumA = a * a * a;
//    volumB = b * b *b ;

//    Total = volumA + volumB;

//    return Total;
// }

// alert(jumlahVolumeKubus (10,10));

// parameter JS

// function tambah(a,b){
//     return a + b;
// }

// var a = parseInt(prompt('masukkan nilai 1 :'));
// var b = parseInt(prompt('Masukkan nilai 2 :'));
// var hasil = tambah(a*2,b*2);
// console.log(hasil);

// argumen JS

// function tambah(){
//     var hasil = 0;
//     for( var i = 0; i < arguments.length; i++){
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// var cobain = tambah (1,2,3,4,5);
// console.log(cobain);

//REFACTORING

//  function jumlahVolumeKubus (a,b){
// return a * a * a + b * b *b;
//  }
// alert( jumlahVolumeKubus(8,3));

// var a = 1; // variabel global

// function test(a){  //variabel local
//     console.log(a);
// }

// test(2); // variabel global
// console.log(a); // variabel global

// // Looping JS
// function cetakAngka(n){
//     for ( var i = n; i >= 1; i-- ){
//         console.log(i);
//     }
// }
// cetakAngka(13);

// rekursif JS
// function faktorial(n){
//     if (n === 0) return;
//     console.log(n);
//     return n * faktorial(n-1);
// }

// faktorial(10);

// tampilkan semua isi array

// var array = ["Yusuf", "Satria" , "Borneo" , "Ganteng"];

// for (var i = 0; i < array.length; i++) {
//     console.log(' Mahasiswa ke-' + (i+1) + ':' + array [i]);
// }

// var array = ["Yusuf", "Satria" , "Borneo" , "Ganteng"];

// 1. Join

// console.log(array.join (' - '));

// 2. push & pop
// array.pop();

// array.push('Madu');

// console.log(array.join (' - '));

//3. unshift & shift
// array.unshift('Bebek');
// array.shift();

//4. splice
// Contekan, Splice (indeks awal, Mau DIhapus Berapa, Elemen Baru)
// array.splice ( 1, 2, 'Mouse');

//5. Slice
// var array2 = array.slice(1,3);
// console.log(array.join (' - '));
// console.log(array2.join (' - '));

// 6. forEach
// var angka = [1,2,3,4,6,7,9];
// var nama = ["Yusuf", "Satria" , "Borneo" , "Ganteng"];

// nama.forEach(function(e, i){
//     console.log(' Mahasiswa Ke -' + (i+1) + 'adalah : ' + e);
// });


// 7. map
// var angka = [1,2,3,4,6,7,9];
// var angka2 = angka.map (function(e){
//     return e * 2;
// });

// console.log(angka2.join(' - '));

// 8. sort
// var angka = [1,2,3,10,4,30,6,7,9];
// angka.sort(function(a,b){
//     return a-b
// });
// console.log(angka.join(' - '));

// 9. filter
// var angka = [1,2,3,10,4,30,6,7,9];
// var angka2 = angka.filter(function(x){
//     return x > 9;
// });

// console.log(angka2.join(' - '));

// var penumpang = [];
// var tambahPenumpanmg = function (namaPenumpanmg, penumpang) {
//     // Jika angkot kosong
//     if (penumpang.length == 0) {
//         // tambah penumpang di awal array
//         penumpang.push(namaPenumpanmg);
//         // kembalikan isi array & keluar dari function
//         return penumpang;
//         // else
//     } else {
//         // telusuri seluruh kursi dari awal
//         for (var i = 0; i < penumpang.length; i++) {
//             // jika ada kursi kosong
//             if (penumpang[i] == undefined) {
//                 // tambah penumpang di kursi tersebut
//                 penumpang[i] = namaPenumpanmg;
//                 // kembalikan isi array & keluar dari function
//                 return penumpang;
//             }
//             // jika sudah ada nama yang sama
//             else if (penumpang[i] == namaPenumpanmg) {


//                 // tampilkan pesan kesalahan
//                 console.log(namaPenumpanmg + ' sudah ada di dalam angkot ');
//                 // kembalikan isi array & keluar dari function
//                 return penumpang;
//             }
//             // jika seluruh kursi terisi
//             else if (i == penumpang.length - 1) {
//                 // tambah penumpang di akhir array
//                 penumpang.push(namaPenumpanmg)
//                 // kembalikan isi array & keluar dari function
//                 return penumpang;
//             }
//         }
//     }

// }

// var hapusPenumpang = function(namaPenumpang, penumpang){
//     if (penumpang.length == 0 ){
//         console.log('Angkot masih kosong.');
//     }else{
//         for ( var i = 0; i < penumpang.length; i++){
//             if (penumpang[i] == namaPenumpang ){
//                 penumpang[i] = undefined;
//             } else if (i == penumpang.length -1){
//                 console.log(namaPenumpang + ' Tidak ada didalam angkot.');
//             return penumpang;
//             }
//         }
//     }
// }


// membuat object

// var mhs = {
//     nama : "Yusuf Satria Borneo",
//     umur : 23,
//     ips : [3.40, 3.55],
//     alamat : {
//             jalan : "Yossudarso 1",
//             kota : "Kutai Timur",
//             provinsi : "Kalimantan Timur"
//     }
// };

// // function declaration
// function objectMahasiswa (nama, nim, email, jurusan){
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nim = nim;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }

// var mhs3 = objectMahasiswa('Yusuf','24060118110055','yusufsatriaborneo@gmail.com','informatika');

// // construtor
// function objectMahasiswa (nama, nim, email, jurusan){
//     // var this = {};
//     this.nama = nama;
//     this.nim = nim;
//     this.email = email;
//     this.jurusan = jurusan;
//     // return this;
// }

// var mhs5 = new objectMahasiswa('bambang','24060118110055','yusufsatriaborneo@gmail.com','informatika');


// Belajar this
// var a = 10;
// console.log(window.a);

//cara 1 -  function declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengembalikan object Global

//cara 2 -  object literal\
// var object = {a : 10, nama : 'Yusuf Satria Borneo'};
// object.halo = function(){
//     console.log(this);
//     console.log('halo');
// }
// object.halo();
// this mengembalikan object

//cara 3 -  Constructor
// function Halo(){
//     console.log(this);
//     console.log('halo');
// }
// var object1 = new Halo();
// var object2 = new Halo();
// this mengembalikan object yang baru dibuat

// membuat object Angkot
// function Angkot(sopir, rute, penumpang, kas) {
//     this.sopir = sopir;
//     this.rute = rute;
//     this.penumpang = penumpang;
//     this.kas = kas;

//     this.penumpangNaik = function (namaPenumpang) {
//         this.penumpang.push(namaPenumpang);
//         return this.penumpang;
//     }

//     this.penumpangTurun = function (namaPenumpang, bayar) {
//         if (this.penumpang.length === 0) {
//             alert('angkot masih kosong!');
//             return false;
//         }

//         for (var i = 0; i < this.penumpang.length; i++) {
//             if (this.penumpang[i] == namaPenumpang) {
//                 this.penumpang[i] = undefined;
//                 this.kas += bayar;
//                 return this.penumpang;
//             }
//         }
//     }
// }

// var angkot1 = new Angkot('Yusuf', ['Samarinda', 'Balikpapan'], [], 0);
// var angkot2 = new Angkot('Satria', ['Samarinda', 'Botang'], [], 0);