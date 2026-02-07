# Guide de Configuration Vercel

## 🔧 Résolution de l'erreur "Repository does not contain the requested branch"

Si vous rencontrez l'erreur **"The provided GitHub repository does not contain the requested branch or commit reference"**, suivez ces étapes :

### 1. Vérifier que le dépôt GitHub contient bien les fichiers

1. Allez sur https://github.com/fontaineraphaelpro-blip/stylabsite
2. Vérifiez que vous voyez les fichiers (index.html, blog.html, etc.)
3. Vérifiez que la branche `main` existe et contient des commits

### 2. Vérifier les permissions GitHub

1. Dans Vercel, allez dans **Settings** → **Git**
2. Vérifiez que votre compte GitHub est bien connecté
3. Vérifiez que vous avez accès au dépôt `fontaineraphaelpro-blip/stylabsite`

### 3. Reconnecter le dépôt dans Vercel

1. Dans Vercel, allez dans votre projet
2. **Settings** → **Git** → **Disconnect**
3. Puis **Add Git Repository** → Sélectionnez `fontaineraphaelpro-blip/stylabsite`
4. Choisissez la branche `main`
5. Cliquez sur **Deploy**

### 4. Vérifier la branche par défaut

Assurez-vous que la branche par défaut est `main` :

```bash
# Vérifier la branche actuelle
git branch

# Si vous êtes sur une autre branche, basculez sur main
git checkout main

# Pousser vers GitHub
git push origin main
```

### 5. Forcer la synchronisation

Si le problème persiste, forcez un push :

```bash
git push origin main --force
```

⚠️ **Attention** : Utilisez `--force` uniquement si vous êtes sûr que c'est nécessaire.

### 6. Vérifier l'URL du dépôt

Vérifiez que l'URL du dépôt est correcte :

```bash
git remote -v
```

Devrait afficher :
```
origin  https://github.com/fontaineraphaelpro-blip/stylabsite.git (fetch)
origin  https://github.com/fontaineraphaelpro-blip/stylabsite.git (push)
```

### 7. Créer un commit initial si le dépôt est vide

Si le dépôt GitHub est vraiment vide, créez un commit initial :

```bash
# Vérifier s'il y a des fichiers
git status

# Ajouter tous les fichiers
git add .

# Créer le commit initial
git commit -m "Initial commit"

# Pousser vers GitHub
git push -u origin main
```

### 8. Vérifier dans Vercel

1. Allez dans **Settings** → **Git**
2. Vérifiez que :
   - Le dépôt est bien `fontaineraphaelpro-blip/stylabsite`
   - La branche est `main`
   - Le **Root Directory** est `/` (racine)
   - Le **Build Command** est vide (site statique)
   - Le **Output Directory** est vide ou `/`

### 9. Configuration Vercel recommandée

Pour un site statique HTML/CSS/JS :

- **Framework Preset** : Other
- **Build Command** : (vide)
- **Output Directory** : (vide)
- **Install Command** : (vide)
- **Root Directory** : /

### 10. Vérifier les fichiers présents

Le dépôt doit contenir au minimum :
- `index.html`
- `vercel.json`
- `package.json` (optionnel mais recommandé)

## ✅ Vérification finale

Après avoir suivi ces étapes, vérifiez que :

1. ✅ Le dépôt GitHub contient tous les fichiers
2. ✅ La branche `main` existe et a des commits
3. ✅ Vercel est connecté au bon dépôt
4. ✅ Les permissions GitHub sont correctes
5. ✅ La configuration Vercel est correcte

## 🆘 Si le problème persiste

1. Vérifiez les logs de déploiement dans Vercel
2. Vérifiez que le dépôt n'est pas privé (ou que Vercel a accès)
3. Essayez de créer un nouveau projet Vercel
4. Contactez le support Vercel avec l'URL du dépôt

## 📝 Commandes utiles

```bash
# Vérifier l'état du dépôt
git status

# Voir les branches
git branch -a

# Voir les commits
git log --oneline

# Vérifier la connexion GitHub
git ls-remote origin

# Pousser vers GitHub
git push origin main
```

