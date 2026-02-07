# Intégration API Replicate

## Fonctionnement

Le code envoie maintenant une **vraie demande de génération à l'API Replicate** pour le virtual try-on.

### Processus

1. **Upload des images** : Les images sont uploadées vers l'API Railway (`/api/upload`) pour obtenir des URLs publiques
2. **Création de la prédiction** : Appel direct à l'API Replicate avec les URLs des images
3. **Polling** : Vérification périodique du statut de la prédiction (toutes les 5 secondes)
4. **Affichage du résultat** : Une fois terminé, l'image générée est affichée

### Configuration requise

Dans le fichier `.env` :

```env
REPLICATE_API_TOKEN=your_replicate_token_here
APP_URL=https://your-api-url.com
REPLICATE_MODEL=cuuupid/idm-vton
```

### Modèles Replicate disponibles

- `cuuupid/idm-vton` : Modèle IDM-VTON pour virtual try-on
- `levihsu/ootdiffusion` : OOTDiffusion pour essayage virtuel
- Autres modèles disponibles sur [Replicate](https://replicate.com/explore)

### Format de l'API Replicate

#### Création d'une prédiction

```javascript
POST https://api.replicate.com/v1/predictions
Headers:
  Authorization: Token YOUR_TOKEN
  Content-Type: application/json

Body:
{
  "version": "cuuupid/idm-vton",
  "input": {
    "person_image": "https://...",
    "garment_image": "https://..."
  }
}
```

#### Vérification du statut

```javascript
GET https://api.replicate.com/v1/predictions/{prediction_id}
Headers:
  Authorization: Token YOUR_TOKEN
```

#### Statuts possibles

- `starting` : La prédiction démarre
- `processing` : En cours de traitement
- `succeeded` : Terminé avec succès
- `failed` : Échec
- `canceled` : Annulé

### Gestion des erreurs

Le code gère automatiquement :
- Les erreurs d'upload d'images
- Les erreurs d'API Replicate
- Les timeouts (5 minutes maximum)
- Les échecs de génération

### Fallback

Si l'upload vers Railway échoue, le code essaie d'utiliser des images en base64 (certains modèles Replicate les acceptent).

### Test

Pour tester :

1. Ouvrez `index.html` dans un navigateur
2. Uploadez une photo utilisateur et une image produit
3. Cliquez sur "Essayer virtuellement"
4. Observez les étapes :
   - "Upload des images..."
   - "Création de la prédiction Replicate..."
   - "Génération en cours... (Xs)"
   - Résultat final

### Console du navigateur

Ouvrez la console (F12) pour voir :
- Les requêtes API
- Les réponses Replicate
- Les erreurs éventuelles

### Limitations

- Timeout de 5 minutes maximum
- Les images doivent être accessibles publiquement (URLs)
- Le modèle Replicate doit être compatible avec le format d'input


