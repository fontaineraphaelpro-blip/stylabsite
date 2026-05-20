# Backend patch — live demo generate from the marketing site

The marketing site proxies `/apps/tryon/*` to `https://vton-production-890a.up.railway.app`.

- ✅ `GET /apps/tryon/status` already works for installed shops (shop + product_id fallback).
- ❌ `POST /apps/tryon/generate` returned **403** from non-Shopify origins → browser shows **NetworkError**.

## Fix (apply in VTON-main, then redeploy `vton-production` on Railway)

**File:** `app/routes/apps.tryon.generate.tsx`

Before rejecting unauthorized requests, add the same installed-shop fallback as `apps.tryon.status.tsx`:

```ts
const shop = extractShopFromProxy(queryParams);

let authorized = isAuthorizedStorefrontApiRequest(
  request,
  queryParams,
  SHOPIFY_API_SECRET
);

if (!authorized && shop && queryParams.get("product_id")) {
  const shopRecord = await getShop(shop);
  if (shopRecord) {
    authorized = true;
  }
}

if (!authorized) {
  return json(
    { error: "Invalid signature - request not from Shopify" },
    { status: 403, headers: corsHeaders }
  );
}
```

**File:** `app/lib/proxy-verify.server.ts` (optional, for future custom headers)

```ts
headers.set(
  "Access-Control-Allow-Headers",
  "Content-Type, Accept, X-Vton-Origin, X-Vton-Demo-Token"
);
```

The marketing site **does not** send `X-Vton-Origin` anymore (avoids CORS preflight issues).

## Deploy checklist

1. Commit + push VTON-main → redeploy **vton-production** on Railway.
2. Redeploy **stylabsite** (marketing HTML spacing + fetch proxy).
3. Hard refresh `https://stylabsite.up.railway.app/#try-it` (Ctrl+F5).
4. DevTools → Network → `POST .../apps/tryon/generate` should return **200** (or **402** if quota), not blocked.

## Quick test (after backend deploy)

```bash
curl -X POST "https://vton-production-890a.up.railway.app/apps/tryon/generate?shop=s1qf3z-70.myshopify.com&product_id=gid://shopify/Product/15436964036948" \
  -H "Content-Type: application/json" \
  -H "Origin: https://stylabsite.up.railway.app" \
  -d '{"user_photo":"data:image/jpeg;base64,/9j/4AAQ","product_image_url":"https://cdn.shopify.com/..."}'
```

Expected: not `403 Invalid signature`. A real photo is required for a full generation.
