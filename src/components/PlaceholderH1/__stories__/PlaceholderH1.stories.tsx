import { Fade, Placeholder } from 'rn-placeholder';

import { H1 } from '@bluebase/components';
import { PlaceholderH1 } from '../PlaceholderH1';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('PlaceholderH1', module);

stories.add('PlaceholderH1', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<PlaceholderH1 width={50} />
				</View>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<H1>Heading 1</H1>
				</View>
			</View>
		</Placeholder>
	</View>
));
