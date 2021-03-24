"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../transport/request");
const aggregates_1 = require("./aggregates");
const conditionMappings_1 = require("./conditionMappings");
const dailyOpenClose_1 = require("./dailyOpenClose");
const exchanges_1 = require("./exchanges");
const lastQuoteForSymbol_1 = require("./lastQuoteForSymbol");
const lastTradeForSymbol_1 = require("./lastTradeForSymbol");
const snapshots_1 = require("./snapshots");
const v1HistoricQuotes_1 = require("./v1HistoricQuotes");
const v1HistoricTrades_1 = require("./v1HistoricTrades");
const v2HistoricQuotes_1 = require("./v2HistoricQuotes");
const v2HistoricTrades_1 = require("./v2HistoricTrades");
exports.stocksClient = (apiKey) => ({
    conditionMappings: request_1.auth(apiKey, conditionMappings_1.conditionMappings),
    dailyOpenClose: request_1.auth(apiKey, dailyOpenClose_1.dailyOpenClose),
    exchanges: request_1.auth(apiKey, exchanges_1.exchanges),
    lastQuoteForSymbol: request_1.auth(apiKey, lastQuoteForSymbol_1.lastQuoteForSymbol),
    lastTradeForSymbol: request_1.auth(apiKey, lastTradeForSymbol_1.lastTradeForSymbol),
    v1HistoricQuotes: request_1.auth(apiKey, v1HistoricQuotes_1.v1HistoricQuotes),
    v1HistoricTrades: request_1.auth(apiKey, v1HistoricTrades_1.v1HistoricTrades),
    v2HistoricQuotes: request_1.auth(apiKey, v2HistoricQuotes_1.v2HistoricQuotes),
    v2HistoricTrades: request_1.auth(apiKey, v2HistoricTrades_1.v2HistoricTrades),
    // snapshot
    snapshotAllTickers: request_1.auth(apiKey, snapshots_1.snapshotAllTickers),
    snapshotSingleTicker: request_1.auth(apiKey, snapshots_1.snapshotSingleTicker),
    snapshotGainersLosers: request_1.auth(apiKey, snapshots_1.snapshotGainersLosers),
    // aggregates
    previousClose: request_1.auth(apiKey, aggregates_1.stocksPreviousClose),
    aggregates: request_1.auth(apiKey, aggregates_1.stocksAggregates),
    groupedDaily: request_1.auth(apiKey, aggregates_1.stocksGroupedDaily)
});
exports.default = exports.stocksClient;
