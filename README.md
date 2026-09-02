# King Work Pricing Plugin

Returns current King Work (Adelaide CBD) coworking pricing and FAQs as structured JSON, for use by an agent handling enquiries, outreach, or content generation.

## Install

```bash
git clone <your-repo-url> kingwork-pricing
cd kingwork-pricing
```
No dependencies — pure Node.js, no npm install required.

## Usage

```bash
node index.js                  # full pricing data
node index.js virtual-office   # single product
node index.js meeting-room
node index.js dedicated-desk
node index.js private-office
node index.js faq              # pricing FAQ block
```

## Config

| Variable | Purpose |
|---|---|
| `KINGWORK_DATA_PATH` | Point to an updated `pricing.json` when King Work changes prices, instead of editing this repo directly |

## Data freshness

Pricing is manually sourced from kingwork.com.au/pricing. Check `last_verified` in `data/pricing.json` before relying on it for time-sensitive quoting. Update the JSON file (or swap in a new one via `KINGWORK_DATA_PATH`) when prices change on the live site.

## OpenClaw submission fields

- **Plugin Name:** King Work Pricing
- **Description:** Provides current King Work (Adelaide) coworking & virtual office pricing — Virtual Office, Meeting Room, Dedicated Desk, Private Office — plus pricing FAQs, for agents handling enquiries or lead outreach.
- **Install Command:** `git clone <repo-url> kingwork-pricing && cd kingwork-pricing`
- **Configuration Example:** `KINGWORK_DATA_PATH=/path/to/updated-pricing.json node index.js`
- **Category:** Tools
- **Homepage URL:** https://www.kingwork.com.au/pricing
- **Tags:** coworking, virtual-office, adelaide, pricing, business-address
