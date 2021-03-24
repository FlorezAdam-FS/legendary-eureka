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
const formatIAggv2Raw = (raw) => (Object.assign(Object.assign({}, raw), { tickerSymbol: raw.T, volume: raw.v, open: raw.o, close: raw.c, high: raw.h, low: raw.l, timestamp: raw.t, numberOfItems: raw.n }));
exports.formatIAggResponseRaw = (raw) => (Object.assign(Object.assign({}, raw), { results: raw.results.map(formatIAggv2Raw) }));
// CF : https://polygon.io/docs/#!/Stocks--Equities/get_v2_aggs_ticker_ticker_prev
exports.stocksPreviousClose = (apiKey, ticker, query) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.formatIAggResponseRaw(yield request_1.get(`/v2/aggs/ticker/${ticker}/prev`, apiKey, query));
});
// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_aggs_ticker_ticker_range_multiplier_timespan_from_to
exports.stocksAggregates = (apikey, ticker, multiplier, timespan, from, to, query) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.formatIAggResponseRaw(yield request_1.get(`/v2/aggs/ticker/${ticker}/range/${multiplier}/${timespan}/${from}/${to}`, apikey, query));
});
// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v2_aggs_grouped_locale_locale_market_market_date
exports.stocksGroupedDaily = (apiKey, locale, market, date, query) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.formatIAggResponseRaw(yield request_1.get(`/v2/aggs/grouped/locale/${locale}/market/${market}/${date}`, apiKey, query));
});
