const VTON_BACKEND = "https://vton-production-890a.up.railway.app";
const DEMO_SHOP = "s1qf3z-70.myshopify.com";
const PRODUCT_GID = "gid://shopify/Product/15436964036948";
const PRODUCT_HANDLE = "shadow-stripe-collared-soccer-jersey-4";
const DEMO_STORE_URL =
  "https://remadeicons.shop/products/shadow-stripe-collared-soccer-jersey-4";

type VtonWindow = Window & {
  VTON_LIQUID?: Record<string, unknown>;
  __VTON_DEMO_BOOTED?: boolean;
  __VTON_WIDGET_BOOTED?: boolean;
  __VTON_FETCH_PATCHED?: boolean;
  __vtonHidePlaceholder?: () => void;
  Shopify?: { shop?: string; product?: { id: number; handle: string } };
};

export function bootVtonDemo(): boolean {
  if (typeof window === "undefined") return false;

  const w = window as VtonWindow;
  const slot = document.getElementById("vton-embed-slot");
  if (!slot) return false;

  const appUrl = (
    slot.getAttribute("data-vton-app-url") || VTON_BACKEND
  ).replace(/\/$/, "");

  try {
    const keys: string[] = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const k = sessionStorage.key(i);
      if (k && k.startsWith("vton:status:")) keys.push(k);
    }
    keys.forEach((k) => sessionStorage.removeItem(k));
  } catch {
    /* ignore */
  }

  const productId = slot.getAttribute("data-vton-product-id") || PRODUCT_GID;
  const productHandle =
    slot.getAttribute("data-vton-product-handle") || PRODUCT_HANDLE;

  w.VTON_LIQUID = {
    productId,
    productHandle,
    customAnchor: slot.getAttribute("data-vton-custom-anchor") || "#vton-mount",
    appUrl,
    pageType: "product",
    templateName: "product",
    shop: DEMO_SHOP,
    installCta:
      slot.getAttribute("data-vton-install-cta") === "1"
        ? {
            url:
              slot.getAttribute("data-vton-install-url") ||
              "https://apps.shopify.com/try-on-stylelab",
            locale: slot.getAttribute("data-vton-locale") || "en",
            logoUrl: "/assets/shopify-icon-logo.svg",
          }
        : null,
    demoHighlight: slot.getAttribute("data-vton-install-cta") === "1",
  };

  const statusQuery =
    "shop=" +
    encodeURIComponent(DEMO_SHOP) +
    "&product_id=" +
    encodeURIComponent(productId) +
    "&product_handle=" +
    encodeURIComponent(productHandle) +
    "&_vton_ts=" +
    Date.now();

  w.VTON_LIQUID.prefetchedStatus = fetch(`${appUrl}/apps/tryon/status?${statusQuery}`, {
    method: "GET",
    mode: "cors",
    credentials: "omit",
    headers: { Accept: "application/json" },
    cache: "no-store",
  })
    .then((response) => {
      if (!response.ok) throw new Error(`Status ${response.status}`);
      return response.json();
    })
    .catch(() => null);

  w.Shopify = w.Shopify || {};
  if (!w.Shopify.shop) w.Shopify.shop = DEMO_SHOP;
  if (!w.Shopify.product) {
    w.Shopify.product = {
      id: 15436964036948,
      handle: PRODUCT_HANDLE,
    };
  }

  if (!w.__VTON_FETCH_PATCHED) {
    const originalFetch = window.fetch.bind(window);
    window.fetch = function (input: RequestInfo | URL, init?: RequestInit) {
      try {
        const url =
          typeof input === "string"
            ? input
            : input instanceof Request
              ? input.url
              : String(input);
        if (url.includes("/apps/tryon/")) {
          let path = url.replace(/^https?:\/\/[^/]+/, "");
          if (!path.startsWith("/")) path = `/${path}`;
          const rewritten = appUrl + path;
          const nextInit: RequestInit = { ...(init || {}), mode: "cors", credentials: "omit" };
          return originalFetch(rewritten, nextInit);
        }
      } catch {
        /* fall through */
      }
      return originalFetch(input, init);
    };
    w.__VTON_FETCH_PATCHED = true;
  }

  const placeholder = document.getElementById("vton-mount-placeholder");
  const placeholderMsg = placeholder?.querySelector("small");

  function hideVtonPlaceholder() {
    if (placeholder) placeholder.style.display = "none";
  }

  function showVtonPlaceholderError(msg: string) {
    if (!placeholder) return;
    placeholder.style.display = "flex";
    const btn = placeholder.querySelector(".vton-placeholder-btn span");
    if (btn) btn.textContent = "Widget unavailable";
    if (placeholderMsg) placeholderMsg.innerHTML = msg;
  }

  w.__vtonHidePlaceholder = hideVtonPlaceholder;

  const mount = document.getElementById("vton-mount");
  if (mount && placeholder && !w.__VTON_DEMO_BOOTED) {
    const io = new MutationObserver(() => {
      if (document.querySelector('#vton-widget-container, [data-vton-widget="true"]')) {
        hideVtonPlaceholder();
        io.disconnect();
      }
    });
    io.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => {
      io.disconnect();
      if (!document.querySelector('#vton-widget-container, [data-vton-widget="true"]')) {
        showVtonPlaceholderError(
          `Could not load the try-on widget. <a href="${DEMO_STORE_URL}" target="_blank" rel="noopener">Open the live demo store →</a>`
        );
      }
    }, 25000);
  }

  w.__VTON_DEMO_BOOTED = true;
  return true;
}

export function loadVtonWidgetScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  const w = window as VtonWindow;

  if (w.__VTON_WIDGET_BOOTED) {
    document.dispatchEvent(new Event("shopify:section:load"));
    window.dispatchEvent(new Event("pageshow"));
    return Promise.resolve();
  }

  const existing = document.querySelector<HTMLScriptElement>("script[data-vton-widget]");
  if (existing) {
    return new Promise((resolve) => {
      if (w.__VTON_WIDGET_BOOTED) resolve();
      else existing.addEventListener("load", () => resolve(), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "/vton-widget.js?v=8";
    script.defer = true;
    script.dataset.vtonWidget = "1";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load vton-widget.js"));
    document.body.appendChild(script);
  });
}

export function initVtonDemo(): void {
  if (!bootVtonDemo()) return;
  loadVtonWidgetScript().catch(() => {
    const placeholder = document.getElementById("vton-mount-placeholder");
    const msg = placeholder?.querySelector("small");
    if (msg) {
      msg.innerHTML = `Script failed to load. <a href="${DEMO_STORE_URL}" target="_blank" rel="noopener">Open demo store →</a>`;
    }
  });
}
