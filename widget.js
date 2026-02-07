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
        const containerId = options.containerId || 'vton-widget-root';
        const productImageUrl = options.productImageUrl || null;
        
        if (productImageUrl) {
            widgetState.productImageUrl = productImageUrl;
        }
        
        let container = document.getElementById(containerId);
        if (!container) {
            console.warn('Container non trouvé:', containerId);
            return;
        }
        
        if (container.hasAttribute('data-vton-initialized')) {
            return;
        }
        
        container.setAttribute('data-vton-initialized', 'true');
        
        const button = document.createElement('button');
        button.textContent = 'Essayer Virtuellement ✨';
        button.style.cssText = 'width: 100%; padding: 1rem; background: #000; color: #fff; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 1rem;';
        
        button.addEventListener('click', function() {
            openModal();
        });
        
        container.appendChild(button);
        
        createModal();
    }
    
    function createModal() {
        const modal = document.createElement('div');
        modal.id = 'vton-modal';
        modal.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; align-items: center; justify-content: center;';
        
        const content = document.createElement('div');
        content.style.cssText = 'background: white; padding: 2rem; border-radius: 8px; max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto;';
        
        content.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;">Essayez virtuellement</h2>
                <button id="vton-close" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">×</button>
            </div>
            <div id="vton-upload-area" style="border: 2px dashed #ddd; padding: 2rem; text-align: center; border-radius: 8px; margin-bottom: 1rem; cursor: pointer;">
                <p>Cliquez pour télécharger votre photo</p>
                <input type="file" id="vton-file-input" accept="image/*" style="display: none;">
            </div>
            <div id="vton-preview" style="display: none; margin-bottom: 1rem;">
                <img id="vton-preview-img" style="max-width: 100%; border-radius: 8px;">
            </div>
            <button id="vton-generate" style="width: 100%; padding: 1rem; background: #008060; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; display: none;">Générer</button>
            <div id="vton-result" style="display: none; margin-top: 1rem;">
                <img id="vton-result-img" style="max-width: 100%; border-radius: 8px;">
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
        
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    widgetState.userPhoto = file;
                    previewImg.src = e.target.result;
                    previewDiv.style.display = 'block';
                    generateBtn.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
        
        generateBtn.addEventListener('click', function() {
            if (!widgetState.userPhoto || !widgetState.productImageUrl) {
                alert('Veuillez télécharger une photo et sélectionner un produit');
                return;
            }
            
            generateBtn.disabled = true;
            generateBtn.textContent = 'Génération en cours...';
            
            setTimeout(function() {
                alert('Fonctionnalité de génération nécessite la configuration de l\'API Replicate dans env.js');
                generateBtn.disabled = false;
                generateBtn.textContent = 'Générer';
            }, 1000);
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
    
    window.initVTONWidget = initWidget;
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            console.log('✅ widget.js chargé');
        });
    } else {
        console.log('✅ widget.js chargé');
    }
})();
