import { defineConfig } from "@fullstacksjs/eslint-config";

export const config = defineConfig({
  typescript: {
    tsconfigRootDir: import.meta.dirname,
  },
});
