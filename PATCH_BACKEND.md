# Backend patch — allow the live demo from the marketing site

The marketing site embeds the **real** Shopify widget (`vton-widget.js`).
The widget calls `GET /apps/tryon/status` and `POST /apps/tryon/generate`
on the Railway backend (`https://vton-production-890a.up.railway.app`).

- ✅ `/apps/tryon/status` already works: it has an "installed shop"
  fallback (`app/routes/apps.tryon.status.tsx` around line 55) that authorizes
  any request with a valid `shop` + `product_id`.
- ❌ `/apps/tryon/generate` rejects requests from non-`.myshopify.com`
  origins with "Invalid signature - request not from Shopify".

## One change to apply in the VTON-main repo

File: `app/routes/apps.tryon.generate.tsx`

Add the demo-shop bypass **right before** the call to
`isAuthorizedStorefrontApiRequest` (around line 118):

```ts
// 1. Verify Shopify signature OR check if request comes from storefront
const shopFromQuery = extractShopFromProxy(queryParams);

// Demo-shop bypass — authorizes the live demo from the marketing site.
// Safe because it is restricted to the internal DEMO_SHOP_DOMAIN
// which has its own capped Studio quota.
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

Then **delete** the existing `const shop = extractShopFromProxy(queryParams);`
on the next line (already declared above — otherwise you get a duplicate).

## Security — why this is OK

| Risk                                    | Mitigation                                                              |
| --------------------------------------- | ----------------------------------------------------------------------- |
| Someone calls the API from elsewhere    | The bypass requires `shop = s1qf3z-70.myshopify.com` only               |
| Replicate budget                        | The demo shop has a Studio monthly quota capped in the DB               |
| Spam                                    | You can add IP rate-limiting or Cloudflare Turnstile later if needed    |
| Token leak                              | `X-Vton-Origin` is not a secret, it is a convention                     |

For an extra layer, use a shared secret instead:

```ts
const DEMO_TOKEN = process.env.VTON_DEMO_TOKEN || "";
const isMarketingDemo =
  isDemoShop(shopFromQuery) &&
  DEMO_TOKEN.length > 0 &&
  request.headers.get("X-Vton-Demo-Token") === DEMO_TOKEN;
```

Then in `index.html` (boot script at the top), swap the header to:
`'X-Vton-Demo-Token': '<your-public-marketing-token>'`

## Quick test

Once deployed:

1. Open `https://<your-site>/index.html#try-it`
2. DevTools console → you should see `[VTON] Injection anchor: custom_selector`
3. Click **Try it on** → modal asks for a photo
4. Upload a photo → 5–10 s → AI result appears

## Without the patch

Without applying this patch, the demo stops at the "generation" step with a
403 error. Everything else (UI, upload, status check) already works.
