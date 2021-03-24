"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../transport/request");
const lastQuoteForCurrencyPair_1 = require("./lastQuoteForCurrencyPair");
const historicForexTicks_1 = require("./historicForexTicks");
const aggregates_1 = require("./aggregates");
const snapshots_1 = require("./snapshots");
const realTimeCurrencyConversion_1 = require("./realTimeCurrencyConversion");
exports.forexClient = (apiKey) => ({
    lastQuoteForCurrencyPair: request_1.auth(apiKey, lastQuoteForCurrencyPair_1.lastQuoteForCurrencyPair),
    historicTicks: request_1.auth(apiKey, historicForexTicks_1.historicForexTicks),
    realTimeCurrencyConversion: request_1.auth(apiKey, realTimeCurrencyConversion_1.realTimeCurrencyConversion),
    // aggregates
    previousClose: request_1.auth(apiKey, aggregates_1.forexPreviousClose),
    aggregates: request_1.auth(apiKey, aggregates_1.forexAggregates),
    groupedDaily: request_1.auth(apiKey, aggregates_1.forexGroupedDaily),
    // snapshots
    snapshotAllTickers: request_1.auth(apiKey, snapshots_1.forexSnapshotAllTickers),
    snapshotGainersLosers: request_1.auth(apiKey, snapshots_1.forexSnapshotGainersLosers)
});
exports.default = exports.forexClient;
