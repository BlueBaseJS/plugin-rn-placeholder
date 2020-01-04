import { Fade, Placeholder } from 'rn-placeholder';

import { Body1 } from '@bluebase/components';
import { PlaceholderBody1 } from '../PlaceholderBody1';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('PlaceholderBody1', module);

stories.add('PlaceholderBody1', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<PlaceholderBody1 width={50} />
				</View>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<Body1>Body 1</Body1>
				</View>
			</View>
		</Placeholder>
	</View>
));
