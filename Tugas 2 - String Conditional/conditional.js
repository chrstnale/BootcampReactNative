//Soal If-else

var nama = "Junaedi"
var peran = "Werewolf"

if (nama == "") {
    console.log("Nama harus diisi!");
} else if (peran == "") {
    console.log("Halo John, Pilih peranmu untuk memulai game!");
} else if (nama != "" && peran == "Penyihir") {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
} else if (nama != "" && peran == "Guard") {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
} else if (nama != "" && peran == "Werewolf") {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!");
}

//Soal Switch Case
var hari = 28; 
var bulan = 11; 
var tahun = 1928;

switch(bulan) {
    case 1:   { console.log(hari + ' Januari ' + tahun); break; }
    case 2:   { console.log(hari + ' Februari ' + tahun); break; }
    case 3:   { console.log(hari + ' Maret ' + tahun); break; }
    case 4:   { console.log(hari + ' April ' + tahun); break; }
    case 5:   { console.log(hari + ' Mei ' + tahun); break; }
    case 6:   { console.log(hari + ' Juni ' + tahun); break; }
    case 7:   { console.log(hari + ' Juli ' + tahun); break; }
    case 8:   { console.log(hari + ' Agustus ' + tahun); break; }
    case 9:   { console.log(hari + ' September ' + tahun); break; }
    case 10:   { console.log(hari + ' Oktober ' + tahun); break; }
    case 11:   { console.log(hari + ' November ' + tahun); break; }
    case 12:   { console.log(hari + ' Desember ' + tahun); break; }
    default:  { console.log('Mohon masukkan bulan yang tepat'); }}