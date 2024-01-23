import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
};

