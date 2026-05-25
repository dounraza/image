import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import uploadRoutes from './routes/upload.routes.js';

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploaded images
app.use('/avatars', express.static(path.join(process.cwd(), 'avatars')));

// Routes
app.use('/api', uploadRoutes);

// Global Error Handler
app.use((err: any, req: any, res: any, next: any) => {
  if (err.message === 'Error: Images Only!') {
    return res.status(400).json({ success: false, message: err.message });
  }
  res.status(500).json({ success: false, message: err.message });
});

// Root route
app.get('/', (req, res) => {
  res.send('Image Upload API is running');
});

export default app;
