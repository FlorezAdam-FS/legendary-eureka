"use strict";
// CF: https://polygon.io/docs/#!/Crypto/get_v1_last_crypto_from_to
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../transport/request");
exports.lastTradeForCryptoPair = (apiKey, from, to) => request_1.get(`/v1/last/crypto/${from}/${to}`, apiKey);
