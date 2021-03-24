"use strict";
// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v1_last_quote_currencies_from_to
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../transport/request");
exports.lastQuoteForCurrencyPair = (apiKey, from, to) => request_1.get(`/v1/last_quote/currencies/${from}/${to}`, apiKey);
