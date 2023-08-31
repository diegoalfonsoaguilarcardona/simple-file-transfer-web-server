const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('file'), (req, res) => {
    // You can access the uploaded file via req.file
    console.log(req.file);

    res.send('File uploaded successfully.');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});