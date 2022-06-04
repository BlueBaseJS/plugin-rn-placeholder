import { BlueBaseApp, getComponent } from '@bluebase/core';
import MUIplugin from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import { PlaceholderCard } from '../PlaceholderCard';
const PlaceholderCardComponent = getComponent('PlaceholderCard');

jest.mock('NativeAnimatedHelper');

describe('PlaceholderCard', () => {
	// it('should show Placeholder receiving props', async () => {
	// 	const wrapper = mount(
	// 		<BlueBaseApp plugins={[MUIplugin]}>
	// 			<PlaceholderCard />
	// 		</BlueBaseApp>
	// 	);
	// 	await waitForElement(wrapper, PlaceholderCard);
	// 	// expect(wrapper).toMatchSnapshot();

	// 	expect(wrapper.find('Placeholder').prop('isReady')).toBe(false);
	// 	expect(wrapper.find('Placeholder').prop('animation')).toEqual('fade');

	// 	wrapper.unmount();
	// });

	it('should receive default width 190', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[MUIplugin]} components={{ PlaceholderCard }}>
				<PlaceholderCardComponent />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, PlaceholderCardComponent);

		const style: any = wrapper
			.find('Card')
			.first()
			.prop('style');
		expect(style.width).toBe(190);

		wrapper.unmount();
	});
});
