import { BlueBaseApp, getComponent } from '@bluebase/core';

import MUIplugin from '@bluebase/plugin-material-ui';
import { PlaceholderListItemProps } from '../PlaceholderListItem';
import { PlaceholderMedia } from 'rn-placeholder';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

// jest.mock('expo', () => jest.fn());
jest.mock('NativeAnimatedHelper');

const PlaceholderListItem = getComponent<PlaceholderListItemProps>('PlaceholderListItem');

describe('PlaceholderListItem', () => {
	it('should show Media component', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<PlaceholderListItem avatar variant="circle" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, PlaceholderMedia);

		// expect(wrapper).toMatchSnapshot();
		// const view = wrapper.find('Placeholder View[testID="avatar-view"]').last();
		expect(wrapper.find(PlaceholderMedia).exists()).toBe(true);

		wrapper.unmount();
	});

	it('should show description', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<PlaceholderListItem description={true} avatar={false} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, PlaceholderListItem);

		expect(wrapper.find('[testID="skeleton-avatar"]')).toHaveLength(0);
		expect(wrapper.find('[testID="skeleton-description"]')).toHaveLength(1);

		wrapper.unmount();
	});
	it('should show rounded avatar', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<PlaceholderListItem description={true} avatar={true} variant="rounded" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, PlaceholderListItem);

		expect(wrapper.find('[testID="skeleton-avatar"]')).toHaveLength(1);
		expect(wrapper.find('[testID="skeleton-description"]')).toHaveLength(1);

		wrapper.unmount();
	});
	it('should show square avatar', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<PlaceholderListItem description={true} avatar={true} variant="square" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, PlaceholderListItem);

		expect(wrapper.find('[testID="skeleton-avatar"]')).toHaveLength(1);
		expect(wrapper.find('[testID="skeleton-description"]')).toHaveLength(1);

		wrapper.unmount();
	});
	it('should show icon avatar mobile', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<PlaceholderListItem description={true} avatar={true} variant="icon" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, PlaceholderListItem);

		expect(wrapper.find('[testID="skeleton-avatar"]')).toHaveLength(1);
		expect(wrapper.find('[testID="skeleton-description"]')).toHaveLength(1);

		wrapper.unmount();
	});
	it('should show square avatar web', async () => {
		jest.mock('Platform', () => {
			const Platform = (require as any).requireActual('Platform');
			Platform.OS = 'web';
			return Platform;
		});
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<PlaceholderListItem description={true} avatar={true} variant="square" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, PlaceholderListItem);

		expect(wrapper.find('[testID="skeleton-avatar"]')).toHaveLength(1);
		expect(wrapper.find('[testID="skeleton-description"]')).toHaveLength(1);

		wrapper.unmount();
	});
	it('should show icon avatar web', async () => {
		jest.mock('Platform', () => {
			const Platform = (require as any).requireActual('Platform');
			Platform.OS = 'web';
			return Platform;
		});
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<PlaceholderListItem description={true} avatar={true} variant="icon" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, PlaceholderListItem);

		expect(wrapper.find('[testID="skeleton-avatar"]')).toHaveLength(1);
		expect(wrapper.find('[testID="skeleton-description"]')).toHaveLength(1);

		wrapper.unmount();
	});
});
