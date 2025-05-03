/** @type {import("prettier").Config & import("prettier-plugin-jsdoc").Options} */
const config = {
	experimentalTernaries: true,
	experimentalOperatorPosition: "start",
	htmlWhitespaceSensitivity: "strict",
	objectWrap: "collapse",
	printWidth: 100,
	proseWrap: "always",
	quoteProps: "consistent",
	tabWidth: 4,
	useTabs: true,

	importOrder: [
		"<TYPES>^(node:)",
		"<TYPES>",
		"<TYPES>^[.]",
		"",
		"<BUILTIN_MODULES>",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^[.]",
	],
	importOrderTypeScriptVersion: getTypeScriptVersion(),

	jsdocAddDefaultToDescription: false,
	jsdocDescriptionWithDot: true,
	jsdocPreferCodeFences: true,

	overrides: [
		{ files: "**.md", options: { proseWrap: "preserve" } },
		{ files: ["**.svg", "**.xml"], options: { parser: "html" } },
		{
			files: ["**/.vscode/*.json", "tsconfig.json", "jsconfig.json"],
			options: { parser: "jsonc", trailingComma: "none" },
		},
		{
			files: ["package.json", "package-lock.json", "npm-shrinkwrap.json"],
			options: { parser: "json-stringify" },
		},
	],

	plugins: [
		require.resolve("./one-sentence-markdown.mjs"),
		require.resolve("@ianvs/prettier-plugin-sort-imports"),
		require.resolve("prettier-plugin-css-order"),
		require.resolve("prettier-plugin-jsdoc"),
		require.resolve("prettier-plugin-organize-attributes"),
		require.resolve("prettier-plugin-packagejson"),
	],
};
module.exports = config;

function getTypeScriptVersion() {
	try {
		return require("typescript").version;
	} catch {
		return undefined;
	}
}
