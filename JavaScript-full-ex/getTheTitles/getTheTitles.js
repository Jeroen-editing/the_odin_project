// const getTheTitles = function(books) {
//
//     books = [
//         {
//             title: 'Book',
//             author: 'Name'
//         },
//         {
//             title: 'Book2',
//             author: 'Name2'
//         }
//     ];
//
//     let titles = books.map(book => book.title);
//     console.log(titles);
//     return titles;
// };

let getTheTitles = function(array) {

    return array.map(book => book.title);

};

//getTheTitles();

module.exports = getTheTitles;