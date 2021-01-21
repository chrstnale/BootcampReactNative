function readBooks(time,book,callback) {
    console.log(`saya membaca ${book.name}`)
    setTimeout(function(){
        let sisaWaktu = 0
        if(time >= book.timeSpent) { // Modifikasi agar tetap memberitahu bahwa selesai membaca jika waktu yang sisa sama dengan waktu yang dibutuhkan 
            sisaWaktu = time - book.timeSpent
            console.log(`saya sudah membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
            callback(sisaWaktu)
        } else {
            console.log('waktu saya habis')
            callback(time)
        }
    }, book.timeSpent)
}

module.exports = readBooks