import { Avatar, Card } from '@bluebase/components';
import { Fade, Placeholder } from 'rn-placeholder';

import { PlaceholderAvatarProps } from '../PlaceholderAvatar';
import React from 'react';
import { View } from 'react-native';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const PlaceholderAvatar = getComponent<PlaceholderAvatarProps>('PlaceholderAvatar');
const stories = storiesOf('PlaceholderAvatar', module);

stories.add('ListItem Skeleton with default props', () => (
	<View>
		<Placeholder Animation={Fade}>
			<View style={{ paddingVertical: 20, flexDirection: 'row' }}>
				<Card style={{ flex: 1, marginHorizontal: 8 }}>
					<PlaceholderAvatar />
				</Card>
				<Card style={{ flex: 1, marginHorizontal: 8 }}>
					<Avatar type="image" image={{ uri: 'https://placeimg.com/100/100/people' }} />
				</Card>
			</View>
		</Placeholder>
	</View>
));
