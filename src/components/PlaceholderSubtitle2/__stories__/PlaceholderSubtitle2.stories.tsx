import { Fade, Placeholder } from 'rn-placeholder';

import { PlaceholderSubtitle2 } from '../PlaceholderSubtitle2';
import React from 'react';
import { Subtitle2 } from '@bluebase/components';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('PlaceholderSubtitle2', module);

stories.add('PlaceholderSubtitle2', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<PlaceholderSubtitle2 width={50} />
				</View>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<Subtitle2>Subtitle 2</Subtitle2>
				</View>
			</View>
		</Placeholder>
	</View>
));
