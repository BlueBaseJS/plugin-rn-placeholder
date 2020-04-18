import { BlueBaseApp, getComponent } from '@bluebase/core';

import { PlaceholderProps } from '../Placeholder';
import Plugin from '../../../index';
import { Placeholder as RNPlaceholder } from 'rn-placeholder';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

// jest.mock('expo', () => jest.fn());
jest.mock('NativeAnimatedHelper');

const Placeholder = getComponent<PlaceholderProps>('Placeholder');

describe('Placeholder', () => {
	it('should show Placeholder component', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Placeholder />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Placeholder);

		expect(wrapper.find(RNPlaceholder).exists()).toBe(true);

		wrapper.unmount();
	});
});
