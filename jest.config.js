/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: [
		'/node_modules/',
		'/dist/',
		'/__e2e-tests__/',
		'/__mocks__/',
	],
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
	setupFiles: ['./jest.setup.jsm'], // Load the setup file
};
