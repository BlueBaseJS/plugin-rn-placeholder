import { Fade, Placeholder } from 'rn-placeholder';

import { Body2 } from '@bluebase/components';
import { PlaceholderBody2 } from '../PlaceholderBody2';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('PlaceholderBody2', module);

stories.add('PlaceholderBody2', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<PlaceholderBody2 width={50} />
				</View>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<Body2>Body 2</Body2>
				</View>
			</View>
		</Placeholder>
	</View>
));
