# Patch backend — autoriser la démo live depuis le site marketing

Ce site marketing intègre le **vrai** widget Shopify (`vton-widget.js`).
Le widget appelle `GET /apps/tryon/status` et `POST /apps/tryon/generate`
sur le backend Railway (`https://vton-production-890a.up.railway.app`).

- ✅ `/apps/tryon/status` fonctionne déjà : il a un fallback "shop installé"
  (cf. `app/routes/apps.tryon.status.tsx` ligne ~55) qui autorise toute
  requête avec un `shop` + `product_id` valides.
- ❌ `/apps/tryon/generate` refuse les requêtes hors `.myshopify.com`
  (« Invalid signature - request not from Shopify »).

## 1 modification à appliquer sur le repo VTON-main

Fichier : `app/routes/apps.tryon.generate.tsx`

Ajoute le bypass demo-shop **juste avant** l’appel à `isAuthorizedStorefrontApiRequest`
(autour de la ligne 118) :

```ts
// 1. Verify Shopify signature OR check if request comes from storefront
const shopFromQuery = extractShopFromProxy(queryParams);

// Demo-shop bypass — autorise la démo live depuis le site marketing.
// Sûr car limité au shop interne (DEMO_SHOP_DOMAIN) qui a son propre quota Studio.
const { isDemoShop } = await import("../lib/demo-shops.shared");
const isMarketingDemo =
  isDemoShop(shopFromQuery) &&
  request.headers.get("X-Vton-Origin") === "marketing-site";

if (
  !isMarketingDemo &&
  !isAuthorizedStorefrontApiRequest(request, queryParams, SHOPIFY_API_SECRET)
) {
  return json(
    { error: "Invalid signature - request not from Shopify" },
    { status: 403, headers: corsHeaders }
  );
}
```

Puis **supprime** la déclaration `const shop = extractShopFromProxy(queryParams);`
ligne 129 (déjà fait au-dessus, sinon double déclaration).

## Sécurité — pourquoi c’est OK

| Risque                              | Mitigation                                                         |
| ----------------------------------- | ------------------------------------------------------------------ |
| Quelqu’un appelle l’API depuis ailleurs | Le bypass exige `shop = s1qf3z-70.myshopify.com` uniquement      |
| Budget Replicate                    | Le demo shop a un quota Studio mensuel, capé en DB                 |
| Spam                                | Tu peux ajouter un rate-limit IP ou un Cloudflare Turnstile plus tard |
| Token leak                          | Le header `X-Vton-Origin` n’est pas un secret, c’est une convention |

Si tu veux un cran de sécurité supplémentaire, remplace par un secret partagé :

```ts
const DEMO_TOKEN = process.env.VTON_DEMO_TOKEN || "";
const isMarketingDemo =
  isDemoShop(shopFromQuery) &&
  DEMO_TOKEN.length > 0 &&
  request.headers.get("X-Vton-Demo-Token") === DEMO_TOKEN;
```

Puis dans `index.html` (script en haut) remplace l’en-tête par :
`'X-Vton-Demo-Token': '<ton-token-public-du-site>'`

## Test rapide

Une fois déployé :

1. Ouvre `https://<ton-site>/index.html#essayer`
2. Console DevTools → tu dois voir `[VTON] Injection anchor: custom_selector`
3. Clique sur **Try it on** → modal qui demande une photo
4. Upload une photo → 5-10 sec → résultat IA s’affiche

## Sans le patch

Sans appliquer ce patch, la démo s’arrête à l’étape « génération » avec un
message d’erreur 403. Tout le reste (UI, upload, status) fonctionne déjà.
