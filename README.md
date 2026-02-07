# StyleLab Virtual Try-On - Site Web SEO

Site web optimisé SEO pour la solution Virtual Try-On Shopify pour boutiques France & Europe.

## 🚀 Fonctionnalités

- **Virtual Try-On en direct** : Démo interactive avec upload de photos
- **Optimisé SEO** : Meta tags, Schema.org, contenu optimisé
- **Responsive Design** : Mobile-first, adapté à tous les écrans
- **Performance** : Chargement rapide, animations fluides

## 📁 Structure du projet

```
├── index.html          # Page principale SEO optimisée
├── style.css           # Styles CSS modernes
├── app.js              # Logique Virtual Try-On
├── config.js           # Configuration de l'application
├── env.js              # Variables d'environnement (à créer)
├── create-env.js       # Script pour créer env.js
├── test-config.html    # Page de test de configuration
└── REPLICATE_API.md    # Documentation API Replicate
```

## ⚙️ Configuration

### 1. Créer le fichier `env.js`

Créez un fichier `env.js` à la racine du projet avec vos variables d'environnement :

```javascript
window._env = {
    'REPLICATE_API_TOKEN': 'votre_token_ici',
    'APP_URL': 'https://votre-api-url.com',
    'HOST_NAME': 'votre-hostname.com',
    'REPLICATE_MODEL': 'bytedance/seedream-4.5',
    // ... autres variables
};
```

**⚠️ Important** : Le fichier `env.js` est exclu du dépôt Git (voir `.gitignore`). Ne commitez jamais vos tokens API.

### 2. Configuration Replicate

Pour utiliser le Virtual Try-On, vous devez :

1. Créer un compte sur [Replicate](https://replicate.com)
2. Obtenir votre token API
3. Configurer le modèle dans `env.js`

Voir `REPLICATE_API.md` pour plus de détails.

## 🛠️ Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/fontaineraphaelpro-blip/stylabsite.git
cd stylabsite
```

2. Créez le fichier `env.js` avec vos variables d'environnement

3. Ouvrez `index.html` dans un navigateur ou servez avec un serveur local :
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server
```

## 📝 Utilisation

1. Ouvrez `index.html` dans un navigateur
2. Dans la section "Essayez le Virtual Try-On" :
   - Uploadez une photo utilisateur
   - Uploadez une image produit
   - Cliquez sur "Essayer virtuellement"
3. Attendez la génération (peut prendre quelques minutes)

## 🔒 Sécurité

- Ne commitez jamais `env.js` contenant vos tokens API
- Utilisez des variables d'environnement pour les secrets
- Le fichier `env.js` est automatiquement exclu via `.gitignore`

## 📄 Licence

Tous droits réservés © 2026 Style Lab Virtual Try-On

## 🚀 Déploiement sur Vercel

Ce projet est entièrement compatible avec Vercel. Le dépôt Git contient tous les fichiers nécessaires pour un déploiement automatique.

### Déploiement automatique depuis GitHub

1. **Connecter le dépôt à Vercel** :
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez votre compte GitHub
   - Importez le dépôt `fontaineraphaelpro-blip/stylabsite`
   - Vercel détectera automatiquement la configuration

2. **Configuration des variables d'environnement** :
   - Dans les paramètres du projet Vercel, ajoutez vos variables d'environnement
   - Créez un fichier `env.js` via les variables d'environnement Vercel
   - Ou utilisez les variables d'environnement Vercel directement dans le code

3. **Déploiement** :
   - Vercel déploiera automatiquement à chaque push sur `main`
   - Les déploiements sont automatiques et instantanés

### Fichiers de configuration Vercel

- `vercel.json` : Configuration des routes, headers et cache
- `package.json` : Métadonnées du projet (optionnel mais recommandé)

### Routes configurées

- `/` → `index.html`
- `/blog` → `blog.html`
- `/blog-qu-est-ce-que-le-virtual-try-on` → `blog-qu-est-ce-que-le-virtual-try-on.html`
- `/blog-impact-conversions-ecommerce` → `blog-impact-conversions-ecommerce.html`
- `/blog-avenir-ecommerce-france` → `blog-avenir-ecommerce-france.html`

### Headers de sécurité

Le fichier `vercel.json` configure automatiquement :
- Protection XSS
- Protection clickjacking
- Headers de sécurité optimisés
- Cache optimisé pour les assets statiques

## 📤 Push automatique vers GitHub

Des scripts sont disponibles pour automatiser le push vers GitHub après chaque modification.

### Windows (PowerShell)

```powershell
.\push-to-github.ps1 "Votre message de commit"
```

### Linux/Mac (Bash)

```bash
chmod +x push-to-github.sh
./push-to-github.sh "Votre message de commit"
```

### Push manuel

```bash
git add .
git commit -m "Votre message de commit"
git push origin main
```

## 🔗 Liens

- [App Shopify](https://apps.shopify.com/try-on-stylelab)
- [Documentation API Replicate](REPLICATE_API.md)
- [Déployer sur Vercel](https://vercel.com/docs)

