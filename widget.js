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
        
        const button = document.createElement('button');
        button.textContent = 'Essayer Virtuellement ✨';
        button.className = 'vton-trigger-btn';
        button.style.cssText = 'width: 100%; padding: 1.25rem 2rem; background: #000; color: #fff; border: 1px solid #000; border-radius: 0; font-weight: 300; font-size: 0.875rem; letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); display: block;';
        
        button.addEventListener('mouseenter', function() {
            this.style.background = 'transparent';
            this.style.color = '#000';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.background = '#000';
            this.style.color = '#fff';
        });
        
        button.addEventListener('click', function() {
            console.log('🖱️ Bouton cliqué');
            openModal();
        });
        
        container.appendChild(button);
        console.log('✅ Bouton ajouté au container');
        
        createModal();
        console.log('✅ Modal créé');
    }
    
    function createModal() {
        const modal = document.createElement('div');
        modal.id = 'vton-modal';
        modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; align-items: center; justify-content: center;';
        
        const content = document.createElement('div');
        content.style.cssText = 'background: white; padding: 3rem; border-radius: 0; max-width: 700px; width: 90%; max-height: 90vh; overflow-y: auto; position: relative;';
        
        content.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e8e8e8;">
                <h2 style="margin: 0; font-size: 1.5rem; font-weight: 300; letter-spacing: 0.1em; text-transform: uppercase;">Essayez virtuellement</h2>
                <button id="vton-close" style="background: none; border: none; font-size: 2rem; cursor: pointer; color: #1a1a1a; line-height: 1; padding: 0; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; transition: opacity 0.3s;">×</button>
            </div>
            <div id="vton-upload-area" style="border: 1px dashed #e8e8e8; padding: 3rem 2rem; text-align: center; margin-bottom: 2rem; cursor: pointer; transition: all 0.3s;">
                <p style="margin: 0; color: #6b6b6b; font-size: 0.9375rem; font-weight: 300;">Cliquez pour télécharger votre photo</p>
                <input type="file" id="vton-file-input" accept="image/*" style="display: none;">
            </div>
            <div id="vton-preview" style="display: none; margin-bottom: 2rem;">
                <p style="margin-bottom: 1rem; font-size: 0.875rem; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; color: #6b6b6b;">Votre photo</p>
                <img id="vton-preview-img" style="max-width: 100%; display: block;">
            </div>
            <button id="vton-generate" style="width: 100%; padding: 1.25rem 2rem; background: #000; color: #fff; border: 1px solid #000; border-radius: 0; font-weight: 300; font-size: 0.875rem; letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; transition: all 0.4s; display: none;">Générer</button>
            <div id="vton-loading" style="display: none; text-align: center; padding: 2rem; color: #6b6b6b;">
                <p style="margin: 0; font-size: 0.875rem; font-weight: 300;">Génération en cours, veuillez patienter...</p>
            </div>
            <div id="vton-result" style="display: none; margin-top: 2rem;">
                <p style="margin-bottom: 1rem; font-size: 0.875rem; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; color: #6b6b6b;">Résultat</p>
                <img id="vton-result-img" style="max-width: 100%; display: block;">
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
        
        uploadArea.addEventListener('mouseenter', function() {
            this.style.borderColor = '#1a1a1a';
            this.style.backgroundColor = '#fafafa';
        });
        
        uploadArea.addEventListener('mouseleave', function() {
            this.style.borderColor = '#e8e8e8';
            this.style.backgroundColor = 'transparent';
        });
        
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
        if (loadingDiv) loadingDiv.style.display = 'block';
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
            if (loadingDiv) loadingDiv.style.display = 'none';
            generateBtn.style.display = 'block';
            generateBtn.textContent = 'Générer';
            alert('Erreur: ' + error.message);
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
