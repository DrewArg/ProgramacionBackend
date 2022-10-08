import multer from "multer";;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },

  filename: async function (req, file, cb) {
    const fileName =
      Date.now() + "-" + file.originalname.toLowerCase().split(" ").join("-");
    cb(null, `${fileName}`);
    
  },
});

const upload = multer({ storage });

export const oneFileMiddleware = upload.single("newImage");

export const multipleFilesMiddlelware = upload.array("myFiles");
