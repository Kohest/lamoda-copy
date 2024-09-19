import multer from "multer";
import { Request, Response } from "express";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

function convertImageToBase64(req: Request, res: Response) {
  if (req.file) {
    const base64 = Buffer.from(req.file.buffer).toString("base64");
    const mimeType = req.file.mimetype;
    const base64String = `data:${mimeType};base64,${base64}`;
    res.json({ base64String });
  } else {
    res.status(400).json({ error: "No file uploaded" });
  }
}
