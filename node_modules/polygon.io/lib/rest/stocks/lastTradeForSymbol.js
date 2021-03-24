"use strict";
// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_last_stocks_symbol
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../transport/request");
exports.lastTradeForSymbol = (apiKey, symbol) => request_1.get(`/v1/last/stocks/${symbol}`, apiKey);
