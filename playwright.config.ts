import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 5432,
		reuseExistingServer: !process.env.CI
	},
	use: {
		baseURL: 'http://localhost:5432'
	},
	testDir: 'e2e',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
