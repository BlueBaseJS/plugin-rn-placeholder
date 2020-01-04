import { Fade, Placeholder } from 'rn-placeholder';

import { H5 } from '@bluebase/components';
import { PlaceholderH5 } from '../PlaceholderH5';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('PlaceholderH5', module);

stories.add('PlaceholderH5', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<PlaceholderH5 width={50} />
				</View>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<H5>Heading 5</H5>
				</View>
			</View>
		</Placeholder>
	</View>
));
