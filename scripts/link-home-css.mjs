import fs from 'fs';
const h = fs.readFileSync('index.html', 'utf8');
const links = `    <link rel="stylesheet" href="assets/ai-theme.css">
    <link rel="stylesheet" href="assets/home.css">`;
const out = h.replace(/<style>[\s\S]*?<\/style>/, links);
fs.writeFileSync('index.html', out);
console.log('Replaced inline styles with CSS links');
