# 🔧 Résolution Erreur Vercel : "An unexpected error occurred"

## ✅ Solutions immédiates

### Solution 1 : Réessayer après quelques minutes
L'erreur peut être temporaire. Attendez 2-3 minutes et réessayez.

### Solution 2 : Vérifier les permissions GitHub
1. Allez sur https://github.com/settings/applications
2. Vérifiez que Vercel a accès à vos dépôts
3. Si nécessaire, réautorisez Vercel

### Solution 3 : Supprimer et recréer le projet Vercel
1. Dans Vercel, supprimez le projet actuel
2. Créez un nouveau projet
3. Importez le dépôt `fontaineraphaelpro-blip/stylabsite`
4. **Configuration importante** :
   - **Framework Preset** : `Other` ou `Static Site`
   - **Root Directory** : `/` (laisser vide)
   - **Build Command** : (laisser vide)
   - **Output Directory** : (laisser vide)
   - **Install Command** : (laisser vide)

### Solution 4 : Utiliser l'import manuel
1. Dans Vercel, cliquez sur "Import a different Git Repository"
2. Entrez manuellement : `fontaineraphaelpro-blip/stylabsite`
3. Sélectionnez la branche `main`
4. Configurez comme indiqué ci-dessus

### Solution 5 : Vérifier que le dépôt n'est pas vide
Vérifiez sur GitHub que le dépôt contient bien :
- ✅ `index.html`
- ✅ `vercel.json`
- ✅ `package.json`
- ✅ Autres fichiers HTML

## 🔍 Vérifications à faire

### 1. Vérifier l'URL du dépôt
L'URL doit être exactement : `fontaineraphaelpro-blip/stylabsite`

### 2. Vérifier la branche
La branche doit être `main` (pas `master`)

### 3. Vérifier les fichiers sur GitHub
Allez sur : https://github.com/fontaineraphaelpro-blip/stylabsite
- Vous devez voir tous les fichiers
- La branche `main` doit être active

### 4. Vérifier les permissions
- Le dépôt doit être public OU
- Vercel doit avoir accès si le dépôt est privé

## 📝 Configuration Vercel recommandée

Pour un site statique HTML/CSS/JS :

```
Framework Preset: Other
Root Directory: / (vide)
Build Command: (vide)
Output Directory: (vide)
Install Command: (vide)
```

## 🚀 Alternative : Déploiement via CLI Vercel

Si l'interface web ne fonctionne pas, utilisez la CLI :

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Suivre les instructions
```

## ⚠️ Problèmes connus et solutions

### Problème : "Repository does not contain the requested branch"
**Solution** : Vérifiez que la branche `main` existe bien sur GitHub

### Problème : "An unexpected error occurred"
**Solutions** :
1. Attendre quelques minutes et réessayer
2. Vérifier les permissions GitHub
3. Simplifier la configuration `vercel.json`
4. Créer un nouveau projet Vercel

### Problème : Le clonage échoue
**Solutions** :
1. Vérifier que le dépôt n'est pas vide
2. Vérifier l'URL du dépôt
3. Réessayer avec un nouveau projet

## 📞 Support

Si le problème persiste :
1. Vérifiez les logs de déploiement dans Vercel
2. Contactez le support Vercel : https://vercel.com/support
3. Vérifiez le statut Vercel : https://www.vercel-status.com/

## ✅ Checklist de vérification

Avant de réessayer dans Vercel :

- [ ] Le dépôt GitHub contient tous les fichiers
- [ ] La branche `main` existe et est active
- [ ] Le fichier `vercel.json` est présent et valide
- [ ] Le fichier `index.html` existe
- [ ] Les permissions GitHub sont correctes
- [ ] Vercel a accès au dépôt
- [ ] La configuration Vercel est correcte (Framework: Other)

