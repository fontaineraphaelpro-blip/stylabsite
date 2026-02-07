// Variables d'environnement - Exemple
// Copiez ce fichier vers env.js et remplissez avec vos vraies valeurs

window._env = window._env || {
    // Token API Replicate
    // Obtenez votre token sur https://replicate.com/account/api-tokens
    REPLICATE_API_TOKEN: 'r8_votre_token_ici',
    
    // URL de votre application (optionnel)
    APP_URL: 'https://votre-app.com',
    
    // Nom d'hôte (optionnel)
    HOST_NAME: 'votre-app.com',
    
    // Modèle Replicate à utiliser
    // Par défaut: bytedance/seedream-4.5
    // Autres modèles disponibles: 
    // - idorag/virtual-try-on
    // - cuuupid/idm-vton
    REPLICATE_MODEL: 'bytedance/seedream-4.5'
};
