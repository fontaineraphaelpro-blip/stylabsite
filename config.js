// Configuration de l'application
console.log('🔧 CONFIG.JS CHARGÉ - Ligne 1');

(function() {
    'use strict';
    
    console.log('🔧 CONFIG.JS - Fonction exécutée');
    console.log('🔧 CONFIG.JS - window._env existe:', !!window._env);
    
    if (!window._env) {
        console.warn('⚠️ CONFIG.JS - window._env n\'existe pas, création d\'un objet vide');
        window._env = {};
    }
    
    console.log('🔧 CONFIG.JS - Contenu window._env:', window._env);
    console.log('🔧 CONFIG.JS - REPLICATE_API_TOKEN:', window._env.REPLICATE_API_TOKEN ? window._env.REPLICATE_API_TOKEN.substring(0, 15) + '...' : 'VIDE');
    console.log('🔧 CONFIG.JS - Longueur token:', window._env.REPLICATE_API_TOKEN?.length || 0);
    
    function getEnv(key, defaultValue = '') {
        const value = window._env[key] || defaultValue;
        console.log(`🔧 CONFIG.JS - getEnv('${key}'):`, value ? `${value.substring(0, 10)}...` : 'vide');
        return value;
    }
    
    const token = getEnv('REPLICATE_API_TOKEN');
    console.log('🔧 CONFIG.JS - Token récupéré:', token ? token.substring(0, 15) + '...' : 'VIDE');
    
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
    
    console.log('✅ CONFIG.JS - Configuration créée');
    console.log('✅ CONFIG.JS - window.config.replicateApiToken:', window.config.replicateApiToken ? window.config.replicateApiToken.substring(0, 15) + '...' : 'VIDE');
    console.log('✅ CONFIG.JS - Token valide:', !!window.config.replicateApiToken && window.config.replicateApiToken.length > 0);
})();
