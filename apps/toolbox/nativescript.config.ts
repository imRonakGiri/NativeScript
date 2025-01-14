import { NativeScriptConfig } from '@nativescript/core';

export default {
	id: 'org.nativescript.ToolBox',
	appResourcesPath: '../../tools/assets/App_Resources',
	webpackConfigPath: 'webpack.custom.config.js',
	android: {
		v8Flags: '--expose_gc',
		markingMode: 'none',
		suppressCallJSMethodExceptions: false,
	},
} as NativeScriptConfig;
