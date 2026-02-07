# 🔧 Fix Rapide : Token Replicate non détecté sur Netlify

## ✅ Solution immédiate

Vous avez configuré le token dans Netlify mais il n'est pas détecté. Voici comment résoudre :

### Étape 1 : Vérifier les variables d'environnement Netlify

1. Allez dans votre projet Netlify
2. **Site settings** → **Environment variables**
3. Vérifiez que vous avez bien :
   ```
   REPLICATE_API_TOKEN = votre_token_replicate_ici
   ```
4. **Important** : Le nom doit être exactement `REPLICATE_API_TOKEN` (en majuscules)

### Étape 2 : Redéployer avec cache vidé

1. Allez dans **Deploys**
2. Cliquez sur **Trigger deploy** → **Clear cache and deploy site**
3. Attendez la fin du build

### Étape 3 : Vérifier les logs de build

Dans les logs de build Netlify, vous devriez voir :
```
✅ Fichier env.js généré avec succès depuis les variables d'environnement Netlify
✅ REPLICATE_API_TOKEN trouvé dans les variables d'environnement
```

Si vous voyez :
```
⚠️ REPLICATE_API_TOKEN non trouvé dans les variables d'environnement
```

Alors la variable n'est pas correctement configurée.

### Étape 4 : Vérifier que env.js est généré

Après le déploiement, ouvrez votre site et dans la console (F12), vous devriez voir :
```
📦 env.js: Chargement de window._env depuis Netlify...
✅ env.js: window._env chargé avec X variables
✅ env.js: REPLICATE_API_TOKEN = r8_xxxxx...
```

## 🔍 Dépannage

### Le token n'apparaît toujours pas

1. **Vérifiez le scope de la variable** :
   - Dans Netlify, vérifiez que la variable est disponible pour "All scopes" ou au moins "Production"

2. **Vérifiez les logs de build** :
   - Allez dans **Deploys** → Cliquez sur le dernier déploiement
   - Regardez les logs pour voir si `generate-env.js` s'exécute
   - Cherchez les messages concernant `REPLICATE_API_TOKEN`

3. **Vérifiez que le build s'exécute** :
   - Le fichier `netlify.toml` doit contenir `command = "npm run build"`
   - Le `package.json` doit avoir `"build": "node generate-env.js"`

4. **Testez localement** :
   ```bash
   # Définir la variable
   export REPLICATE_API_TOKEN="votre_token_replicate_ici"
   
   # Générer env.js
   node generate-env.js
   
   # Vérifier le contenu
   cat env.js | grep REPLICATE_API_TOKEN
   ```

### Le fichier env.js n'est pas créé

1. Vérifiez que Node.js est disponible dans Netlify (il l'est par défaut)
2. Vérifiez que `generate-env.js` est bien dans le dépôt
3. Vérifiez les permissions d'écriture

### Erreur dans les logs de build

Si vous voyez une erreur dans les logs, partagez-la pour qu'on puisse la corriger.

## 📝 Checklist

- [ ] Variable `REPLICATE_API_TOKEN` ajoutée dans Netlify
- [ ] Valeur : votre token Replicate (commence par `r8_`)
- [ ] Scope : "All scopes" ou "Production"
- [ ] Site redéployé avec cache vidé
- [ ] Logs de build montrent "✅ REPLICATE_API_TOKEN trouvé"
- [ ] Console navigateur montre le token chargé

## 🆘 Si ça ne fonctionne toujours pas

1. Vérifiez que vous êtes sur le bon projet Netlify
2. Vérifiez que le dépôt GitHub est bien connecté
3. Vérifiez que la branche `main` est bien déployée
4. Contactez le support Netlify avec les logs de build

