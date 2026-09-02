#!/usr/bin/env node
/**
 * King Work Pricing Plugin
 * Returns current King Work (Adelaide) pricing for use by an agent.
 *
 * Usage:
 *   node index.js                 -> full pricing data (JSON)
 *   node index.js <product-id>    -> single product (e.g. virtual-office)
 *   node index.js faq             -> FAQ block only
 *
 * Config:
 *   Set KINGWORK_DATA_PATH to point at an alternate/updated pricing.json.
 *   Defaults to ./data/pricing.json in this plugin's directory.
 */

const fs = require("fs");
const path = require("path");

const dataPath =
  process.env.KINGWORK_DATA_PATH || path.join(__dirname, "pricing.json");

function loadData() {
  const raw = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(raw);
}

function main() {
  const data = loadData();
  const arg = process.argv[2];

  if (!arg) {
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (arg === "faq") {
    console.log(JSON.stringify(data.faqs, null, 2));
    return;
  }

  const product = data.products.find((p) => p.id === arg);
  if (!product) {
    console.error(
      `No product found for "${arg}". Available IDs: ${data.products
        .map((p) => p.id)
        .join(", ")}`
    );
    process.exit(1);
  }
  console.log(JSON.stringify(product, null, 2));
}

main();
