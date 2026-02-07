// Configuration de l'application
(function() {
    'use strict';
    
    if (!window._env) {
        window._env = {};
    }
    
    function getEnv(key, defaultValue = '') {
        return window._env[key] || defaultValue;
    }
    
    window.config = {
        replicateApiToken: getEnv('REPLICATE_API_TOKEN'),
        replicateModel: getEnv('REPLICATE_MODEL', 'bytedance/seedream-4.5'),
        appUrl: getEnv('APP_URL'),
        hostName: getEnv('HOST_NAME'),
        maxFileSize: 10 * 1024 * 1024,
        validateFile: function(file) {
            if (file.size > this.maxFileSize) {
                return {
                    valid: false,
                    error: `Le fichier est trop volumineux. Maximum ${Math.round(this.maxFileSize / 1024 / 1024)}MB.`
                };
            }
            return { valid: true };
        }
    };
    
    console.log('✅ Configuration chargée');
})();
