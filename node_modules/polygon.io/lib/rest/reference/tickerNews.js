"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CF: https://polygon.io/docs/#!/Reference/get_v1_meta_symbols_symbol_news
const request_1 = require("../transport/request");
exports.tickerNews = (apiKey, symbol, query) => request_1.get(`/v1/meta/symbols/${symbol}/news`, apiKey, query);
