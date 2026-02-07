// Virtual Try-On Widget - Site Web Version
// Inspiré du widget Shopify, adapté pour le site web avec API Replicate directe

(function() {
  'use strict';
  
  // Configuration
  const isProduction = false; // Set to false for debugging
  const log = isProduction ? function() {} : console.log.bind(console);
  const warn = isProduction ? function() {} : console.warn.bind(console);
  const error = console.error.bind(console);
  
  // Widget state
  let widgetState = {
    userPhoto: null,
    productImage: null,
    resultImageUrl: null,
    isGenerating: false,
    modalOpen: false,
    savedScrollY: 0
  };
  
  // Initialize widget when DOM is ready
  function initWidget() {
    log('[VTON Widget] Initializing widget...');
    
    // Find demo section
    const demoSection = document.getElementById('demo');
    if (!demoSection) {
      warn('[VTON Widget] Demo section not found');
      return;
    }
    
    // Check if widget already exists
    if (document.getElementById('vton-widget-container')) {
      warn('[VTON Widget] Widget already exists');
      return;
    }
    
    // Create widget container
    const container = document.createElement('div');
    container.id = 'vton-widget-container';
    container.setAttribute('data-vton-widget', 'true');
    
    // Find demo card to insert widget
    const demoCard = demoSection.querySelector('.demo-card');
    if (demoCard) {
      // Insert widget at the beginning of demo card
      demoCard.insertBefore(container, demoCard.firstChild);
    } else {
      // Fallback: insert in demo section
      demoSection.appendChild(container);
    }
    
    // Render widget
    renderWidget(container);
    
    log('[VTON Widget] Widget initialized successfully');
  }
  
  // Render widget HTML
  function renderWidget(container) {
    container.innerHTML = `
      <style>
        .vton-widget-button {
          width: 100%;
          padding: 18px 32px;
          border: 2px solid #000000;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          letter-spacing: 0.01em;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          background: #000000;
          color: #ffffff;
          margin-bottom: 24px;
        }
        .vton-widget-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
          transition: left 0.5s;
        }
        .vton-widget-button:hover::before {
          left: 100%;
        }
        .vton-widget-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }
        .vton-widget-button:active {
          transform: translateY(0);
        }
        .vton-widget-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
        .vton-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          display: none;
          align-items: center;
          justify-content: center;
          z-index: 999999;
          padding: 24px;
          animation: fadeIn 0.2s ease-out;
          overflow-y: auto;
          overscroll-behavior: contain;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .vton-modal-overlay.active {
          display: flex;
        }
        .vton-modal {
          background: #ffffff;
          border-radius: 12px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          overflow-x: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25), 0 8px 16px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.08);
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .vton-modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.06);
          font-size: 24px;
          cursor: pointer;
          padding: 12px;
          line-height: 1;
          color: #4b5563;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
          font-weight: 300;
        }
        .vton-modal-close:hover {
          background: rgba(0, 0, 0, 0.08);
          border-color: rgba(0, 0, 0, 0.12);
          color: #111827;
          transform: scale(1.1) rotate(90deg);
        }
        .vton-modal-content {
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow: hidden;
        }
        .vton-modal-content.has-result {
          padding: 40px;
          justify-content: center;
        }
        .vton-upload-area {
          border: 2px dashed #d1d5db;
          border-radius: 8px;
          padding: 60px 40px;
          text-align: center;
          cursor: pointer;
          margin-bottom: 24px;
          transition: all 0.25s ease;
          background: #fafafa;
          position: relative;
          overflow: hidden;
        }
        .vton-upload-area:hover {
          border-color: #000000;
          border-width: 2px;
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }
        .vton-upload-area.hidden {
          display: none;
        }
        .vton-upload-area.has-image {
          border: none;
          padding: 0;
          background: transparent;
        }
        .vton-upload-area.has-image img {
          max-width: 100%;
          max-height: 280px;
          border-radius: 16px;
          object-fit: contain;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }
        .vton-upload-area p {
          margin: 0;
          font-size: 16px;
          color: #000000;
          font-weight: 600;
          line-height: 1.5;
        }
        .vton-upload-area p:last-of-type {
          font-size: 13px;
          color: #666666;
          font-weight: 400;
          margin-top: 8px;
        }
        .vton-upload-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 20px;
          display: block;
        }
        .vton-upload-icon svg {
          width: 100%;
          height: 100%;
          stroke: #666666;
          transition: stroke 0.25s ease;
        }
        .vton-upload-area:hover .vton-upload-icon svg {
          stroke: #000000;
        }
        .vton-privacy-notice {
          font-size: 12px;
          color: #666666;
          text-align: center;
          margin: 20px 0;
          padding: 12px 16px;
          background: #f5f5f5;
          border-radius: 6px;
          border: 1px solid #e5e5e5;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .vton-privacy-notice.hidden {
          display: none;
        }
        .vton-generate-btn {
          width: 100%;
          padding: 16px 32px;
          border: 2px solid #000000;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          background: #000000;
          color: #ffffff;
          text-transform: uppercase;
        }
        .vton-generate-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
        }
        .vton-generate-btn.hidden {
          display: none;
        }
        .vton-generate-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .vton-loading {
          text-align: center;
          padding: 40px 32px;
          display: none;
          background: #ffffff;
          border-radius: 8px;
          margin: 24px 0;
          min-height: 200px;
        }
        .vton-loading.active {
          display: block;
          animation: fadeInUp 0.4s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .vton-spinner {
          border: 3px solid #e5e7eb;
          border-top: 3px solid #000000;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 24px;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .vton-loading-text {
          margin: 0 0 20px 0;
          font-size: 16px;
          color: #000000;
          font-weight: 600;
          min-height: 24px;
        }
        .vton-loading-subtext {
          margin: 16px 0 0 0;
          font-size: 13px;
          color: #666666;
          line-height: 1.6;
        }
        .vton-progress-container {
          width: 100%;
          max-width: 300px;
          margin: 0 auto 12px;
          background: #e5e7eb;
          border-radius: 4px;
          height: 6px;
          overflow: hidden;
        }
        .vton-progress-bar {
          height: 100%;
          background: #000000;
          border-radius: 4px;
          width: 0%;
          transition: width 0.4s ease;
        }
        .vton-progress-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 420px;
          margin: 0 auto;
          padding: 0 4px;
        }
        .vton-progress-text {
          font-size: 13px;
          font-weight: 600;
          color: #000000;
        }
        .vton-timer-value {
          font-size: 12px;
          font-weight: 400;
          color: #666666;
        }
        .vton-result {
          display: none;
          flex: 1;
          overflow: hidden;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .vton-result.active {
          display: flex;
        }
        .vton-result-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }
        .vton-result-title {
          font-size: 24px;
          font-weight: 800;
          color: #111827;
          text-align: center;
          margin: 0 0 8px 0;
        }
        .vton-result img {
          max-width: 100%;
          max-height: 55vh;
          width: auto;
          height: auto;
          border-radius: 20px;
          object-fit: contain;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        .vton-error {
          color: #dc2626;
          text-align: center;
          padding: 16px 20px;
          display: none;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          margin: 24px 0;
          font-size: 14px;
          line-height: 1.6;
        }
        .vton-error.active {
          display: block;
        }
        @media (max-width: 640px) {
          .vton-modal {
            max-width: 100%;
            max-height: 100vh;
            border-radius: 0;
          }
          .vton-modal-content {
            padding: 36px 24px;
          }
          .vton-upload-area {
            padding: 56px 28px;
          }
        }
      </style>
      <button class="vton-widget-button" id="vton-open-modal-btn">
        Essayer Virtuellement
      </button>
      <div id="vton-modal-overlay" class="vton-modal-overlay">
        <div class="vton-modal">
          <button class="vton-modal-close" id="vton-close-modal">&times;</button>
          <div class="vton-modal-content">
            <div id="vton-upload-area" class="vton-upload-area">
              <input type="file" id="vton-file-input" accept="image/*" style="display: none;" />
              <span class="vton-upload-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 4H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <p>Ajoutez votre photo</p>
              <p>Photo de face recommandée pour de meilleurs résultats</p>
            </div>
            <p class="vton-privacy-notice">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px; height: 14px;">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8V12" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 16H12.01" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Vos photos sont traitées de manière sécurisée et supprimées après utilisation
            </p>
            <button id="vton-generate-btn" class="vton-generate-btn" disabled>
              Essayer maintenant
            </button>
            <div id="vton-loading" class="vton-loading">
              <div class="vton-spinner"></div>
              <p id="vton-loading-message" class="vton-loading-text">Création de votre essayage virtuel<span class="vton-loading-dots"><span></span><span></span><span></span></span></p>
              <div class="vton-progress-container">
                <div id="vton-progress-bar" class="vton-progress-bar"></div>
              </div>
              <div class="vton-progress-info">
                <span id="vton-progress-text" class="vton-progress-text">0%</span>
                <span id="vton-timer-value" class="vton-timer-value">~30s</span>
              </div>
              <p class="vton-loading-subtext">Génération en cours — généralement environ 30 secondes</p>
            </div>
            <div id="vton-result" class="vton-result"></div>
            <div id="vton-error" class="vton-error"></div>
          </div>
        </div>
      </div>
    `;
    
    // Attach event listeners
    attachEventListeners(container);
  }
  
  // Attach event listeners
  function attachEventListeners(container) {
    const openBtn = container.querySelector('#vton-open-modal-btn');
    const closeBtn = container.querySelector('#vton-close-modal');
    const overlay = container.querySelector('#vton-modal-overlay');
    const uploadArea = container.querySelector('#vton-upload-area');
    const fileInput = container.querySelector('#vton-file-input');
    const generateBtn = container.querySelector('#vton-generate-btn');
    
    if (openBtn) {
      openBtn.addEventListener('click', openModal);
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    
    if (overlay) {
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
          closeModal();
        }
      });
    }
    
    if (uploadArea && fileInput) {
      uploadArea.addEventListener('click', function() {
        fileInput.click();
      });
      
      fileInput.addEventListener('change', function(e) {
        handleFileChange(e);
      });
    }
    
    if (generateBtn) {
      generateBtn.addEventListener('click', generateTryOn);
    }
  }
  
  // Open modal
  function openModal() {
    const overlay = document.getElementById('vton-modal-overlay');
    if (overlay) {
      overlay.classList.add('active');
      widgetState.modalOpen = true;
      
      // Prevent body scroll
      const body = document.body;
      const html = document.documentElement;
      const scrollY = window.scrollY;
      
      body.style.position = 'fixed';
      body.style.top = '-' + scrollY + 'px';
      body.style.width = '100%';
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
      
      widgetState.savedScrollY = scrollY;
    }
  }
  
  // Close modal
  function closeModal() {
    const overlay = document.getElementById('vton-modal-overlay');
    if (overlay) {
      overlay.classList.remove('active');
      widgetState.modalOpen = false;
      
      // Restore body scroll
      const body = document.body;
      const html = document.documentElement;
      const scrollY = widgetState.savedScrollY || 0;
      
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      html.style.overflow = '';
      
      window.scrollTo(0, scrollY);
      widgetState.savedScrollY = null;
    }
  }
  
  // Handle file change
  function handleFileChange(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
      widgetState.userPhoto = e.target.result;
      const uploadArea = document.getElementById('vton-upload-area');
      const generateBtn = document.getElementById('vton-generate-btn');
      
      if (uploadArea) {
        uploadArea.className = 'vton-upload-area has-image';
        uploadArea.innerHTML = '<img src="' + widgetState.userPhoto + '" alt="Preview" />';
      }
      
      if (generateBtn) {
        generateBtn.disabled = false;
      }
    };
    reader.readAsDataURL(file);
  }
  
  // Generate try-on (utilise la logique existante d'app.js)
  async function generateTryOn() {
    if (!widgetState.userPhoto) {
      return;
    }
    
    if (widgetState.isGenerating) {
      warn('[VTON Widget] Generation already in progress');
      return;
    }
    
    widgetState.isGenerating = true;
    
    const loading = document.getElementById('vton-loading');
    const generateBtn = document.getElementById('vton-generate-btn');
    const result = document.getElementById('vton-result');
    const errorElement = document.getElementById('vton-error');
    const uploadArea = document.getElementById('vton-upload-area');
    const privacyNotice = document.querySelector('.vton-privacy-notice');
    
    // Show loading
    if (loading) loading.classList.add('active');
    if (generateBtn) {
      generateBtn.disabled = true;
      generateBtn.classList.add('hidden');
    }
    if (privacyNotice) privacyNotice.classList.add('hidden');
    if (uploadArea) uploadArea.classList.add('hidden');
    if (result) {
      result.classList.remove('active');
      result.innerHTML = '';
    }
    if (errorElement) {
      errorElement.classList.remove('active');
      errorElement.textContent = '';
    }
    
    // Start loading animation
    startLoadingAnimation();
    
    try {
      // Utiliser la logique existante d'app.js
      // On va appeler directement les fonctions d'app.js si disponibles
      if (typeof window.vtonGenerate === 'function') {
        // Si la fonction globale existe, l'utiliser
        await window.vtonGenerate(widgetState.userPhoto);
      } else {
        // Sinon, utiliser la logique directe avec Replicate
        await generateWithReplicate();
      }
    } catch (err) {
      error('[VTON Widget] Generation error:', err);
      stopLoadingAnimation();
      if (loading) loading.classList.remove('active');
      if (generateBtn) {
        generateBtn.disabled = false;
        generateBtn.classList.remove('hidden');
      }
      if (errorElement) {
        errorElement.classList.add('active');
        errorElement.textContent = err.message || 'Une erreur est survenue. Veuillez réessayer.';
      }
      widgetState.isGenerating = false;
    }
  }
  
  // Generate with Replicate (logique simplifiée)
  async function generateWithReplicate() {
    // Vérifier la configuration
    if (!window.cfg || !window.cfg.replicateApiToken) {
      throw new Error('Token Replicate non configuré. Vérifiez votre configuration.');
    }
    
    // Convertir la photo en base64
    const userImageBase64 = widgetState.userPhoto.split(',')[1];
    
    // Upload vers Imgur pour obtenir une URL publique
    const userImageUrl = await uploadToImgur(userImageBase64);
    if (!userImageUrl) {
      throw new Error('Échec de l\'upload vers Imgur. Veuillez réessayer.');
    }
    
    // Obtenir l'image produit (depuis la démo existante ou utiliser une image par défaut)
    let productImageUrl = null;
    const productImageInput = document.querySelector('#product-image');
    if (productImageInput && productImageInput.files && productImageInput.files[0]) {
      const productFile = productImageInput.files[0];
      const productBase64 = await fileToBase64(productFile);
      productImageUrl = await uploadToImgur(productBase64);
    } else {
      // Utiliser une image produit par défaut si disponible
      const defaultProductImg = document.querySelector('.demo-preview img');
      if (defaultProductImg && defaultProductImg.src) {
        productImageUrl = defaultProductImg.src;
      } else {
        throw new Error('Veuillez sélectionner une image produit.');
      }
    }
    
    if (!productImageUrl) {
      throw new Error('Image produit manquante.');
    }
    
    // Créer la prédiction Replicate
    const prediction = await createReplicatePrediction(userImageUrl, productImageUrl);
    
    // Polling pour le statut
    await pollPredictionStatus(prediction.id);
  }
  
  // Upload to Imgur
  async function uploadToImgur(base64Image) {
    try {
      const response = await fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
          'Authorization': 'Client-ID 546c25a59c58ad7',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: base64Image,
          type: 'base64'
        })
      });
      
      if (!response.ok) {
        return null;
      }
      
      const data = await response.json();
      if (data.success && data.data && data.data.link) {
        return data.data.link;
      }
      return null;
    } catch (error) {
      console.error('Imgur upload error:', error);
      return null;
    }
  }
  
  // File to base64
  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  
  // Create Replicate prediction
  async function createReplicatePrediction(userImageUrl, productImageUrl) {
    const cfg = window.cfg;
    if (!cfg) {
      throw new Error('Configuration non disponible');
    }
    
    const response = await fetch(`${cfg.replicateApiUrl}/predictions`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${cfg.replicateApiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version: cfg.replicateModel || 'bytedance/seedream-4.5',
        input: {
          aspect_ratio: "1:1",
          height: cfg.replicateImageSize || 2048,
          image_input: [userImageUrl, productImageUrl],
          max_images: 10,
          prompt: cfg.replicatePrompt || "This is NOT a redesign task.\n\nIt is a garment transfer task.\n\nUse the clothing from the second image exactly as-is with zero creative interpretation.\n\nThe output must look like the REAL clothing item was physically worn by the person.\n\nNo invented graphics, no color changes, no simplification.",
          sequential_image_generation: "disabled",
          size: "custom",
          width: cfg.replicateImageSize || 2048
        }
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erreur API Replicate: ${response.status} - ${errorText}`);
    }
    
    const prediction = await response.json();
    if (!prediction.id) {
      throw new Error('ID de prédiction manquant');
    }
    
    return prediction;
  }
  
  // Poll prediction status
  async function pollPredictionStatus(predictionId) {
    const cfg = window.cfg;
    const maxAttempts = 60;
    let attempts = 0;
    
    const pollInterval = setInterval(async () => {
      attempts++;
      
      if (attempts > maxAttempts) {
        clearInterval(pollInterval);
        throw new Error('Timeout: La génération a pris trop de temps.');
      }
      
      try {
        const response = await fetch(`${cfg.replicateApiUrl}/predictions/${predictionId}`, {
          headers: {
            'Authorization': `Token ${cfg.replicateApiToken}`,
          }
        });
        
        if (!response.ok) {
          throw new Error(`Erreur statut: ${response.status}`);
        }
        
        const prediction = await response.json();
        
        // Update progress
        updateProgress(attempts, maxAttempts);
        
        if (prediction.status === 'succeeded' && prediction.output) {
          clearInterval(pollInterval);
          const resultUrl = Array.isArray(prediction.output) ? prediction.output[0] : prediction.output;
          displayResult(resultUrl);
        } else if (prediction.status === 'failed' || prediction.status === 'canceled') {
          clearInterval(pollInterval);
          throw new Error(prediction.error || 'La génération a échoué.');
        }
      } catch (err) {
        if (attempts >= 5) {
          clearInterval(pollInterval);
          throw err;
        }
      }
    }, 2000);
  }
  
  // Update progress
  function updateProgress(current, max) {
    const progress = Math.min((current / max) * 92, 92); // Max 92% until complete
    const progressBar = document.getElementById('vton-progress-bar');
    const progressText = document.getElementById('vton-progress-text');
    const timerValue = document.getElementById('vton-timer-value');
    
    if (progressBar) {
      progressBar.style.width = progress + '%';
    }
    if (progressText) {
      progressText.textContent = Math.floor(progress) + '%';
    }
    if (timerValue) {
      const elapsed = current * 2;
      const remaining = Math.max(0, 30 - elapsed);
      timerValue.textContent = elapsed + 's • ~' + remaining + 's restant';
    }
  }
  
  // Display result
  function displayResult(resultUrl) {
    widgetState.resultImageUrl = resultUrl;
    widgetState.isGenerating = false;
    
    const loading = document.getElementById('vton-loading');
    const result = document.getElementById('vton-result');
    const generateBtn = document.getElementById('vton-generate-btn');
    const progressBar = document.getElementById('vton-progress-bar');
    const progressText = document.getElementById('vton-progress-text');
    
    stopLoadingAnimation();
    
    if (loading) loading.classList.remove('active');
    if (generateBtn) {
      generateBtn.disabled = false;
      generateBtn.classList.add('hidden');
    }
    if (progressBar) progressBar.style.width = '100%';
    if (progressText) progressText.textContent = '100%';
    
    if (result) {
      result.classList.add('active');
      result.innerHTML = `
        <div class="vton-result-content">
          <h3 class="vton-result-title">Voici votre résultat !</h3>
          <img src="${resultUrl}" alt="Résultat essayage virtuel" />
        </div>
      `;
    }
  }
  
  // Start loading animation
  function startLoadingAnimation() {
    // Animation simple pour les messages de chargement
    const messages = [
      'Création de votre essayage virtuel',
      'Analyse de votre photo avec précision',
      'Traitement de l\'image en haute résolution',
      'Ajustement final des détails'
    ];
    let messageIndex = 0;
    const messageElement = document.getElementById('vton-loading-message');
    
    const messageInterval = setInterval(() => {
      if (messageElement && !widgetState.isGenerating) {
        clearInterval(messageInterval);
        return;
      }
      messageIndex = (messageIndex + 1) % messages.length;
      if (messageElement) {
        messageElement.textContent = messages[messageIndex] + '<span class="vton-loading-dots"><span></span><span></span><span></span></span>';
      }
    }, 3000);
    
    widgetState.loadingInterval = messageInterval;
  }
  
  // Stop loading animation
  function stopLoadingAnimation() {
    if (widgetState.loadingInterval) {
      clearInterval(widgetState.loadingInterval);
      widgetState.loadingInterval = null;
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }
  
  // Expose widget API globally
  window.vtonWidget = {
    open: openModal,
    close: closeModal,
    generate: generateTryOn
  };
  
})();

