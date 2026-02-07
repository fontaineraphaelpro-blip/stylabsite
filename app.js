// Logique Virtual Try-On
document.addEventListener('DOMContentLoaded', function() {
    if (!window.config) {
        console.warn('⚠️ window.config non défini');
        window.config = {
            maxFileSize: 10 * 1024 * 1024,
            validateFile: function(file) {
                if (file.size > this.maxFileSize) {
                    return { valid: false, error: 'Fichier trop volumineux' };
                }
                return { valid: true };
            }
        };
    }
    
    const userPhotoInput = document.getElementById('userPhoto');
    const productImageInput = document.getElementById('productImage');
    const tryOnBtn = document.getElementById('tryOnBtn');
    const preview = document.getElementById('preview');
    
    if (!userPhotoInput || !productImageInput || !tryOnBtn || !preview) {
                return;
    }
    
    console.log('✅ app.js chargé');
});
