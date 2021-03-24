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
const ICryptoTickJson_1 = require("./ICryptoTickJson");
const formatICryptoSnapshotAggRaw = (raw) => (Object.assign(Object.assign({}, raw), { closePrice: raw.c, highPrice: raw.h, lowPrice: raw.l, openPrice: raw.o, volume: raw.v }));
const formatICryptoSnapshotTickerRaw = (raw) => ({
    ticker: raw.ticker,
    todaysChange: raw.todaysChange,
    todaysChangePerc: raw.todaysChangePerc,
    day: formatICryptoSnapshotAggRaw(raw.day),
    lastTrade: ICryptoTickJson_1.formatICryptoTickJsonRaw(raw.lastTrade),
    min: formatICryptoSnapshotAggRaw(raw.min),
    prevDay: formatICryptoSnapshotAggRaw(raw.prevDay),
    updated: raw.updated
});
// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_tickers
exports.cryptoSnapshotAllTickers = (apiKey) => __awaiter(void 0, void 0, void 0, function* () {
    const raw = yield request_1.get(`/v2/snapshot/locale/global/markets/crypto/tickers`, apiKey);
    return {
        status: raw.status,
        tickers: raw.tickers.map(formatICryptoSnapshotTickerRaw)
    };
});
// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_tickers
exports.cryptoSnapshotSingleTicker = (apiKey, ticker) => __awaiter(void 0, void 0, void 0, function* () {
    const raw = yield request_1.get(`/v2/snapshot/locale/global/markets/crypto/tickers/${ticker}`, apiKey);
    return {
        status: raw.status,
        ticker: formatICryptoSnapshotTickerRaw(raw.ticker)
    };
});
// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_direction
exports.cryptoSnapshotGainersLosers = (apiKey, direction = "gainers") => __awaiter(void 0, void 0, void 0, function* () {
    const raw = yield request_1.get(`/v2/snapshot/locale/global/markets/crypto/${direction}`, apiKey);
    return {
        status: raw.status,
        tickers: raw.tickers.map(formatICryptoSnapshotTickerRaw)
    };
});
const formatICryptoSnapshotBookItemRaw = (raw) => (Object.assign(Object.assign({}, raw), { price: raw.p, exchange: raw.x }));
const formatICryptoSnapshotTickerBookRaw = (raw) => (Object.assign(Object.assign({}, raw), { bids: raw.bids && raw.bids.length
        ? raw.bids.map(formatICryptoSnapshotBookItemRaw)
        : [], asks: raw.asks && raw.asks.length
        ? raw.asks.map(formatICryptoSnapshotBookItemRaw)
        : [] }));
const formatICryptoSingleTickerFullBookRaw = (raw) => (Object.assign(Object.assign({}, raw), { data: formatICryptoSnapshotTickerBookRaw(raw.data) }));
// CF: https://polygon.io/docs/#!/Crypto/get_v2_snapshot_locale_global_markets_crypto_tickers_ticker_book
exports.cryptoSnapshotSingleTickerFullBook = (apiKey, ticker) => __awaiter(void 0, void 0, void 0, function* () {
    const raw = yield request_1.get(`/v2/snapshot/locale/global/markets/crypto/tickers/${ticker}/book`, apiKey);
    return formatICryptoSingleTickerFullBookRaw(raw);
});
