# 🔧 Résolution Problèmes Démo Virtual Try-On

## ❌ Problèmes courants et solutions

### 1. "Token Replicate non configuré"

**Problème** : Le message d'erreur indique que le token Replicate API n'est pas configuré.

**Solution** :

#### Option A : Créer le fichier `env.js` localement

1. Copiez `env.example.js` vers `env.js` :
```bash
cp env.example.js env.js
```

2. Éditez `env.js` et ajoutez votre token Replicate :
```javascript
window._env = {
    'REPLICATE_API_TOKEN': 'votre_token_ici',
    'APP_URL': 'https://vton-production-890a.up.railway.app',
    // ... autres variables
};
```

3. Rechargez la page dans votre navigateur

#### Option B : Utiliser les variables d'environnement Vercel

Si vous déployez sur Vercel :

1. Allez dans les **Settings** de votre projet Vercel
2. **Environment Variables**
3. Ajoutez `REPLICATE_API_TOKEN` avec votre token
4. Redéployez

### 2. "Erreur upload" ou "Upload échoué"

**Problème** : L'API d'upload Railway n'est pas accessible ou n'existe pas.

**Causes possibles** :
- L'URL `https://vton-production-890a.up.railway.app/api/upload` n'est pas accessible
- Le service Railway n'est pas déployé
- Problème de CORS

**Solutions** :

#### Solution 1 : Vérifier l'API Railway

1. Vérifiez que l'API Railway est bien déployée
2. Testez l'endpoint : `https://vton-production-890a.up.railway.app/api/upload`
3. Vérifiez les logs Railway pour les erreurs

#### Solution 2 : Utiliser un service d'upload alternatif

Modifiez `config.js` pour utiliser un autre service :
- Cloudinary
- Imgur API
- Votre propre service d'upload

#### Solution 3 : Mode démo sans upload

Le code essaie automatiquement d'utiliser base64 si l'upload échoue, mais Replicate nécessite généralement des URLs publiques.

### 3. "URLs d'images manquantes"

**Problème** : L'API d'upload ne retourne pas les URLs attendues.

**Solution** : Vérifiez que l'API retourne bien :
```json
{
  "user_photo_url": "https://...",
  "product_image_url": "https://..."
}
```

Ou adaptez le code dans `app.js` ligne 297-298 pour correspondre au format de votre API.

### 4. La démo ne fonctionne pas du tout

**Vérifications à faire** :

1. **Ouvrez la console du navigateur** (F12)
2. Vérifiez les messages d'erreur
3. Vérifiez que les fichiers sont bien chargés :
   - `env.js` doit être chargé
   - `config.js` doit être chargé
   - `app.js` doit être chargé

**Messages à chercher dans la console** :
- `⚠️ window._env n'est PAS défini` → `env.js` n'est pas chargé
- `⚠️ window.config n'est pas défini` → `config.js` n'est pas chargé
- `❌ Token Replicate MANQUANT` → Token non configuré

### 5. Problème de CORS

**Problème** : Erreur CORS lors de l'appel à l'API.

**Solution** : Configurez les headers CORS sur votre API backend :
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

## 🧪 Test de la configuration

Utilisez `test-config.html` pour vérifier que tout est bien configuré :

1. Ouvrez `test-config.html` dans votre navigateur
2. Vérifiez que tous les éléments affichent "OUI"
3. Vérifiez que le token Replicate est présent

## 📝 Configuration minimale requise

Pour que la démo fonctionne, vous devez avoir :

1. ✅ Fichier `env.js` avec `REPLICATE_API_TOKEN`
2. ✅ API d'upload accessible (Railway ou autre)
3. ✅ Token Replicate valide
4. ✅ Modèle Replicate configuré (par défaut: `bytedance/seedream-4.5`)

## 🚀 Mode démo simplifié (sans backend)

Si vous voulez une démo qui fonctionne sans backend, vous pouvez :

1. Utiliser un service d'upload d'images public (Imgur, Cloudinary)
2. Ou créer une version démo qui simule le résultat
3. Ou utiliser directement l'API Replicate avec des images déjà hébergées

## 🔍 Debugging

### Activer les logs détaillés

Les logs sont déjà activés dans le code. Ouvrez la console (F12) et cherchez :

```
=== VÉRIFICATION CONFIGURATION DANS APP.JS ===
=== CONFIGURATION CHARGÉE ===
```

### Vérifier les requêtes réseau

Dans la console, onglet **Network** :
- Vérifiez les requêtes vers `/api/upload`
- Vérifiez les requêtes vers `api.replicate.com`
- Vérifiez les codes de réponse (200, 400, 500, etc.)

## 📞 Support

Si le problème persiste :
1. Vérifiez les logs de la console
2. Vérifiez les logs de l'API backend (Railway)
3. Vérifiez que votre token Replicate est valide
4. Consultez la documentation Replicate : https://replicate.com/docs

