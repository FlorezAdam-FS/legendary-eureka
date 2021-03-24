"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Stocks TRADE:
const transport_1 = require("../transport");
exports.getStocksWebsocket = (apiKey) => transport_1.getWsClient("wss://socket.polygon.io/stocks", apiKey);
