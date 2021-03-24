"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("./crypto");
const forex_1 = require("./forex");
const reference_1 = require("./reference");
const stocks_1 = require("./stocks");
__export(require("./crypto"));
__export(require("./forex"));
__export(require("./reference"));
__export(require("./stocks"));
exports.restClient = (apiKey) => ({
    crypto: crypto_1.cryptoClient(apiKey),
    forex: forex_1.forexClient(apiKey),
    stocks: stocks_1.stocksClient(apiKey),
    reference: reference_1.referenceClient(apiKey)
});
exports.default = exports.restClient;
