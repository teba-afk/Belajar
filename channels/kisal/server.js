const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Aktifkan CORS
app.use(cors());

// Custom User-Agent jika perlu
const customUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/119.0 Safari/537.36';

// Route proxy
app.get('/proxy/:filename', (req, res) => {
    const filename = req.params.filename;
    
    // Ganti dengan domain asal video kamu
    const targetUrl = `https://unifi-live07.secureswiftcontent.com/UnifiHD/${filename}`;

    const options = {
        url: targetUrl,
        headers: {
            'User-Agent': customUA,
            'Origin': 'https://teba-afk.github.io',
            'Referer': 'https://teba-afk.github.io/'
        }
    };

    request.get(options)
        .on('response', function (response) {
            res.set(response.headers);
        })
        .on('error', function (err) {
            res.status(500).send('Proxy error: ' + err.message);
        })
        .pipe(res);
});

// Root
app.get('/', (req, res) => {
    res.send('Proxy is running...');
});

app.listen(PORT, () => {
    console.log(`Proxy running on port ${PORT}`);
});
