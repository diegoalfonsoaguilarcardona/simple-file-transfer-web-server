const express = require('express');
const multer  = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        const ext = path.extname(file.originalname);
        const basename = path.basename(file.originalname, ext);
        const timestamp = Date.now();
        cb(null, `${basename}-${timestamp}${ext}`);
    }
})

const upload = multer({ storage: storage });

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file);

    res.send('File uploaded successfully.');
});

app.get('/listfiles', (req, res) => {
    fs.readdir(path.join(__dirname, 'public'), (err, files) => {
        if(err) {
            console.log(err);
            res.status(500).send('An error occurred while retrieving files');
        } else {
            let fileList = files.map(file => path.join('/',file));
            res.send(fileList);
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});