import type { Request, Response } from 'express';

export const uploadImage = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: 'No file uploaded'
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Image uploaded successfully',
    file: {
      filename: req.file.filename,
      url: `/avatars/${req.file.filename}`,
      size: req.file.size,
      mimetype: req.file.mimetype
    }
  });
};
