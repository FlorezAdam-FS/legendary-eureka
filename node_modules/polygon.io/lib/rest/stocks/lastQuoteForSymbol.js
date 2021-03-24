"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_last_quote_stocks_symbol
const request_1 = require("../transport/request");
exports.lastQuoteForSymbol = (apiKey, symbol) => request_1.get(`/v1/last_quote/stocks/${symbol}`, apiKey);
