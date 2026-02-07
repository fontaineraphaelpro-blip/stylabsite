# 🚂 Configuration Railway pour StyleLab Virtual Try-On

## 📋 Déploiement sur Railway

Railway est une plateforme de déploiement qui supporte les sites statiques et les applications Node.js.

## 🚀 Étapes de déploiement

### 1. Connecter le dépôt GitHub

1. Allez sur [Railway](https://railway.app)
2. **New Project** → **Deploy from GitHub repo**
3. Sélectionnez le dépôt `fontaineraphaelpro-blip/stylabsite`
4. Railway détectera automatiquement la configuration

### 2. Configurer les variables d'environnement

1. Dans votre projet Railway, allez dans **Variables**
2. Ajoutez les variables suivantes :

#### Variable obligatoire :
```
REPLICATE_API_TOKEN = votre_token_replicate_ici
```

#### Variables optionnelles :
```
APP_URL = https://votre-projet.railway.app
HOST_NAME = votre-projet.railway.app
REPLICATE_MODEL = bytedance/seedream-4.5
```

**Note** : Railway fournit automatiquement `RAILWAY_PUBLIC_DOMAIN` et `RAILWAY_STATIC_URL` si vous utilisez un service public.

### 3. Configuration du service

Railway détectera automatiquement :
- ✅ `package.json` avec les scripts
- ✅ Script de build qui génère `env.js`
- ✅ Script de start qui lance le serveur HTTP

### 4. Déploiement automatique

Railway déploiera automatiquement à chaque push sur `main`.

## 🔧 Comment ça fonctionne

### Processus de build

1. Railway exécute `npm run build`
2. Le script `generate-env.js` lit les variables d'environnement Railway
3. Il génère le fichier `env.js` avec toutes les variables
4. Le fichier `env.js` est inclus dans le déploiement
5. Railway lance `npm start` qui démarre un serveur HTTP
6. Le site charge `env.js` et utilise les variables

### Variables Railway disponibles

Railway fournit automatiquement :
- `RAILWAY_PUBLIC_DOMAIN` : Domaine public de votre service
- `RAILWAY_STATIC_URL` : URL statique (si configuré)
- `PORT` : Port sur lequel Railway attend que votre service écoute

### Fichiers importants

- `railway.json` : Configuration Railway (optionnel)
- `package.json` : Scripts de build et start
- `generate-env.js` : Script qui génère `env.js` depuis les variables Railway

## ⚙️ Configuration du service

### Type de service

Railway détectera automatiquement que c'est un site statique avec Node.js.

### Port

Le script `start` utilise automatiquement le port fourni par Railway (`$PORT`) ou 3000 par défaut.

### Build

Le build génère `env.js` depuis les variables d'environnement Railway.

## 🧪 Tester la configuration

1. Après le déploiement, ouvrez votre site Railway
2. Ouvrez la console du navigateur (F12)
3. Vous devriez voir :
   ```
   📦 env.js: Chargement de window._env depuis Railway...
   ✅ env.js: window._env chargé avec X variables
   ✅ env.js: REPLICATE_API_TOKEN = r8_xxxxx...
   ```

## 🔍 Dépannage

### Le token n'est pas chargé

1. Vérifiez que `REPLICATE_API_TOKEN` est bien défini dans Railway Variables
2. Vérifiez les logs de build dans Railway
3. Vérifiez que le script `generate-env.js` s'exécute bien

### Erreur de build

1. Vérifiez les logs de build dans Railway
2. Vérifiez que Node.js est disponible (Railway le supporte par défaut)
3. Vérifiez que `package.json` contient bien le script `build`

### Le site ne démarre pas

1. Vérifiez les logs de déploiement dans Railway
2. Vérifiez que le port est correctement configuré
3. Vérifiez que `http-server` est disponible (installé via npm)

### Erreur de port

Si vous voyez une erreur de port, vérifiez que le script `start` utilise bien `$PORT` :
```json
"start": "npx http-server . -p $PORT || npx http-server . -p 3000"
```

## 📝 Commandes utiles

### Tester localement avec les variables Railway

```bash
# Définir les variables localement
export REPLICATE_API_TOKEN="votre_token"
export PORT="3000"

# Générer env.js
node generate-env.js

# Tester le site
npm start
```

### Vérifier la configuration

```bash
# Vérifier que env.js n'est pas commité
git status

# Vérifier le contenu de railway.json
cat railway.json
```

## 🔗 Ressources

- [Documentation Railway](https://docs.railway.app)
- [Railway Environment Variables](https://docs.railway.app/develop/variables)
- [Railway Static Sites](https://docs.railway.app/deploy/static-sites)

## ⚠️ Important

- Le fichier `env.js` généré contient vos tokens. Il est déjà dans `.gitignore`
- Ne partagez jamais vos variables d'environnement publiquement
- Utilisez uniquement les variables d'environnement Railway pour les secrets

