import { Fade, Placeholder } from 'rn-placeholder';

import { H4 } from '@bluebase/components';
import { PlaceholderH4 } from '../PlaceholderH4';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('PlaceholderH4', module);

stories.add('PlaceholderH4', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<PlaceholderH4 width={50} />
				</View>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<H4>Heading 1</H4>
				</View>
			</View>
		</Placeholder>
	</View>
));
