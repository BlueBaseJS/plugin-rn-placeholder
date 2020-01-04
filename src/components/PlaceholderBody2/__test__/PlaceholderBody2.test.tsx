import { BlueBaseApp } from '@bluebase/core';
import MUIplugin from '@bluebase/plugin-material-ui';
import { PlaceholderBody2 } from '../PlaceholderBody2';
import { PlaceholderLine } from 'rn-placeholder';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

// jest.mock('expo', () => jest.fn());
jest.mock('NativeAnimatedHelper');

describe('PlaceholderBody2', () => {
	it('should show Media component', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<PlaceholderBody2 width={50} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, PlaceholderLine);

		// expect(wrapper).toMatchSnapshot();
		// const view = wrapper.find('Placeholder View[testID="avatar-view"]').last();
		expect(wrapper.find(PlaceholderLine).exists()).toBe(true);

		wrapper.unmount();
	});
});
