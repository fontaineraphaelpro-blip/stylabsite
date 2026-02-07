# 🚀 Configuration Netlify pour StyleLab Virtual Try-On

## 📋 Étapes de configuration

### 1. Variables d'environnement dans Netlify

1. Allez dans votre projet Netlify
2. **Site settings** → **Environment variables**
3. Ajoutez les variables suivantes :

#### Variables obligatoires :
```
REPLICATE_API_TOKEN = votre_token_replicate_ici
```

#### Variables optionnelles (avec valeurs par défaut) :
```
APP_URL = https://vton-production-890a.up.railway.app
HOST_NAME = vton-production-890a.up.railway.app
REPLICATE_MODEL = bytedance/seedream-4.5
VITE_MAX_FILE_SIZE = 10485760
VITE_ALLOWED_FILE_TYPES = image/jpeg,image/png,image/webp
```

### 2. Configuration du build

Le fichier `netlify.toml` est déjà configuré avec :
- ✅ Commande de build qui génère `env.js` depuis les variables d'environnement
- ✅ Redirections pour les URLs propres (sans .html)
- ✅ Headers de sécurité
- ✅ Cache optimisé

### 3. Déploiement

1. **Connecter le dépôt GitHub** :
   - Allez sur [Netlify](https://app.netlify.com)
   - **Add new site** → **Import an existing project**
   - Sélectionnez `fontaineraphaelpro-blip/stylabsite`
   - Netlify détectera automatiquement `netlify.toml`

2. **Configurer les variables d'environnement** (voir étape 1)

3. **Déployer** :
   - Netlify déploiera automatiquement à chaque push sur `main`
   - Le script `generate-env.js` créera `env.js` avec vos variables

## 🔧 Comment ça fonctionne

### Processus de build

1. Netlify exécute `npm run build`
2. Le script `generate-env.js` lit les variables d'environnement Netlify
3. Il génère le fichier `env.js` avec toutes les variables
4. Le fichier `env.js` est inclus dans le déploiement
5. Le site charge `env.js` et utilise les variables

### Fichiers importants

- `netlify.toml` : Configuration Netlify (build, redirects, headers)
- `generate-env.js` : Script qui génère `env.js` depuis les variables Netlify
- `package.json` : Scripts de build
- `env.js` : Généré automatiquement (ne pas commiter)

## ⚠️ Important

### Ne pas commiter env.js

Le fichier `env.js` généré contient vos tokens. Il est déjà dans `.gitignore`, mais vérifiez qu'il n'est pas commité :

```bash
git status
# env.js ne doit pas apparaître dans les fichiers modifiés
```

### Variables sensibles

Ne partagez jamais vos variables d'environnement publiquement. Utilisez uniquement les variables d'environnement Netlify.

## 🧪 Tester la configuration

1. Après le déploiement, ouvrez votre site Netlify
2. Ouvrez la console du navigateur (F12)
3. Vous devriez voir :
   ```
   📦 env.js: Chargement de window._env depuis Netlify...
   ✅ env.js: window._env chargé avec X variables
   ✅ env.js: REPLICATE_API_TOKEN = r8_xxxxx...
   ```

## 🔍 Dépannage

### Le token n'est pas chargé

1. Vérifiez que `REPLICATE_API_TOKEN` est bien défini dans Netlify
2. Vérifiez les logs de build dans Netlify
3. Vérifiez que le script `generate-env.js` s'exécute bien

### Erreur de build

1. Vérifiez les logs de build dans Netlify
2. Vérifiez que Node.js est disponible (Netlify le supporte par défaut)
3. Vérifiez que `package.json` contient bien le script `build`

### Le site ne fonctionne pas

1. Ouvrez la console du navigateur (F12)
2. Vérifiez les erreurs JavaScript
3. Vérifiez que `env.js` est bien chargé (onglet Network)

## 📝 Commandes utiles

### Tester localement avec les variables Netlify

```bash
# Définir les variables localement
export REPLICATE_API_TOKEN="votre_token"
export APP_URL="https://votre-site.netlify.app"

# Générer env.js
node generate-env.js

# Tester le site
npm run dev
```

### Vérifier la configuration

```bash
# Vérifier que env.js n'est pas commité
git status

# Vérifier le contenu de netlify.toml
cat netlify.toml
```

## 🔗 Ressources

- [Documentation Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)
- [Netlify Build Configuration](https://docs.netlify.com/configure-builds/file-based-configuration/)
- [Netlify Headers](https://docs.netlify.com/routing/headers/)

