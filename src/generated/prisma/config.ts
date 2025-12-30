// src/generated/prisma/config.ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
    datasource: {
    url: process.env.DATABASE_URL, // asegúrate de tener DATABASE_URL en tu .env
},
});
