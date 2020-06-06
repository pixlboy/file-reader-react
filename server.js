let express = require('express');
let app = express();
let multer = require('multer')
let cors = require('cors');
let fs = require('fs');

const filename = 'uploaded.txt';        //default file name, for demo only

// middleware to fulfil requests coming from other server
app.use(cors())

// create multer instance 
// set the destination folder and file name 

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, filename )
  }
})

// Upload instance and receive a single file
let upload = multer({ storage: storage }).single('file');

// POST route to upload a file
app.post('/upload',function(req, res) {
    upload(req, res, function (err) {
        // Error handling
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        // return the file object  
        return res.status(200).send(req.file)
    })
});

// read the contents of file sent in query params and send as array 
app.get('/read',function(req, res) {
    fs.readFile(`./public/${filename}`, 'utf8', function(err, contents) {
        const splitContents = contents ? contents.split('\n') : [];
        res.send(splitContents);
    });
});

// Server start
app.listen(4200, function() {
    console.log('Server running on port 4200');
});