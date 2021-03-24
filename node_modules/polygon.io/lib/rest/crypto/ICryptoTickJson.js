"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatICryptoTickJsonRaw = (trade) => {
    return Object.assign(Object.assign({}, trade), { price: trade.p, size: trade.s, exchange: trade.x, conditions: trade.c, timestamp: trade.t });
};
