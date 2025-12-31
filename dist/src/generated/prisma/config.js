"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/generated/prisma/config.ts
require("dotenv/config");
const config_1 = require("prisma/config");
exports.default = (0, config_1.defineConfig)({
    datasource: {
        url: process.env.DATABASE_URL, // asegúrate de tener DATABASE_URL en tu .env
    },
});
