// Script pour générer env.js depuis les variables d'environnement Netlify
// Ce script est exécuté lors du build sur Netlify

const fs = require('fs');
const path = require('path');

// Récupérer les variables d'environnement
const envVars = {
    'VITE_API_URL': process.env.VITE_API_URL || 'https://api.kaiden.io/v1',
    'VITE_API_KEY': process.env.VITE_API_KEY || 'your_api_key_here',
    'APP_URL': process.env.APP_URL || process.env.RAILWAY_PUBLIC_DOMAIN || process.env.RAILWAY_STATIC_URL || 'https://vton-production-890a.up.railway.app',
    'HOST_NAME': process.env.HOST_NAME || process.env.RAILWAY_PUBLIC_DOMAIN || (process.env.RAILWAY_STATIC_URL ? process.env.RAILWAY_STATIC_URL.replace('https://', '') : null) || 'vton-production-890a.up.railway.app',
    'REPLICATE_API_TOKEN': process.env.REPLICATE_API_TOKEN || '',
    'VITE_AI_SERVICE_URL': process.env.VITE_AI_SERVICE_URL || 'https://ai-service.kaiden.io',
    'VITE_AI_API_KEY': process.env.VITE_AI_API_KEY || 'your_ai_api_key_here',
    'VITE_MAX_FILE_SIZE': process.env.VITE_MAX_FILE_SIZE || '10485760',
    'VITE_ALLOWED_FILE_TYPES': process.env.VITE_ALLOWED_FILE_TYPES || 'image/jpeg,image/png,image/webp',
    'VITE_UPLOAD_ENDPOINT': process.env.VITE_UPLOAD_ENDPOINT || '/api/upload',
    'VITE_TRY_ON_ENDPOINT': process.env.VITE_TRY_ON_ENDPOINT || '/api/virtual-try-on',
    'VITE_PROCESSING_TIMEOUT': process.env.VITE_PROCESSING_TIMEOUT || '30000',
    'VITE_ENABLE_REAL_TIME': process.env.VITE_ENABLE_REAL_TIME || 'false',
    'VITE_STORAGE_TYPE': process.env.VITE_STORAGE_TYPE || 'local',
    'VITE_CLOUD_STORAGE_URL': process.env.VITE_CLOUD_STORAGE_URL || '',
    'VITE_CLOUD_STORAGE_KEY': process.env.VITE_CLOUD_STORAGE_KEY || '',
    'VITE_ANALYTICS_ID': process.env.VITE_ANALYTICS_ID || '',
    'VITE_ENABLE_ANALYTICS': process.env.VITE_ENABLE_ANALYTICS || 'false',
    'VITE_ENABLE_CAMERA': process.env.VITE_ENABLE_CAMERA || 'true',
    'VITE_ENABLE_UPLOAD': process.env.VITE_ENABLE_UPLOAD || 'true',
    'VITE_ENABLE_AR_PREVIEW': process.env.VITE_ENABLE_AR_PREVIEW || 'false',
    'VITE_IMAGE_QUALITY': process.env.VITE_IMAGE_QUALITY || '0.9',
    'VITE_MAX_IMAGE_WIDTH': process.env.VITE_MAX_IMAGE_WIDTH || '1920',
    'VITE_MAX_IMAGE_HEIGHT': process.env.VITE_MAX_IMAGE_HEIGHT || '1920',
    'VITE_CORS_ORIGIN': process.env.VITE_CORS_ORIGIN || '*',
    'VITE_ENABLE_CSRF': process.env.VITE_ENABLE_CSRF || 'true',
    'NODE_ENV': process.env.NODE_ENV || process.env.CONTEXT || 'production',
    'REPLICATE_MODEL': process.env.REPLICATE_MODEL || 'bytedance/seedream-4.5',
};

// Générer le contenu du fichier env.js
const envJsContent = `// Variables d'environnement générées depuis Netlify
// Ce fichier est généré automatiquement lors du build
console.log('📦 env.js: Chargement de window._env depuis Netlify...');
window._env = ${JSON.stringify(envVars, null, 4).replace(/"([^"]+)":/g, "'$1':")};
console.log('✅ env.js: window._env chargé avec', Object.keys(window._env).length, 'variables');
console.log('✅ env.js: REPLICATE_API_TOKEN =', window._env.REPLICATE_API_TOKEN ? window._env.REPLICATE_API_TOKEN.substring(0, 10) + '...' : 'MANQUANT');
`;

// Écrire le fichier env.js
const envJsPath = path.join(__dirname, 'env.js');
fs.writeFileSync(envJsPath, envJsContent, 'utf8');

console.log('✅ Fichier env.js généré avec succès depuis les variables d\'environnement Netlify');
console.log('📝 Variables chargées:', Object.keys(envVars).length);
if (process.env.REPLICATE_API_TOKEN) {
    console.log('✅ REPLICATE_API_TOKEN trouvé dans les variables d\'environnement');
} else {
    console.warn('⚠️ REPLICATE_API_TOKEN non trouvé dans les variables d\'environnement');
}

