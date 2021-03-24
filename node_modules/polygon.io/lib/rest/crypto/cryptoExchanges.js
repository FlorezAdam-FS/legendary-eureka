"use strict";
//CF: https://polygon.io/docs/#!/Crypto/get_v1_meta_crypto_exchanges
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../transport/request");
exports.cryptoExchanges = (apiKey) => request_1.get(`/v1/meta/crypto-exchanges`, apiKey);
