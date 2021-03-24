"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
exports.getWsClient = (url, apiKey) => {
    if (!apiKey) {
        throw new Error("api key not provided.");
    }
    const ws = new WebSocket(url);
    ws.on("open", () => {
        ws.send(JSON.stringify({ action: "auth", params: apiKey }));
    });
    return ws;
};
