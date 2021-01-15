const fs = require("fs");
const express = require("express");
const multer = require("multer");

const uploads = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/", uploads.array("files", 10), async (req, res, next) => {
  try {
    console.log(req.files);
    req.files.forEach((file) => {
      const splittedFilename = file.originalname.split(".");
      const extension = splittedFilename[splittedFilename.length - 1];
      fs.rename(
        `${process.cwd()}/uploads/${file.filename}`,
        `${process.cwd()}/uploads/${file.filename}.${extension}`,
        async (err) => {
          if (err) return next(err);
          //   await db.image.create({
          //     data: {
          //       path: `/uploads/${file.filename}.${extension}`,
          //     },
          //   });
        }
      );
    });

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

module.exports = router;
