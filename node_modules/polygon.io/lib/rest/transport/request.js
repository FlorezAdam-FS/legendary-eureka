"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const querystring = require("querystring");
exports.auth = (apiKey, func) => (...args) => func(apiKey, ...args);
exports.get = (path, apiKey = "invalid", query) => new Promise((resolve, reject) => {
    if (!apiKey) {
        throw new Error("API KEY not configured...");
    }
    const authenticatedQuery = Object.assign(Object.assign({}, query), { apiKey });
    const options = {
        protocol: "https:",
        method: "GET",
        host: "api.polygon.io",
        path: path + "?" + querystring.encode(authenticatedQuery)
    };
    const request = https.request(options, (response) => {
        let data = "";
        response.on("data", function (chunk) {
            data += chunk;
        });
        response.on("end", function () {
            resolve(JSON.parse(data));
        });
    });
    request.on("error", (error) => {
        reject(error);
    });
    request.end();
});
