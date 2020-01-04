import { Fade, Placeholder } from 'rn-placeholder';

import { Overline } from '@bluebase/components';
import { PlaceholderOverline } from '../PlaceholderOverline';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('PlaceholderOverline', module);

stories.add('PlaceholderOverline', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<PlaceholderOverline width={50} />
				</View>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<Overline>Overline</Overline>
				</View>
			</View>
		</Placeholder>
	</View>
));
