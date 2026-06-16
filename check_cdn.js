const fs = require('fs');
const c = fs.readFileSync('D:\\00草稿\\pdf2one\\pdf2one.html', 'utf8');
const matches = c.match(/<script[^>]*src="[^"]*pdf-lib[^"]*"/g);
if (matches) matches.forEach(s => console.log(s));
