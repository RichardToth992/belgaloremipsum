const express = require('express');
const fs = require('fs');
const loremIpsum = require('lorem-ipsum');

const app = express();
const port = 3000;

const belgaLyrics = fs.readFileSync('belga_lyrics.txt', 'utf-8');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/generate', (req, res) => {
  const length = req.query.length || 100;
  const generatedText = generateLoremIpsum(belgaLyrics, length);
  res.send(`
    <html>
      <head>
        <title>Generált Bëlga Lorem Ipsum</title>
      </head>
      <body>
        <h1>Generált Bëlga Lorem Ipsum</h1>
        <p>${generatedText}</p>
        <a href="/">Vissza a generáláshoz</a>
      </body>
    </html>
  `);
});

// Server start
app.listen(port, () => {
  console.log(`Server runs at address http://localhost:${port}`);
});

function generateLoremIpsum(lyrics, lineCount) {
    const lines = lyrics.split(/\n/).filter(line => line.trim() !== ''); // Splitting in lines and removing empty lines
    let loremIpsumText = '';
  
    for (let i = 0; i < lineCount; i++) {
      const randomIndex = Math.floor(Math.random() * lines.length);
      const selectedLine = lines[randomIndex];
  
      // Start with uppercase letter
      loremIpsumText += selectedLine.charAt(0).toUpperCase() + selectedLine.slice(1) + '\n';
    }
    
    loremIpsumText = loremIpsumText.trim() + '.';
  
    return loremIpsumText;
  }