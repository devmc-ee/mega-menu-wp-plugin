import { defineConfig, devices } from '@playwright/test';
export default defineConfig( {
	testDir: '__e2e-tests__',
	fullyParallel: true,
	use: {
		baseURL: 'http://localhost:8080',
	},
	projects: [
		{ name: 'setup', testMatch: /.*\.setup\.ts/ },

		{
			name: 'chromium',
			use: {
				...devices[ 'Desktop Chrome' ],
				// Use prepared auth state.
				storageState: 'playwright/.auth/user.json',
			},
			dependencies: [ 'setup' ],
		},
	],
} );
