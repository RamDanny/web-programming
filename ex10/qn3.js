const http = require('http');

const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }
];

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html>');
    res.write('<head><title>List of Books</title>');
    res.write('<style>table {border: 2px solid black;} th {border: 1px solid black;} td {border: 1px solid black;}</style></head>');
    res.write('<body>');
    res.write('<h1>List of Books</h1>');
    res.write('<table>');
    res.write('<tr><th>Title</th><th>Author</th><th>Year</th></tr>');
    books.forEach((book) => {
    res.write(`<tr><td>${book.title}</td><td>${book.author}</td><td>${book.year}</td></tr>`);
    });
    res.write('</table>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
