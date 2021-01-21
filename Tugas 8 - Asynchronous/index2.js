var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function baca(time, books, i){
    readBooksPromise(time, books[i])
        .then(function(fulfilled) {
            i += 1;
            baca(fulfilled, books, i);
        })
        .catch(function (error) {
            
        })
}

baca(4000,books, 0);