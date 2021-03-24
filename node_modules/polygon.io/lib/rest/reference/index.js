"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("../transport/request");
const locales_1 = require("./locales");
const marketHolidays_1 = require("./marketHolidays");
const markets_1 = require("./markets");
const marketStatus_1 = require("./marketStatus");
const stockDividends_1 = require("./stockDividends");
const stockFinancials_1 = require("./stockFinancials");
const stockSplits_1 = require("./stockSplits");
const tickerDetails_1 = require("./tickerDetails");
const tickerNews_1 = require("./tickerNews");
const tickers_1 = require("./tickers");
const tickerTypes_1 = require("./tickerTypes");
exports.referenceClient = (apiKey) => ({
    locales: request_1.auth(apiKey, locales_1.locales),
    markets: request_1.auth(apiKey, markets_1.markets),
    marketHolydays: request_1.auth(apiKey, marketHolidays_1.marketHolydays),
    marketStatus: request_1.auth(apiKey, marketStatus_1.marketStatus),
    stockDividends: request_1.auth(apiKey, stockDividends_1.stockDividends),
    stockFinancials: request_1.auth(apiKey, stockFinancials_1.stockFinancials),
    stockSplits: request_1.auth(apiKey, stockSplits_1.stockSplits),
    tickerDetails: request_1.auth(apiKey, tickerDetails_1.tickerDetails),
    tickerNews: request_1.auth(apiKey, tickerNews_1.tickerNews),
    tickers: request_1.auth(apiKey, tickers_1.tickers),
    tickerTypes: request_1.auth(apiKey, tickerTypes_1.tickerTypes)
});
exports.default = exports.referenceClient;
