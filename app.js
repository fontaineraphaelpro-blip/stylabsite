// Virtual Try-On Demo Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Attendre que la configuration soit chargée
    if (!window.config) {
        console.error('⚠️ window.config n\'est pas défini! Vérifiez que config.js est chargé avant app.js');
        // Créer une config par défaut en attendant
        window.config = {
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
    }
    
    // Charger la configuration
    const cfg = window.config;
    
    // Vérifier que le token est bien chargé
    console.log('=== VÉRIFICATION CONFIGURATION DANS APP.JS ===');
    console.log('window._env existe:', !!window._env);
    if (window._env) {
        console.log('window._env.REPLICATE_API_TOKEN:', window._env.REPLICATE_API_TOKEN || 'VIDE');
        console.log('window._env.REPLICATE_API_TOKEN (preview):', window._env.REPLICATE_API_TOKEN ? window._env.REPLICATE_API_TOKEN.substring(0, 10) + '...' : 'MANQUANT');
    }
    console.log('cfg.replicateApiToken:', cfg.replicateApiToken ? cfg.replicateApiToken.substring(0, 10) + '... (longueur: ' + cfg.replicateApiToken.length + ')' : 'MANQUANT');
    console.log('cfg.replicateApiToken (valeur brute):', cfg.replicateApiToken || 'VIDE');
    console.log('cfg.replicateModel:', cfg.replicateModel);
    console.log('===============================');
    
    const userPhotoInput = document.getElementById('userPhoto');
    const productImageInput = document.getElementById('productImage');
    const tryOnBtn = document.getElementById('tryOnBtn');
    const preview = document.getElementById('preview');
    
    let userPhotoFile = null;
    let productImageFile = null;
    
    // Handle user photo upload
    userPhotoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const validation = cfg.validateFile(file);
            if (!validation.valid) {
                alert(validation.error);
                e.target.value = '';
                return;
            }
            
            userPhotoFile = file;
            const label = userPhotoInput.closest('.upload-label');
            
            // Supprimer les anciens éléments (feedback, preview)
            const existingFeedback = label.querySelector('.upload-feedback');
            const existingPreview = label.querySelector('.upload-preview');
            if (existingFeedback) existingFeedback.remove();
            if (existingPreview) existingPreview.remove();
            
            // Créer un aperçu de l'image
            const reader = new FileReader();
            reader.onload = function(e) {
                const preview = document.createElement('div');
                preview.className = 'upload-preview';
                preview.style.cssText = 'width: 100%; height: 100%; position: absolute; top: 0; left: 0; border-radius: 1rem; overflow: hidden; background: var(--white);';
                
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
                preview.appendChild(img);
                
                // Overlay avec le texte
                const overlay = document.createElement('div');
                overlay.style.cssText = 'position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); padding: 1rem; color: white;';
                
                const feedback = document.createElement('span');
                feedback.className = 'upload-feedback';
                feedback.style.cssText = 'color: var(--green); font-weight: 600; font-size: 0.875rem;';
                feedback.textContent = '✓ Photo téléchargée';
                overlay.appendChild(feedback);
                
                preview.appendChild(overlay);
                label.style.position = 'relative';
                label.appendChild(preview);
            };
            reader.readAsDataURL(file);
            
            checkFilesReady();
        }
    });
    
    // Handle product image upload
    productImageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const validation = cfg.validateFile(file);
            if (!validation.valid) {
                alert(validation.error);
                e.target.value = '';
                return;
            }
            
            productImageFile = file;
            const label = productImageInput.closest('.upload-label');
            
            // Supprimer les anciens éléments (feedback, preview)
            const existingFeedback = label.querySelector('.upload-feedback');
            const existingPreview = label.querySelector('.upload-preview');
            if (existingFeedback) existingFeedback.remove();
            if (existingPreview) existingPreview.remove();
            
            // Créer un aperçu de l'image
            const reader = new FileReader();
            reader.onload = function(e) {
                const preview = document.createElement('div');
                preview.className = 'upload-preview';
                preview.style.cssText = 'width: 100%; height: 100%; position: absolute; top: 0; left: 0; border-radius: 1rem; overflow: hidden; background: var(--white);';
                
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
                preview.appendChild(img);
                
                // Overlay avec le texte
                const overlay = document.createElement('div');
                overlay.style.cssText = 'position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); padding: 1rem; color: white;';
                
                const feedback = document.createElement('span');
                feedback.className = 'upload-feedback';
                feedback.style.cssText = 'color: var(--green); font-weight: 600; font-size: 0.875rem;';
                feedback.textContent = '✓ Produit téléchargé';
                overlay.appendChild(feedback);
                
                preview.appendChild(overlay);
                label.style.position = 'relative';
                label.appendChild(preview);
            };
            reader.readAsDataURL(file);
            
            checkFilesReady();
        }
    });
    
    // Enable/disable try-on button based on file availability
    function checkFilesReady() {
        if (userPhotoFile && productImageFile) {
            tryOnBtn.disabled = false;
        } else {
            tryOnBtn.disabled = true;
        }
    }
    
    // Handle try-on button click
    tryOnBtn.addEventListener('click', function() {
        if (!userPhotoFile || !productImageFile) {
            return;
        }
        
        // Show loading state
        tryOnBtn.disabled = true;
        tryOnBtn.classList.add('loading');
        tryOnBtn.textContent = 'Traitement en cours...';
        
        // Create canvas for image processing
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Load both images
        const userImg = new Image();
        const productImg = new Image();
        
        let userImgLoaded = false;
        let productImgLoaded = false;
        
        userImg.onload = function() {
            userImgLoaded = true;
            processImages();
        };
        
        productImg.onload = function() {
            productImgLoaded = true;
            processImages();
        };
        
        userImg.onerror = function() {
            showError('Erreur lors du chargement de votre photo.');
            resetButton();
        };
        
        productImg.onerror = function() {
            showError('Erreur lors du chargement de l\'image du produit.');
            resetButton();
        };
        
        userImg.src = URL.createObjectURL(userPhotoFile);
        productImg.src = URL.createObjectURL(productImageFile);
        
        function processImages() {
            if (!userImgLoaded || !productImgLoaded) {
                return;
            }
            
            // Nettoyer les URLs d'objets (on n'en a plus besoin)
            URL.revokeObjectURL(userImg.src);
            URL.revokeObjectURL(productImg.src);
            
            // Appel à l'API Virtual Try-On
            // TOUJOURS utiliser l'API Replicate - PAS de fallback local
            console.log('=== DÉBUT DE LA GÉNÉRATION ===');
            console.log('Configuration Replicate:', {
                hasToken: !!cfg.replicateApiToken,
                tokenPrefix: cfg.replicateApiToken ? cfg.replicateApiToken.substring(0, 10) + '...' : 'MANQUANT',
                apiUrl: cfg.replicateApiUrl || 'https://api.replicate.com/v1',
                model: cfg.replicateModel || 'bytedance/seedream-4.5',
                appUrl: cfg.appUrl,
                hostName: cfg.hostName
            });
            
            if (!cfg.replicateApiToken) {
                console.error('❌ Token Replicate MANQUANT!');
                console.error('Vérifiez que env.js contient REPLICATE_API_TOKEN');
                showError('⚠️ Configuration manquante: Le token Replicate API n\'est pas configuré.<br><br>Pour utiliser la démo complète, vous devez :<br>1. Configurer REPLICATE_API_TOKEN dans les variables d\'environnement Netlify<br>2. Redéployer le site (le script generate-env.js créera env.js automatiquement)<br>3. Ou créer un fichier env.js localement pour le développement<br><br>Consultez NETLIFY_SETUP.md pour plus d\'informations.');
                resetButton();
                return;
            }
            
            console.log('✅ Token Replicate trouvé, appel à l\'API Replicate...');
            processWithRailwayAPI(cfg);
        }
        
        // Fonction pour appeler directement l'API Replicate
        function processWithRailwayAPI(cfg) {
            // S'assurer que l'URL de l'API Replicate est définie
            if (!cfg.replicateApiUrl) {
                cfg.replicateApiUrl = 'https://api.replicate.com/v1';
            }
            
            console.log('processWithRailwayAPI appelé avec:', {
                hasToken: !!cfg.replicateApiToken,
                apiUrl: cfg.replicateApiUrl,
                model: cfg.replicateModel
            });
            
            // TOUJOURS appeler directement l'API Replicate si le token est présent
            if (cfg.replicateApiToken) {
                console.log('Appel direct à l\'API Replicate...');
                processWithReplicateAPI(cfg);
                return;
            }
            
            // Si pas de token, erreur
            console.error('Token Replicate manquant dans processWithRailwayAPI');
            showError('Token Replicate manquant. Vérifiez votre configuration.');
            resetButton();
        }
        
        // Fonction pour appeler directement l'API Replicate
        async function processWithReplicateAPI(cfg) {
            try {
                console.log('Début de processWithReplicateAPI');
                
                // Étape 1: Uploader les images pour obtenir des URLs
                const baseUrl = cfg.appUrl || (cfg.hostName ? `https://${cfg.hostName}` : cfg.apiUrl);
                const uploadUrl = `${baseUrl}/api/upload`;
                
                console.log('Upload URL:', uploadUrl);
                updatePreviewStatus('Upload des images...');
                
                // Uploader les deux images
                const formData = new FormData();
                formData.append('user_photo', userPhotoFile);
                formData.append('product_image', productImageFile);
                
                let uploadResponse;
                try {
                    uploadResponse = await fetch(uploadUrl, {
                        method: 'POST',
                        body: formData,
                        // Mode 'no-cors' pour éviter les erreurs CORS, mais on ne pourra pas lire la réponse
                        // On va plutôt utiliser un timeout et catch l'erreur
                    });
                    
                    console.log('Réponse upload:', uploadResponse.status, uploadResponse.statusText);
                    
                    if (!uploadResponse.ok) {
                        throw new Error(`Upload failed: ${uploadResponse.status} ${uploadResponse.statusText}`);
                    }
                } catch (error) {
                    // Erreur réseau, CORS, ou 404 - passer directement à Imgur
                    console.warn('⚠️ Upload Railway échoué (erreur réseau/CORS/404):', error.message);
                    console.warn('🔄 Passage automatique vers Imgur (service public)...');
                    updatePreviewStatus('Upload Railway indisponible, utilisation d\'Imgur...');
                    // Passer directement à Imgur (qui génère des URLs publiques)
                    await processWithReplicateBase64(cfg);
                    return; // Important : ne pas continuer avec le code Railway
                }
                
                const uploadData = await uploadResponse.json();
                console.log('Données upload:', uploadData);
                
                const userImageUrl = uploadData.user_photo_url || uploadData.user_url || uploadData.user_image;
                const productImageUrl = uploadData.product_image_url || uploadData.product_url || uploadData.garment_url || uploadData.garment_image;
                
                if (!userImageUrl || !productImageUrl) {
                    console.error('URLs manquantes. Données reçues:', uploadData);
                    throw new Error('URLs d\'images manquantes dans la réponse. Vérifiez que l\'API retourne user_photo_url et product_image_url');
                }
                
                console.log('URLs obtenues:', { userImageUrl, productImageUrl });
                
                // Étape 2: Créer la prédiction Replicate avec les URLs
                updatePreviewStatus('Création de la prédiction Replicate...');
                
                const replicateApiUrl = cfg.replicateApiUrl || 'https://api.replicate.com/v1';
                const replicateModel = cfg.replicateModel || 'bytedance/seedream-4.5';
                const requestBody = {
                    version: replicateModel,
                    input: {
                        aspect_ratio: "1:1",
                        height: cfg.replicateImageSize || 2048,
                        image_input: [
                            userImageUrl,  // Photo de la personne (première image)
                            productImageUrl // Image du vêtement (deuxième image)
                        ],
                        max_images: 10,
                        prompt: cfg.replicatePrompt || "This is NOT a redesign task.\n\nIt is a garment transfer task.\n\nUse the clothing from the second image exactly as-is with zero creative interpretation.\n\nThe output must look like the REAL clothing item was physically worn by the person.\n\nNo invented graphics, no color changes, no simplification.",
                        sequential_image_generation: "disabled",
                        size: "custom",
                        width: cfg.replicateImageSize || 2048
                    }
                };
                
                console.log('Envoi de la requête à Replicate:', {
                    url: `${replicateApiUrl}/predictions`,
                    model: replicateModel,
                    hasToken: !!cfg.replicateApiToken,
                    imageInputCount: requestBody.input.image_input.length
                });
                
                const predictionResponse = await fetch(`${replicateApiUrl}/predictions`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Token ${cfg.replicateApiToken}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody)
                });
                
                console.log('Réponse Replicate:', predictionResponse.status, predictionResponse.statusText);
                
                const responseText = await predictionResponse.text();
                console.log('Contenu de la réponse Replicate:', responseText);
                
                if (!predictionResponse.ok) {
                    let errorData;
                    try {
                        errorData = JSON.parse(responseText);
                    } catch (e) {
                        errorData = { detail: responseText };
                    }
                    console.error('Erreur Replicate:', errorData);
                    throw new Error(errorData.detail || errorData.error || `Erreur API Replicate: ${predictionResponse.status}`);
                }
                
                let prediction;
                try {
                    prediction = JSON.parse(responseText);
                } catch (e) {
                    throw new Error('Réponse JSON invalide de Replicate: ' + responseText);
                }
                
                console.log('Prédiction créée avec succès:', prediction);
                
                if (!prediction.id) {
                    console.error('Réponse Replicate sans ID:', prediction);
                    throw new Error('ID de prédiction manquant dans la réponse');
                }
                
                // Afficher le statut
                updatePreviewStatus('Génération en cours...');
                
                // Polling pour vérifier le statut de la prédiction
                console.log('Démarrage du polling pour la prédiction:', prediction.id);
                pollPredictionStatus(prediction.id, cfg);
                
            } catch (error) {
                console.error('Erreur Replicate:', error);
                showError(`Erreur lors de la génération: ${error.message}`);
                resetButton();
            }
        }
        
        // Fonction alternative avec upload vers Imgur (fallback)
        // Replicate nécessite des URLs publiques, pas de base64
        async function processWithReplicateBase64(cfg) {
            try {
                updatePreviewStatus('Conversion des images en base64 pour upload...');
                
                // Convertir les images en base64 pour upload vers Imgur
                const userImageBase64 = await fileToBase64(userPhotoFile);
                const productImageBase64 = await fileToBase64(productImageFile);
                
                // Replicate nécessite des URLs publiques, pas de data URLs
                // Utiliser Imgur pour obtenir des URLs publiques
                updatePreviewStatus('Upload des images vers Imgur (service public gratuit)...');
                
                // Uploader vers Imgur pour obtenir des URLs publiques
                const userImageUrl = await uploadToImgur(userImageBase64);
                const productImageUrl = await uploadToImgur(productImageBase64);
                
                if (!userImageUrl || !productImageUrl) {
                    throw new Error('Échec de l\'upload vers Imgur. Veuillez réessayer. Replicate nécessite des URLs publiques pour fonctionner.');
                }
                
                console.log('✅ Images uploadées vers Imgur:', { userImageUrl, productImageUrl });
                updatePreviewStatus('Création de la prédiction Replicate avec les URLs publiques...');
                
                // Utiliser les URLs Imgur (publiques) pour Replicate
                await createReplicatePrediction(cfg, userImageUrl, productImageUrl);
                
            } catch (error) {
                console.error('Erreur upload Imgur/Replicate:', error);
                showError(`Erreur lors de la génération: ${error.message}<br><br>Replicate nécessite des URLs publiques. Si l'upload vers Imgur échoue, vérifiez votre connexion internet.`);
                resetButton();
            }
        }
        
        // Fonction pour convertir un fichier en base64
        function fileToBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    // Enlever le préfixe data:image/...;base64,
                    const base64 = reader.result.split(',')[1];
                    resolve(base64);
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }
        
        // Fonction pour uploader une image vers Imgur (service public gratuit)
        // Imgur fournit des URLs publiques que Replicate peut utiliser
        async function uploadToImgur(base64Image) {
            try {
                console.log('Upload vers Imgur...');
                const response = await fetch('https://api.imgur.com/3/image', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Client-ID 546c25a59c58ad7', // Client ID public Imgur (gratuit, sans limite)
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        image: base64Image,
                        type: 'base64'
                    })
                });
                
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('Erreur Imgur:', response.status, errorText);
                    return null;
                }
                
                const data = await response.json();
                if (data.success && data.data && data.data.link) {
                    console.log('✅ Image uploadée vers Imgur:', data.data.link);
                    return data.data.link;
                } else {
                    console.error('Réponse Imgur invalide:', data);
                    return null;
                }
            } catch (error) {
                console.error('Erreur upload Imgur:', error);
                return null;
            }
        }
        
        // Fonction pour créer une prédiction Replicate avec des URLs d'images
        async function createReplicatePrediction(cfg, userImageUrl, productImageUrl) {
            try {
                updatePreviewStatus('Création de la prédiction Replicate...');
                
                const predictionResponse = await fetch(`${cfg.replicateApiUrl}/predictions`, {
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
                            image_input: [
                                userImageUrl,  // Photo de la personne (première image)
                                productImageUrl // Image du vêtement (deuxième image)
                            ],
                            max_images: 10,
                            prompt: cfg.replicatePrompt || "This is NOT a redesign task.\n\nIt is a garment transfer task.\n\nUse the clothing from the second image exactly as-is with zero creative interpretation.\n\nThe output must look like the REAL clothing item was physically worn by the person.\n\nNo invented graphics, no color changes, no simplification.",
                            sequential_image_generation: "disabled",
                            size: "custom",
                            width: cfg.replicateImageSize || 2048
                        }
                    })
                });
                
                if (!predictionResponse.ok) {
                    const errorText = await predictionResponse.text();
                    let errorData;
                    try {
                        errorData = JSON.parse(errorText);
                    } catch (e) {
                        errorData = { detail: errorText };
                    }
                    throw new Error(errorData.detail || `Erreur API Replicate: ${predictionResponse.status}`);
                }
                
                const prediction = await predictionResponse.json();
                
                if (!prediction.id) {
                    throw new Error('ID de prédiction manquant dans la réponse');
                }
                
                updatePreviewStatus('Génération en cours...');
                pollPredictionStatus(prediction.id, cfg);
            } catch (error) {
                console.error('Erreur création prédiction Replicate:', error);
                showError(`Erreur lors de la création de la prédiction: ${error.message}`);
                resetButton();
            }
        }
        
        // Fonction pour vérifier le statut de la prédiction (polling)
        async function pollPredictionStatus(predictionId, cfg) {
            const maxAttempts = 120; // 10 minutes max (5 secondes * 120)
            let attempts = 0;
            
            const poll = async () => {
                try {
                    console.log(`Vérification du statut (tentative ${attempts + 1}/${maxAttempts})...`);
                    
                    const response = await fetch(`${cfg.replicateApiUrl}/predictions/${predictionId}`, {
                        headers: {
                            'Authorization': `Token ${cfg.replicateApiToken}`,
                        }
                    });
                    
                    if (!response.ok) {
                        const errorText = await response.text();
                        throw new Error(`Erreur lors de la vérification du statut: ${response.status} - ${errorText}`);
                    }
                    
                    const prediction = await response.json();
                    console.log('Statut de la prédiction:', prediction.status, prediction);
                    
                    if (prediction.status === 'succeeded') {
                        // Le résultat est prêt, l'afficher
                        console.log('Génération réussie! Résultat:', prediction.output);
                        
                        let resultUrl = null;
                        
                        // Gérer différents formats de réponse
                        if (Array.isArray(prediction.output)) {
                            // Si c'est un tableau, prendre le premier élément
                            resultUrl = prediction.output[0];
                        } else if (typeof prediction.output === 'string') {
                            // Si c'est une string (URL)
                            resultUrl = prediction.output;
                        } else if (prediction.output && prediction.output.url) {
                            // Si c'est un objet avec une propriété url
                            resultUrl = prediction.output.url;
                        } else if (prediction.output && prediction.output.image) {
                            // Si c'est un objet avec une propriété image
                            resultUrl = prediction.output.image;
                        }
                        
                        if (resultUrl) {
                            displayResult(resultUrl);
                            resetButton();
                        } else {
                            console.error('Format de réponse inattendu:', prediction.output);
                            showError('Format de réponse inattendu de l\'API. Vérifiez la console pour plus de détails.');
                            resetButton();
                        }
                    } else if (prediction.status === 'failed') {
                        const errorMsg = prediction.error || prediction.detail || 'Erreur inconnue';
                        console.error('Génération échouée:', errorMsg);
                        showError(`La génération a échoué: ${errorMsg}`);
                        resetButton();
                    } else if (prediction.status === 'canceled') {
                        console.warn('Génération annulée');
                        showError('La génération a été annulée');
                        resetButton();
                    } else {
                        // En cours (starting, processing)
                        attempts++;
                        
                        if (attempts >= maxAttempts) {
                            console.error('Timeout atteint après', attempts * 5, 'secondes');
                            showError('Timeout: La génération prend trop de temps (10 minutes max). Veuillez réessayer.');
                            resetButton();
                        } else {
                            // Mettre à jour le statut avec le temps écoulé
                            const elapsedSeconds = attempts * 5;
                            const minutes = Math.floor(elapsedSeconds / 60);
                            const seconds = elapsedSeconds % 60;
                            const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
                            
                            updatePreviewStatus(`Génération en cours... (${timeStr})`);
                            
                            // Réessayer dans 5 secondes
                            setTimeout(poll, 5000);
                        }
                    }
                } catch (error) {
                    console.error('Erreur polling:', error);
                    showError(`Erreur lors de la vérification: ${error.message}`);
                    resetButton();
                }
            };
            
            // Démarrer le polling immédiatement
            poll();
        }
        
        // Fonction pour mettre à jour le statut dans le preview
        function updatePreviewStatus(message) {
            preview.innerHTML = `<div style="color: var(--primary); font-weight: 600; text-align: center; padding: 2rem; background: #eff6ff; border-radius: 0.75rem; border: 2px solid #bfdbfe;">${message}</div>`;
        }
        
        // Fonction pour afficher le résultat
        function displayResult(imageUrl) {
            console.log('Affichage du résultat:', imageUrl);
            
            // Nettoyer le preview
            preview.innerHTML = '';
            
            // Créer l'image de résultat
            const resultImg = document.createElement('img');
            resultImg.src = imageUrl;
            resultImg.style.maxWidth = '100%';
            resultImg.style.height = 'auto';
            resultImg.style.borderRadius = '0.75rem';
            resultImg.style.display = 'block';
            resultImg.style.margin = '0 auto';
            
            // Gérer les erreurs de chargement d'image
            resultImg.onerror = function() {
                console.error('Erreur de chargement de l\'image:', imageUrl);
                showError('Erreur lors du chargement de l\'image générée. Vérifiez la console pour plus de détails.');
            };
            
            resultImg.onload = function() {
                console.log('Image chargée avec succès');
            };
            
            preview.appendChild(resultImg);
            
            // Message de succès
            const successMsg = document.createElement('p');
            successMsg.style.marginTop = '1rem';
            successMsg.style.color = 'var(--green)';
            successMsg.style.fontWeight = '600';
            successMsg.style.textAlign = 'center';
            successMsg.textContent = '✓ Essayage virtuel réussi !';
            preview.appendChild(successMsg);
        }
        
        function showError(message) {
            preview.innerHTML = `<div style="color: #ef4444; font-weight: 600; padding: 1.5rem; background: #fef2f2; border-radius: 0.75rem; border: 2px solid #fecaca;">${message}</div>`;
        }
        
        function resetButton() {
            tryOnBtn.disabled = false;
            tryOnBtn.classList.remove('loading');
            tryOnBtn.textContent = 'Essayer virtuellement';
        }
    });
});

