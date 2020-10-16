import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (_, file, callback) => {
      const originalName = file.originalname.replace(/ /g, '_').replace(/#/g, '');

      const fileName = `${Date.now()}-${originalName}`;

      callback(null, fileName);
    }
  })
};