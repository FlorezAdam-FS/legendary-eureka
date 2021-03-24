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
// CF: https://polygon.io/docs/#!/Stocks--Equities/get_v1_historic_quotes_symbol_date
const request_1 = require("../transport/request");
exports.formatIQuoteV1Raw = (raw) => (Object.assign(Object.assign({}, raw), { condition: raw.c, bidExchange: raw.bE, askExchange: raw.aE, askPrice: raw.aP, buyPrice: raw.bP, bidSize: raw.bS, askSize: raw.aS, timestamp: raw.t }));
exports.formatIV1HistoricQuotesResultRaw = (raw) => (Object.assign(Object.assign({}, raw), { ticks: raw.ticks.map(exports.formatIQuoteV1Raw) }));
exports.v1HistoricQuotes = (apiKey, symbol, date, query) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.formatIV1HistoricQuotesResultRaw(yield request_1.get(`/v1/historic/quotes/${symbol}/${date}`, apiKey, query));
});
