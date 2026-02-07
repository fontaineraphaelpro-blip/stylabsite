// Virtual Try-On Widget
(function() {
    'use strict';
    
    let widgetState = {
        userPhoto: null,
        productImageUrl: null,
        resultImageUrl: null,
        isGenerating: false,
        modalOpen: false
    };
    
    function initWidget(options = {}) {
        console.log('🔧 initWidget appelé avec options:', options);
        const containerId = options.containerId || 'vton-widget-root';
        const productImageUrl = options.productImageUrl || null;
        
        if (productImageUrl) {
            widgetState.productImageUrl = productImageUrl;
            console.log('📸 Image produit définie:', productImageUrl);
        }
        
        let container = document.getElementById(containerId);
        if (!container) {
            console.warn('❌ Container non trouvé:', containerId);
            console.log('🔍 Recherche de tous les éléments avec id contenant "vton"...');
            const allElements = document.querySelectorAll('[id*="vton"]');
            console.log('Éléments trouvés:', allElements);
            return;
        }
        
        console.log('✅ Container trouvé:', container);
        
        if (container.hasAttribute('data-vton-initialized')) {
            console.log('⚠️ Widget déjà initialisé');
            return;
        }
        
        container.setAttribute('data-vton-initialized', 'true');
        
        // Vider le container au cas où il y aurait du contenu
        container.innerHTML = '';
        
        // S'assurer que le container est visible
        container.style.display = 'block';
        container.style.width = '100%';
        container.style.visibility = 'visible';
        container.style.opacity = '1';
        
        // Valeurs par défaut (comme dans l'app)
        const defaultWidgetText = 'Try It On Now ✨';
        const defaultWidgetBg = '#000000';
        const defaultWidgetColor = '#ffffff';
        
        // Fonction pour calculer la luminance d'une couleur
        function getLuminance(hex) {
            const rgb = hexToRgb(hex);
            if (!rgb) return 0;
            const [r, g, b] = rgb.map(val => {
                val = val / 255;
                return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
            });
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        }
        
        function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? [
                parseInt(result[1], 16),
                parseInt(result[2], 16),
                parseInt(result[3], 16)
            ] : null;
        }
        
        // Calculer la couleur de texte appropriée selon le contraste
        function getContrastTextColor(bgColor, textColor) {
            const bgLuminance = getLuminance(bgColor);
            const textLuminance = getLuminance(textColor);
            const contrast = (Math.max(bgLuminance, textLuminance) + 0.05) / (Math.min(bgLuminance, textLuminance) + 0.05);
            
            // Si le contraste est trop faible (moins de 4.5:1 pour WCAG AA), utiliser une couleur automatique
            if (contrast < 4.5) {
                return bgLuminance > 0.5 ? '#000000' : '#ffffff';
            }
            return textColor;
        }
        
        // Récupérer les valeurs de configuration (si disponibles depuis la config)
        let widgetText = defaultWidgetText;
        let widgetBg = defaultWidgetBg;
        let widgetColor = defaultWidgetColor;
        
        // Essayer de récupérer depuis la config ou localStorage
        try {
            const savedConfig = localStorage.getItem('vton-widget-config');
            if (savedConfig) {
                const config = JSON.parse(savedConfig);
                widgetText = config.widgetText || defaultWidgetText;
                widgetBg = config.widgetBg || defaultWidgetBg;
                widgetColor = config.widgetColor || defaultWidgetColor;
            }
        } catch (e) {
            console.log('Pas de config sauvegardée, utilisation des valeurs par défaut');
        }
        
        // Calculer la couleur de texte finale avec contraste
        const finalTextColor = getContrastTextColor(widgetBg, widgetColor);
        
        const button = document.createElement('button');
        button.textContent = widgetText;
        button.className = 'vton-trigger-btn';
        button.type = 'button';
        
        // Style Shopify Polaris (comme dans l'app)
        button.style.cssText = `
            width: 100%;
            padding: 14px 24px;
            background: ${widgetBg};
            color: ${finalTextColor};
            border: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: opacity 0.2s, background-color 0.2s;
            display: block;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.5;
            text-align: center;
        `;
        
        // Hover effect subtil (comme Shopify Polaris)
        button.addEventListener('mouseenter', function() {
            const rgb = hexToRgb(widgetBg);
            if (rgb) {
                const [r, g, b] = rgb;
                // Assombrir légèrement au hover
                const darkerR = Math.max(0, r - 10);
                const darkerG = Math.max(0, g - 10);
                const darkerB = Math.max(0, b - 10);
                this.style.backgroundColor = `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.backgroundColor = widgetBg;
        });
        
        button.addEventListener('click', function() {
            console.log('🖱️ Bouton cliqué');
            openModal();
        });
        
        container.appendChild(button);
        console.log('✅ Bouton ajouté au container avec style app');
        
        createModal();
        console.log('✅ Modal créé');
    }
    
    function createModal() {
        const modal = document.createElement('div');
        modal.id = 'vton-modal';
        modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.75); backdrop-filter: blur(8px); z-index: 10000; align-items: center; justify-content: center; padding: 1rem;';
        
        const content = document.createElement('div');
        content.style.cssText = 'background: #ffffff; border-radius: 16px; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,0.3);';
        
        content.innerHTML = `
            <style>
                #vton-modal * {
                    box-sizing: border-box;
                }
                .vton-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem 2rem;
                    border-bottom: 1px solid #e1e3e5;
                    background: #fafbfc;
                    border-radius: 16px 16px 0 0;
                }
                .vton-header h2 {
                    margin: 0;
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #202223;
                    letter-spacing: -0.01em;
                }
                .vton-close-btn {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #6d7175;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 6px;
                    transition: all 0.2s;
                }
                .vton-close-btn:hover {
                    background: #e1e3e5;
                    color: #202223;
                }
                .vton-body {
                    padding: 2rem;
                }
                .vton-upload-card {
                    border: 2px dashed #c9cccf;
                    border-radius: 12px;
                    padding: 3rem 2rem;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.3s;
                    background: #fafbfc;
                    margin-bottom: 1.5rem;
                }
                .vton-upload-card:hover {
                    border-color: #008060;
                    background: #f0f9f7;
                }
                .vton-upload-icon {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                    color: #6d7175;
                }
                .vton-upload-text {
                    margin: 0;
                    color: #202223;
                    font-size: 1rem;
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                }
                .vton-upload-hint {
                    margin: 0;
                    color: #6d7175;
                    font-size: 0.875rem;
                }
                .vton-preview-section {
                    display: none;
                    margin-bottom: 1.5rem;
                }
                .vton-preview-label {
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: #6d7175;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 0.75rem;
                }
                .vton-preview-img {
                    width: 100%;
                    border-radius: 12px;
                    border: 1px solid #e1e3e5;
                }
                .vton-generate-btn {
                    width: 100%;
                    padding: 1rem 1.5rem;
                    background: #008060;
                    color: #ffffff;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: none;
                    margin-bottom: 1.5rem;
                }
                .vton-generate-btn:hover:not(:disabled) {
                    background: #006d4f;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0, 128, 96, 0.3);
                }
                .vton-generate-btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                .vton-loading {
                    display: none;
                    text-align: center;
                    padding: 2rem;
                    background: #f6f6f7;
                    border-radius: 12px;
                    margin-bottom: 1.5rem;
                }
                .vton-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid #e1e3e5;
                    border-top-color: #008060;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                .vton-loading-text {
                    margin: 0;
                    color: #202223;
                    font-size: 0.9375rem;
                    font-weight: 500;
                }
                .vton-result-section {
                    display: none;
                    margin-top: 1.5rem;
                }
                .vton-result-label {
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: #6d7175;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 0.75rem;
                }
                .vton-result-img {
                    width: 100%;
                    border-radius: 12px;
                    border: 1px solid #e1e3e5;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                .vton-error {
                    display: none;
                    padding: 1rem;
                    background: #fee;
                    border: 1px solid #fcc;
                    border-radius: 8px;
                    color: #d72c0d;
                    font-size: 0.875rem;
                    margin-bottom: 1rem;
                }
                @media (max-width: 768px) {
                    .vton-body {
                        padding: 1.5rem;
                    }
                    .vton-header {
                        padding: 1.25rem 1.5rem;
                    }
                    .vton-upload-card {
                        padding: 2rem 1.5rem;
                    }
                }
            </style>
            <div class="vton-header">
                <h2>Essayez virtuellement</h2>
                <button id="vton-close" class="vton-close-btn" aria-label="Fermer">×</button>
            </div>
            <div class="vton-body">
                <div id="vton-error" class="vton-error"></div>
                <div id="vton-upload-area" class="vton-upload-card">
                    <div class="vton-upload-icon">📸</div>
                    <p class="vton-upload-text">Téléchargez votre photo</p>
                    <p class="vton-upload-hint">Cliquez ici ou glissez-déposez une image</p>
                    <input type="file" id="vton-file-input" accept="image/*" style="display: none;">
                </div>
                <div id="vton-preview" class="vton-preview-section">
                    <div class="vton-preview-label">Votre photo</div>
                    <img id="vton-preview-img" class="vton-preview-img" alt="Photo utilisateur">
                </div>
                <button id="vton-generate" class="vton-generate-btn">Générer l'essayage virtuel</button>
                <div id="vton-loading" class="vton-loading">
                    <div class="vton-spinner"></div>
                    <p class="vton-loading-text">Génération en cours... Cela peut prendre quelques instants</p>
                </div>
                <div id="vton-result" class="vton-result-section">
                    <div class="vton-result-label">Résultat</div>
                    <img id="vton-result-img" class="vton-result-img" alt="Résultat essayage virtuel">
                </div>
            </div>
        `;
        
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        const closeBtn = document.getElementById('vton-close');
        const uploadArea = document.getElementById('vton-upload-area');
        const fileInput = document.getElementById('vton-file-input');
        const generateBtn = document.getElementById('vton-generate');
        const previewDiv = document.getElementById('vton-preview');
        const previewImg = document.getElementById('vton-preview-img');
        const resultDiv = document.getElementById('vton-result');
        const resultImg = document.getElementById('vton-result-img');
        
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });
        
        uploadArea.addEventListener('click', function() {
            fileInput.click();
        });
        
        // Hover effects are handled by CSS
        
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                // Validate file
                if (window.config && window.config.validateFile) {
                    const validation = window.config.validateFile(file);
                    if (!validation.valid) {
                        alert(validation.error);
                        return;
                    }
                }
                
                const reader = new FileReader();
                reader.onload = function(e) {
                    widgetState.userPhoto = file;
                    previewImg.src = e.target.result;
                    previewDiv.style.display = 'block';
                    generateBtn.style.display = 'block';
                    uploadArea.style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        });
        
        generateBtn.addEventListener('click', function() {
            if (!widgetState.userPhoto) {
                alert('Veuillez télécharger votre photo');
                return;
            }
            
            if (!widgetState.productImageUrl) {
                alert('Image produit non trouvée');
                return;
            }
            
            generateTryOn();
        });
    }
    
    function openModal() {
        const modal = document.getElementById('vton-modal');
        if (modal) {
            modal.style.display = 'flex';
            widgetState.modalOpen = true;
        }
    }
    
    function closeModal() {
        const modal = document.getElementById('vton-modal');
        if (modal) {
            modal.style.display = 'none';
            widgetState.modalOpen = false;
        }
    }
    
    async function uploadToImgur(file) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('image', file);
            
            fetch('https://api.imgur.com/3/image', {
                method: 'POST',
                headers: {
                    'Authorization': 'Client-ID 546c25a59c58ad7'
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    resolve(data.data.link);
                } else {
                    reject(new Error(data.data?.error || 'Erreur Imgur'));
                }
            })
            .catch(error => reject(error));
        });
    }
    
    async function generateTryOn() {
        if (widgetState.isGenerating) return;
        
        const generateBtn = document.getElementById('vton-generate');
        const resultDiv = document.getElementById('vton-result');
        const resultImg = document.getElementById('vton-result-img');
        
        if (!window.config || !window.config.replicateApiToken) {
            alert('⚠️ API Replicate non configurée. Vérifiez env.js');
            return;
        }
        
        widgetState.isGenerating = true;
        generateBtn.disabled = true;
        generateBtn.style.display = 'none';
        const loadingDiv = document.getElementById('vton-loading');
        const errorDiv = document.getElementById('vton-error');
        if (loadingDiv) loadingDiv.style.display = 'block';
        if (errorDiv) errorDiv.style.display = 'none';
        resultDiv.style.display = 'none';
        
        try {
            // Upload user photo to Imgur
            console.log('📤 Upload photo utilisateur...');
            const userPhotoUrl = await uploadToImgur(widgetState.userPhoto);
            console.log('✅ Photo utilisateur uploadée:', userPhotoUrl);
            
            // Get product image URL
            let productImageUrl = widgetState.productImageUrl;
            if (!productImageUrl) {
                const mainImage = document.querySelector('.product-main-image img, #mainImage');
                if (mainImage) {
                    productImageUrl = mainImage.src || mainImage.getAttribute('src');
                }
            }
            
            if (!productImageUrl) {
                throw new Error('Image produit non trouvée');
            }
            
            console.log('🖼️ Image produit:', productImageUrl);
            
            // Call Replicate API
            console.log('🤖 Appel API Replicate...');
            const response = await fetch('https://api.replicate.com/v1/predictions', {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${window.config.replicateApiToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    version: 'a0f39caf49b493dfc97d745772a7da0589f5d04cb3d1e1bcc9f79f67d0a5b94f',
                    input: {
                        human: userPhotoUrl,
                        garment: productImageUrl
                    }
                })
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Erreur API Replicate');
            }
            
            const prediction = await response.json();
            console.log('✅ Prédiction créée:', prediction.id);
            
            // Poll for result
            let result = null;
            let attempts = 0;
            const maxAttempts = 60;
            
            while (!result && attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                const statusResponse = await fetch(`https://api.replicate.com/v1/predictions/${prediction.id}`, {
                    headers: {
                        'Authorization': `Token ${window.config.replicateApiToken}`
                    }
                });
                
                const statusData = await statusResponse.json();
                console.log('📊 Statut:', statusData.status);
                
                if (statusData.status === 'succeeded') {
                    result = statusData.output;
                    break;
                } else if (statusData.status === 'failed') {
                    throw new Error('La génération a échoué');
                }
                
                attempts++;
            }
            
            if (!result) {
                throw new Error('Timeout: La génération prend trop de temps');
            }
            
            // Display result
            widgetState.resultImageUrl = result;
            resultImg.src = result;
            resultDiv.style.display = 'block';
            if (loadingDiv) loadingDiv.style.display = 'none';
            generateBtn.style.display = 'block';
            generateBtn.textContent = 'Générer à nouveau';
            
            console.log('✅ Résultat généré:', result);
            
        } catch (error) {
            console.error('❌ Erreur:', error);
            const loadingDiv = document.getElementById('vton-loading');
            const errorDiv = document.getElementById('vton-error');
            if (loadingDiv) loadingDiv.style.display = 'none';
            if (errorDiv) {
                errorDiv.textContent = 'Erreur: ' + error.message;
                errorDiv.style.display = 'block';
            }
            generateBtn.style.display = 'block';
            generateBtn.textContent = 'Réessayer';
        } finally {
            widgetState.isGenerating = false;
            generateBtn.disabled = false;
        }
    }
    
    window.initVTONWidget = initWidget;
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            console.log('✅ widget.js chargé');
        });
    } else {
        console.log('✅ widget.js chargé');
    }
})();
