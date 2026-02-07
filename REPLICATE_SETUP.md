# Configuration API Replicate

## Étapes pour configurer l'API Replicate

### 1. Obtenir un token API Replicate

1. Créez un compte sur [Replicate](https://replicate.com)
2. Allez sur [https://replicate.com/account/api-tokens](https://replicate.com/account/api-tokens)
3. Créez un nouveau token API
4. Copiez le token (il commence par `r8_`)

### 2. Configurer le token dans votre projet

1. Ouvrez le fichier `env.js`
2. Remplacez `REPLICATE_API_TOKEN: ''` par votre token :
   ```javascript
   REPLICATE_API_TOKEN: 'r8_votre_token_ici'
   ```

### 3. Modèles disponibles

Par défaut, le widget utilise le modèle `bytedance/seedream-4.5`.

Vous pouvez changer le modèle dans `env.js` :
```javascript
REPLICATE_MODEL: 'bytedance/seedream-4.5'
```

Autres modèles disponibles :
- `idorag/virtual-try-on`
- `cuuupid/idm-vton`

### 4. Vérification

Une fois configuré, le widget devrait fonctionner correctement. Si vous voyez une erreur "API Replicate non configurée", vérifiez que :
- Le token est correctement défini dans `env.js`
- Le fichier `env.js` est chargé avant `widget.js` dans `index.html`

## Coûts

Replicate facture à l'utilisation. Consultez [https://replicate.com/pricing](https://replicate.com/pricing) pour les tarifs.

## Support

En cas de problème, vérifiez la console du navigateur (F12) pour les messages d'erreur.

