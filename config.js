// Configuration pour Virtual Try-On
// Lit les variables d'environnement depuis window._env ou utilise des valeurs par défaut

// Fonction pour obtenir une variable d'environnement
function getEnv(key, defaultValue = '') {
    // Essayer window._env d'abord (chargé depuis env.js)
    if (window._env) {
        // Vérifier avec hasOwnProperty ET avec l'accès direct
        if (key in window._env) {
            const value = window._env[key];
            // Pour les tokens, accepter même les chaînes vides peuvent être valides
            if (value !== undefined && value !== null) {
                return value;
            }
        }
    }
    // Essayer import.meta.env (pour Vite)
    // Note: import est un mot réservé, on ne peut pas utiliser typeof import
    // import.meta n'est disponible que dans les modules ES6, pas dans les scripts classiques
    // Cette vérification est donc désactivée pour les scripts classiques
    // Si vous utilisez Vite, les variables seront injectées directement dans le code
    return defaultValue;
}

const config = {
    // API Configuration
    apiUrl: getEnv('VITE_API_URL', 'https://api.kaiden.io/v1'),
    apiKey: getEnv('VITE_API_KEY', ''),
    appUrl: getEnv('APP_URL', 'https://vton-production-890a.up.railway.app'),
    hostName: getEnv('HOST_NAME', 'vton-production-890a.up.railway.app'),
    
    // Replicate AI Service Configuration
    replicateApiToken: getEnv('REPLICATE_API_TOKEN', ''),
    replicateApiUrl: 'https://api.replicate.com/v1',
    replicateModel: getEnv('REPLICATE_MODEL', 'bytedance/seedream-4.5'),
    replicatePrompt: getEnv('REPLICATE_PROMPT', "This is NOT a redesign task.\n\nIt is a garment transfer task.\n\nUse the clothing from the second image exactly as-is with zero creative interpretation.\n\nThe output must look like the REAL clothing item was physically worn by the person.\n\nNo invented graphics, no color changes, no simplification."),
    replicateImageSize: parseInt(getEnv('REPLICATE_IMAGE_SIZE', '2048')),
    
    // AI Service Configuration
    aiServiceUrl: getEnv('VITE_AI_SERVICE_URL', 'https://ai-service.kaiden.io'),
    aiApiKey: getEnv('VITE_AI_API_KEY', ''),
    
    // File Upload Configuration
    maxFileSize: parseInt(getEnv('VITE_MAX_FILE_SIZE', '10485760')), // 10MB par défaut
    allowedFileTypes: getEnv('VITE_ALLOWED_FILE_TYPES', 'image/jpeg,image/png,image/webp').split(','),
    uploadEndpoint: getEnv('VITE_UPLOAD_ENDPOINT', '/api/upload'),
    
    // Virtual Try-On Settings
    tryOnEndpoint: getEnv('VITE_TRY_ON_ENDPOINT', '/api/virtual-try-on'),
    processingTimeout: parseInt(getEnv('VITE_PROCESSING_TIMEOUT', '30000')),
    enableRealTime: getEnv('VITE_ENABLE_REAL_TIME', 'false') === 'true',
    
    // Storage Configuration
    storageType: getEnv('VITE_STORAGE_TYPE', 'local'),
    cloudStorageUrl: getEnv('VITE_CLOUD_STORAGE_URL', ''),
    cloudStorageKey: getEnv('VITE_CLOUD_STORAGE_KEY', ''),
    
    // Analytics & Tracking
    analyticsId: getEnv('VITE_ANALYTICS_ID', ''),
    enableAnalytics: getEnv('VITE_ENABLE_ANALYTICS', 'false') === 'true',
    
    // Feature Flags
    enableCamera: getEnv('VITE_ENABLE_CAMERA', 'true') !== 'false',
    enableUpload: getEnv('VITE_ENABLE_UPLOAD', 'true') !== 'false',
    enableArPreview: getEnv('VITE_ENABLE_AR_PREVIEW', 'false') === 'true',
    
    // Performance Settings
    imageQuality: parseFloat(getEnv('VITE_IMAGE_QUALITY', '0.9')),
    maxImageWidth: parseInt(getEnv('VITE_MAX_IMAGE_WIDTH', '1920')),
    maxImageHeight: parseInt(getEnv('VITE_MAX_IMAGE_HEIGHT', '1920')),
    
    // Security
    corsOrigin: getEnv('VITE_CORS_ORIGIN', '*'),
    enableCsrf: getEnv('VITE_ENABLE_CSRF', 'true') !== 'false',
    
    // Environment
    nodeEnv: getEnv('NODE_ENV', 'development'),
    
    // Helper methods
    isProduction: function() {
        return this.nodeEnv === 'production';
    },
    
    isDevelopment: function() {
        return this.nodeEnv === 'development';
    },
    
    getApiUrl: function(endpoint) {
        return `${this.apiUrl}${endpoint}`;
    },
    
    getHostUrl: function(endpoint) {
        // Utilise APP_URL si disponible, sinon HOST_NAME avec https://, sinon apiUrl
        const baseUrl = this.appUrl || (this.hostName ? `https://${this.hostName}` : this.apiUrl);
        return `${baseUrl}${endpoint}`;
    },
    
    getReplicateHeaders: function() {
        return {
            'Authorization': `Token ${this.replicateApiToken}`,
            'Content-Type': 'application/json'
        };
    },
    
    validateFile: function(file) {
        if (file.size > this.maxFileSize) {
            return {
                valid: false,
                error: `Le fichier est trop volumineux. Maximum ${Math.round(this.maxFileSize / 1024 / 1024)}MB.`
            };
        }
        
        if (!this.allowedFileTypes.includes(file.type)) {
            return {
                valid: false,
                error: `Type de fichier non autorisé. Types acceptés: ${this.allowedFileTypes.join(', ')}`
            };
        }
        
        return { valid: true };
    }
};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else {
    window.config = config;
}

// Log de débogage pour vérifier le chargement
console.log('=== CONFIGURATION CHARGÉE ===');
console.log('window._env disponible:', !!window._env);
if (window._env) {
    console.log('window._env.REPLICATE_API_TOKEN existe:', 'REPLICATE_API_TOKEN' in window._env);
    console.log('window._env.REPLICATE_API_TOKEN valeur:', window._env.REPLICATE_API_TOKEN || 'VIDE');
    console.log('window._env.REPLICATE_API_TOKEN (preview):', window._env.REPLICATE_API_TOKEN ? window._env.REPLICATE_API_TOKEN.substring(0, 10) + '...' : 'MANQUANT');
    console.log('Toutes les clés dans window._env:', Object.keys(window._env));
    console.log('Test getEnv("REPLICATE_API_TOKEN"):', getEnv('REPLICATE_API_TOKEN', 'DEFAULT_TEST'));
} else {
    console.error('⚠️ CRITIQUE: window._env n\'est PAS défini! Vérifiez que env.js est chargé AVANT config.js');
}
console.log('Token Replicate (config.replicateApiToken):', config.replicateApiToken ? config.replicateApiToken.substring(0, 10) + '... (longueur: ' + config.replicateApiToken.length + ')' : 'MANQUANT');
console.log('Modèle Replicate:', config.replicateModel);
console.log('APP_URL:', config.appUrl);
console.log('HOST_NAME:', config.hostName);
console.log('============================');

