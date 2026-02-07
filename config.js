// Configuration de l'application
(function() {
    'use strict';
    
    console.log('🔧 config.js: Démarrage...');
    console.log('🔧 window._env existe:', !!window._env);
    
    if (!window._env) {
        console.warn('⚠️ window._env n\'existe pas, création d\'un objet vide');
        window._env = {};
    }
    
    console.log('🔧 Contenu de window._env:', window._env);
    console.log('🔧 REPLICATE_API_TOKEN dans _env:', window._env.REPLICATE_API_TOKEN);
    console.log('🔧 Longueur du token:', window._env.REPLICATE_API_TOKEN?.length);
    
    function getEnv(key, defaultValue = '') {
        const value = window._env[key] || defaultValue;
        console.log(`🔧 getEnv('${key}'):`, value ? `${value.substring(0, 10)}...` : 'vide');
        return value;
    }
    
    const token = getEnv('REPLICATE_API_TOKEN');
    
    window.config = {
        replicateApiToken: token,
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
    console.log('✅ Token configuré:', window.config.replicateApiToken ? `${window.config.replicateApiToken.substring(0, 10)}...` : 'VIDE');
    console.log('✅ window.config:', {
        hasToken: !!window.config.replicateApiToken,
        tokenLength: window.config.replicateApiToken?.length,
        tokenPreview: window.config.replicateApiToken ? window.config.replicateApiToken.substring(0, 15) + '...' : 'VIDE'
    });
})();
