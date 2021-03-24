"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../transport/request");
const v1HistoricTrades_1 = require("./v1HistoricTrades");
exports.formatIStocksSnapshotAggRaw = (raw) => (Object.assign(Object.assign({}, raw), { close: raw.c, high: raw.h, low: raw.l, open: raw.o, volume: raw.v }));
exports.formatIStocksSnapshotQuoteRaw = (raw) => (Object.assign(Object.assign({}, raw), { bidPrice: raw.p, bidSize: raw.s, askPrice: raw.P, askSize: raw.S, lastUpdateTimestam: raw.t }));
exports.formatIStocksSnapshotTickerRaw = (raw) => (Object.assign(Object.assign({}, raw), { day: exports.formatIStocksSnapshotAggRaw(raw.day), lastTrade: v1HistoricTrades_1.formatITradeV1Raw(raw.lastTrade), lastQuote: exports.formatIStocksSnapshotQuoteRaw(raw.lastQuote), min: exports.formatIStocksSnapshotAggRaw(raw.min), prevDay: exports.formatIStocksSnapshotAggRaw(raw.prevDay) }));
const formatISnapshotAllTickersResultRaw = (raw) => (Object.assign(Object.assign({}, raw), { tickers: raw.tickers.map(exports.formatIStocksSnapshotTickerRaw) }));
exports.snapshotAllTickers = (apiKey) => __awaiter(void 0, void 0, void 0, function* () {
    return formatISnapshotAllTickersResultRaw(yield request_1.get(`/v2/snapshot/locale/us/markets/stocks/tickers`, apiKey));
});
const formatISnapshotSingleTickerResultRaw = (raw) => (Object.assign(Object.assign({}, raw), { ticker: exports.formatIStocksSnapshotTickerRaw(raw.ticker) }));
exports.snapshotSingleTicker = (apiKey, ticker) => __awaiter(void 0, void 0, void 0, function* () {
    return formatISnapshotSingleTickerResultRaw(yield request_1.get(`/v2/snapshot/locale/us/markets/stocks/tickers/${ticker}`, apiKey));
});
exports.snapshotGainersLosers = (apiKey, direction = "gainers") => __awaiter(void 0, void 0, void 0, function* () {
    return formatISnapshotAllTickersResultRaw(yield request_1.get(`/v2/snapshot/locale/us/markets/stocks/${direction}`, apiKey));
});
