const antdTheme = require("./src/theme.js");
const {
	override,
	fixBabelImports,
	addLessLoader,
	addDecoratorsLegacy
} = require("customize-cra");

module.exports = override(
	addDecoratorsLegacy(),
	fixBabelImports("import",{
		libraryName: "antd",
		libraryDirectory: "es",
		style: true
	}),
	addLessLoader({
		lessOptions:{
			javascriptEnabled: true,
			modifyVars: antdTheme
		}
	})
);
