"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../rest/transport/request");
const crypto_1 = require("./crypto");
const forex_1 = require("./forex");
const stocks_1 = require("./stocks");
__export(require("./forex"));
__export(require("./stocks"));
__export(require("./crypto"));
exports.websocketClient = (apiKey) => ({
    crypto: request_1.auth(apiKey, crypto_1.getCryptoWebsocket),
    forex: request_1.auth(apiKey, forex_1.getForexWebsocket),
    stocks: request_1.auth(apiKey, stocks_1.getStocksWebsocket)
});
exports.default = exports.websocketClient;
