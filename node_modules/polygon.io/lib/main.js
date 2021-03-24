"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./rest"));
__export(require("./websockets"));
const rest_1 = require("./rest");
const websockets_1 = require("./websockets");
exports.polygonClient = (apiKey) => ({
    rest: rest_1.default(apiKey),
    websockets: websockets_1.default(apiKey)
});
exports.default = exports.polygonClient;
