"use strict";
// CF: https://polygon.io/docs/#!/Forex--Currencies/get_v1_conversion_from_to
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../transport/request");
exports.realTimeCurrencyConversion = (apiKey, from, to, query) => request_1.get(`/v1/conversion/${from}/${to}`, apiKey, query);
