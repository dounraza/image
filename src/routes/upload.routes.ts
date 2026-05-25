import { Router } from 'express';
import { uploadImage } from '../controllers/upload.controller.js';
import { upload } from '../middleware/multer.middleware.js';

const router = Router();

// POST /api/upload - Handle single image upload
router.post('/upload', upload.single('image'), uploadImage);

export default router;
