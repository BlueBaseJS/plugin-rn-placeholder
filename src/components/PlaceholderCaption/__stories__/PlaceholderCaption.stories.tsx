import { Fade, Placeholder } from 'rn-placeholder';

import { Caption } from '@bluebase/components';
import { PlaceholderCaption } from '../PlaceholderCaption';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('PlaceholderCaption', module);

stories.add('PlaceholderCaption', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<PlaceholderCaption width={50} />
				</View>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<Caption>Caption</Caption>
				</View>
			</View>
		</Placeholder>
	</View>
));
