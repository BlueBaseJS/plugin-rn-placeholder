import { Fade, Placeholder } from 'rn-placeholder';

import { H6 } from '@bluebase/components';
import { PlaceholderH6 } from '../PlaceholderH6';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('PlaceholderH6', module);

stories.add('PlaceholderH6', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<PlaceholderH6 width={50} />
				</View>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<H6>Heading 6</H6>
				</View>
			</View>
		</Placeholder>
	</View>
));
