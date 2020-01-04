import { Fade, Placeholder } from 'rn-placeholder';

import { PlaceholderSubtitle1 } from '../PlaceholderSubtitle1';
import React from 'react';
import { Subtitle1 } from '@bluebase/components';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('PlaceholderSubtitle1', module);

stories.add('PlaceholderSubtitle1', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<PlaceholderSubtitle1 width={50} />
				</View>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<Subtitle1>Subtitle 1</Subtitle1>
				</View>
			</View>
		</Placeholder>
	</View>
));
