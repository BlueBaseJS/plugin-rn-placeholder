import { VERSION } from './version';
import { components } from './components';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	description: 'Add rn-placeholder in BlueBase apps!',
	key: '@bluebase/plugin-rn-placeholder',
	name: 'rn-placeholder',
	version: VERSION,

	components,
});
