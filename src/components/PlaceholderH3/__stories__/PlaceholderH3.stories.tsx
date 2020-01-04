import { Fade, Placeholder } from 'rn-placeholder';

import { H3 } from '@bluebase/components';
import { PlaceholderH3 } from '../PlaceholderH3';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('PlaceholderH3', module);

stories.add('PlaceholderH3', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<PlaceholderH3 width={50} />
				</View>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<H3>Heading 3</H3>
				</View>
			</View>
		</Placeholder>
	</View>
));
