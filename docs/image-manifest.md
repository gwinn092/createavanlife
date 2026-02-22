# Image Manifest

Purpose: single source of truth for current site images so multiple chat threads can stay aligned without pasting full SVG contents.

## Usage Notes

- All current assets are in-house SVG placeholders.
- Replace in place when you move to official brand or licensed photography.
- Keep the same file paths where possible to avoid content/template churn.

## Homepage / Global
- `/images/hero/homepage-hero.svg` - Homepage hero image
- `/images/hero/van-sunrise.svg` - Legacy hero placeholder (safe fallback)
- `/images/featured/van-solar.svg` - Featured image for solar guides
- `/images/featured/power-stations.svg` - Featured image for power station guides
- `/images/featured/van-fans.svg` - Featured image for fan/ventilation guides
- `/images/featured/van-internet.svg` - Featured image for internet/work guides
- `/images/featured/van-kitchen.svg` - Featured image for kitchen/cooking guides
- `/images/featured/build-tools.svg` - Featured image for tools/build guides

## Category Icons
- `/images/icons/solar.svg`
- `/images/icons/power.svg`
- `/images/icons/fan.svg`
- `/images/icons/wifi.svg`
- `/images/icons/kitchen.svg`
- `/images/icons/tools.svg`

## Product Image Sets

Each product folder contains:
- `hero.svg`
- `lifestyle1.svg`
- `detail1.svg`

- `/images/gear/bluetti-charger-1/`
- `/images/gear/bluetti-elite-200-v2/`
- `/images/gear/compustar-cs6900/`
- `/images/gear/crl-tvent-promaster/`
- `/images/gear/dometic-portable-toilet/`
- `/images/gear/kenwood-dnx574s/`
- `/images/gear/maxxair-4500/`
- `/images/gear/maxxair-7500/`
- `/images/gear/radiant-insulation/`
- `/images/gear/renogy-100w-slim-panel/`

## Maintenance Checklist

1. Replace placeholders with approved brand/stock images.
2. Preserve filenames when possible (`hero.svg`, `lifestyle1.svg`, `detail1.svg`).
3. Update `/content/legal/image-sources.md` with final source/license info.
4. Rebuild with `hugo --minify` and spot-check homepage + key gear pages.
