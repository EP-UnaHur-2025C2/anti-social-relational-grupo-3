const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Carpeta donde se guardarán las imágenes
const UPLOAD_DIR = path.join(__dirname, '..', '..', 'public', 'images'); 

// Verificar si la carpeta existe, si no, crearla
if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
// Generar un nombre de archivo único para evitar colisiones
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + extension);
    }
});

// Middleware Multer: Permite hasta 5 imágenes por post
const uploadImages = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // Ejemplo: Límite de 5MB por archivo
}).array('images', 5); // 'images' es el nombre del campo en el formulario

module.exports = uploadImages;