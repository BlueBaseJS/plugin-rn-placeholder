import { BlueBaseApp, getComponent } from '@bluebase/core';

import MUIplugin from '@bluebase/plugin-material-ui';
import { PlaceholderAvatarProps } from '../PlaceholderAvatar';
import { PlaceholderMedia } from 'rn-placeholder';
import Plugin from '../../../index';
import React from 'react';
import { ViewStyle } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

// jest.mock('expo', () => jest.fn());
jest.mock('NativeAnimatedHelper');

const PlaceholderAvatar = getComponent<PlaceholderAvatarProps>('PlaceholderAvatar');

describe('PlaceholderAvatar', () => {
	it('should show circle media', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<PlaceholderAvatar variant="circle" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, PlaceholderMedia);

		expect((wrapper.find(PlaceholderMedia).prop('style') as ViewStyle).borderRadius).toBe(28);

		wrapper.unmount();
	});

	it('should show rounded media', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<PlaceholderAvatar variant="rounded" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, PlaceholderMedia);

		expect((wrapper.find(PlaceholderMedia).prop('style') as ViewStyle).borderRadius).toBe(4);

		wrapper.unmount();
	});

	it('should show square media', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<PlaceholderAvatar variant="square" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, PlaceholderMedia);

		expect((wrapper.find(PlaceholderMedia).prop('style') as ViewStyle).borderRadius).toBe(0);

		wrapper.unmount();
	});
});
