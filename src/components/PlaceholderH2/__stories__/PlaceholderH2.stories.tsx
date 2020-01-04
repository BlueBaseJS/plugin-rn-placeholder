import { Fade, Placeholder } from 'rn-placeholder';

import { H2 } from '@bluebase/components';
import { PlaceholderH2 } from '../PlaceholderH2';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('PlaceholderH2', module);

stories.add('PlaceholderH2', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<PlaceholderH2 width={50} />
				</View>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<H2>Heading 2</H2>
				</View>
			</View>
		</Placeholder>
	</View>
));
