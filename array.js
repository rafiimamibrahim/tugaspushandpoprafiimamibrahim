//PUSH & POP = MENAMBAH DAN MENGHAPUS ELEMEN ARRAY PADA AKHIR ARRAY
// let arr = ["Dani", "Juhaeni", 10, 1];
// arr.push("Danendra", 10);
// arr.pop();
// console.log(arr.join(" | "));

//UNSHIFT & SHIFT = MENAMBAH DAN MENHAPUS ELEMEN ARRAY PADA AWAL ARRAY

// arr.unshift("rafi");
// arr.shift();
// console.log(arr);

//SPLICE = MENYAMBUNG ARRAY
//SPLICE (indexAwal mauDihapusBerapa, elememBaru,
//elemenBaru2, ...)
// arr.splice(2,3 "oyoh");
// console.log(arr);

//slice = mengiris array
//slice(awal, akhir);

// var arr2 = arr.slice(0,5);
// console.log(arr);
// console.log(arr2);

//METHOD FILTER()
//METHOD FILTER() berfungsi untuk menyaring data di array.
//parameter yang harus diberikan pada method filter() sama seperti methofd forEach(), yaitu: drbush fungsi callback.

// const angka = [1,2,3,4,5,6,7,8,9,];

// const filterArr = angka.filter((item) => {
//     return item % 2 == 0 ;
// });

// console.log(filterArr);

// const users = [{
//     jenisMobil:'honda civic',
//     tipeBensin: 'Pertamax Turbo',
//     kapasitasTangki:'47 Liter',
// }, 
// {
//     jenisMobil:'bmw e46 318i',
//     tipeBensin: 'Pertamax',
//     kapasitasTangki:'60 Liter',
// },
// {
//     jenisMobil:'toyota alphard',
//     tipeBensin: 'Pertamax',
//     kapasitasTangki:'75 Liter',
// },
// {
//     jenisMobil:'range rover',
//     tipeBensin: 'Pertamax Turbo',
//     kapasitasTangki:'105 Liter',
// }
// ];

// let mobil = prompt("Masukan tipeBensin")

// const usersMobil= users.filter
// ((users) => users.tipeBensin === mobil);

// console.log(usersMobil);

//method includes
//berfungsi untuk mengecek apakah sebuah data ada di dalam array atau tidak. 
//biasanya digunakan untuk melakukan pencarian untuk memastikan data sudah ada di dalam array.
// let tanaman = ["padi","kacang","beras","toge"];

// let isThereANuts = tanaman.includes("kacang");
// console.log(isThereANuts)

// //METHOD SORT
// //Method sort() berfungsi untuk mengurutkan data pada array

// var sortAlfabet = ['a', 'b','c','z','f','k','m','o'];
// var sortAngka = [ 2,3,6,5,4,1,8]
// console.log(sortAlfabet.sort());
// console.log(sortAngka.sort());

//LATIHAN PUSH AND POP
var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    if(penumpang.length == 0){ //MEMBUAT SEBUAH KONDISI
        penumpang.push(namaPenumpang); //MENAMABAH PENUMPANG
        return penumpang;//UNTUK MENGULANG ISI ARRAY SETELAH DIISI
    }else{
        for(i = 0; i < penumpang.length; i++){//MEMBUAT SEBUAH PERULANGAN JIKA i = 0 LEBIH KECIL DARI KONDISI(PENUMPANG LENGHT) MAKA PERULANGANYA BERJALAN
            if(penumpang[i] == undefined){//KARNA PENUMPANG i =0, MAKA HASILNYA UNDEFINED
                penumpang[i] = namaPenumpang;//MENAMBAH PENUMPANG JIKA KURSI KOSONG
                return penumpang;//MENGEMBALIKAN PENUMPANG
        }else if(namaPenumpang == penumpang[i]){//JIKA TERDAPAT NAMA YANG SAMA AKAN MEMPRINT KATA KATA DIBAWAH
            console.log(namaPenumpang + " sudah ada penumpang didalam");//MEMPRINT NAMA PENUMPANG YANG SAMA DENGAN MENAMBAH "sudah ada di angkot"
            return penumpang; // mengambalikan penumpangs                 
        }else if (i == penumpang.length - 1){
            penumpang.push(namaPenumpang);
            return penumpang;
        }

                                
        }
    
    }
}
