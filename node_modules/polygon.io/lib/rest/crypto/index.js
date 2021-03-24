"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../transport/request");
const dailyOpenClose_1 = require("./dailyOpenClose");
const cryptoExchanges_1 = require("./cryptoExchanges");
const lastTradeForACryptoPair_1 = require("./lastTradeForACryptoPair");
const snapshots_1 = require("./snapshots");
const aggregates_1 = require("./aggregates");
const historicCryptoTrades_1 = require("./historicCryptoTrades");
exports.cryptoClient = (apiKey) => ({
    dailyOpenClose: request_1.auth(apiKey, dailyOpenClose_1.cryptoDailyOpenClose),
    exchanges: request_1.auth(apiKey, cryptoExchanges_1.cryptoExchanges),
    lastTradeForPair: request_1.auth(apiKey, lastTradeForACryptoPair_1.lastTradeForCryptoPair),
    historicTrades: request_1.auth(apiKey, historicCryptoTrades_1.historicCryptoTrades),
    // snapshots
    snapshotSingleTicker: request_1.auth(apiKey, snapshots_1.cryptoSnapshotSingleTicker),
    snapshotAllTickers: request_1.auth(apiKey, snapshots_1.cryptoSnapshotAllTickers),
    snapshotGainersLosers: request_1.auth(apiKey, snapshots_1.cryptoSnapshotGainersLosers),
    snapshotSingleTickerFullBook: request_1.auth(apiKey, snapshots_1.cryptoSnapshotSingleTickerFullBook),
    // aggregates
    previousClose: request_1.auth(apiKey, aggregates_1.cryptoPreviousClose),
    aggregates: request_1.auth(apiKey, aggregates_1.cryptoAggregates),
    groupedDaily: request_1.auth(apiKey, aggregates_1.cryptoGroupedDaily)
});
exports.default = exports.cryptoClient;
