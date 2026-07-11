# Cents of Direction — Landing Pages

Public landing pages for **Cents of Direction**, a debt-payoff calculator (Google Sheets)
by Pixels & Pages Co. These pages sell the product through **Lemon Squeezy** via an embedded
checkout overlay (`checkout.js`), and are hosted on GitHub Pages.

This repo intentionally contains **only** the landing pages and the marketing assets they
reference — no product source. The product masters and build tooling live in a separate,
private repository.

## Pages

| File | Edition | Lemon Squeezy checkout |
|------|---------|------------------------|
| `cents-of-direction-dark.html` | Dashboard (dark) | `https://pixelsandpagesco.lemonsqueezy.com/checkout/buy/ba9c4199-b1da-4843-b6dd-a8a29221a582` |
| `cents-of-direction-light.html` | Print-friendly (light) | `https://pixelsandpagesco.lemonsqueezy.com/checkout/buy/efa5bc35-2878-45e2-b229-51230c9b3964` |
| `index.html` | Redirects to the dark edition | — |

Both editions are **pay-what-you-want, $24 minimum**. The buyer sets their price in the
Lemon Squeezy checkout window (native "Suggest a price" field); the buy buttons carry the
`lemonsqueezy-button` class and open the checkout as an in-page overlay.

## Assets

- `dark/`, `light/` — cover image, 5 preview screenshots, and the What-If Lab demo video for each edition.

## Updating a checkout URL

If a product's Lemon Squeezy variant changes (e.g. after copying products from test mode to
live mode), update the `href` on every `.lemonsqueezy-button` in the relevant HTML file and the
`offers.url` in its JSON-LD block. Each file has a comment near the top with its current
checkout URL for reference.
