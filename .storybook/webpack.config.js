const path = require('path');
const {
	plugins: CRAPlugins,
	resolve: CRAResolve,
	module: CRAModule
} = require('react-scripts/config/webpack.config.dev');

const CRA_HTML_PLUGIN_INDEX = 1;
const STORYBOOK_HOT_MODULE_PLUGIN_INDEX = 3;

const patchDefaultModuleRule = module => {
	module.rules[module.rules.length - 1].oneOf[module.rules[module.rules.length - 1].oneOf.length - 1]
		.exclude.push(/\.ejs$/);
};

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
	const plugins = [
		...CRAPlugins.filter((plugin, index) => index !== CRA_HTML_PLUGIN_INDEX),
		...storybookBaseConfig.plugins.filter((plugin, index) => index !== STORYBOOK_HOT_MODULE_PLUGIN_INDEX)
	];

	patchDefaultModuleRule(CRAModule);

	return {
		entry: storybookBaseConfig.entry,
		output: storybookBaseConfig.output,
		resolve: CRAResolve,
		module: CRAModule,
		plugins,
		devServer: {
			stats: {
				all: false,
				errors: true,
				warnings: true
			}
		}
	};
};