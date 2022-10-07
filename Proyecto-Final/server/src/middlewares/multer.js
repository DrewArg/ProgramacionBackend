// import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },

  filename: function (req, file, cb) {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");

    //TODO la description va a ser la URL - verificar
    const Image = new Image(fileName, file.originalname);

    cb(null, `${Date.now()}-${fileName}`);
  },
});

const upload = multer({ storage });

export const oneFileMiddleware = upload.single("profileImg");

export const multipleFilesMiddlelware = upload.array("myFiles");
