# Highcharts examples and modern dashboard

This repository keeps the original JavaFX/WebView samples and historical vendor assets intact, while adding an independently maintained web dashboard under `web/`.

## Run locally

Requirements: Node.js 20.19+ and npm.

```bash
cd web
npm install
npm run dev
```

## Test and build

```bash
cd web
npm test
npm run build
npm run preview
```

The dashboard includes revenue, order-volume, and sales-channel charts, six/twelve-month filtering, KPI summaries, and a responsive layout. Its data is illustrative; replace `web/src/data.js` with an API adapter for real data.

## Structure

- `application/` — preserved JavaFX WebView examples
- `web/` — modern Vite + Highcharts dashboard
- `.github/workflows/web-ci.yml` — automated test and build workflow

## Highcharts licensing

The dashboard uses the Highcharts npm package. Highcharts is a commercial product; review [its licensing options](https://www.highcharts.com/license) and obtain the appropriate license before commercial or production use. This repository does not grant a Highcharts license.

Legacy examples are retained as historical samples and may reference outdated libraries or insecure HTTP resources. New frontend work belongs under `web/`; do not commit build output or dependencies.