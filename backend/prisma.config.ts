import "dotenv/config";

import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasources: {
    db: {
      kind: "postgres",
      connectionString: process.env.DATABASE_URL,
    },
  },
});
