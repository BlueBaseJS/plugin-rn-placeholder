import { BlueBaseApp, getComponent } from '@bluebase/core';
import { Card, List } from '@bluebase/components';
import { Fade, Placeholder } from 'rn-placeholder';

import { BlueBaseImage } from '@bluebase/components';
import MUIplugin from '@bluebase/plugin-material-ui';
import { PlaceholderListItemProps } from '../PlaceholderListItem';
import Plugin from '../../../index';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

const PlaceholderListItem = getComponent<PlaceholderListItemProps>('PlaceholderListItem');
const stories = storiesOf('PlaceholderListItem', module);

stories
	.add('ListItem Skeleton with default props', () => (
		<View>
			<Placeholder Animation={Fade}>
				<View style={{ paddingVertical: 20, flexDirection: 'row' }}>
					<Card style={{ flex: 1, marginHorizontal: 8 }}>
						<PlaceholderListItem />
					</Card>
					<Card style={{ flex: 1, marginHorizontal: 8 }}>
						<List.Item title="Sample" />
					</Card>
				</View>
			</Placeholder>
		</View>
	))
	.add('ListItem Skeleton with avatar prop', () => (
		<View style={{ paddingVertical: 20, flexDirection: 'row' }}>
			<Card style={{ flex: 1 }}>
				<Placeholder Animation={Fade}>
					<PlaceholderListItem avatar={true} />
				</Placeholder>
			</Card>
			<Card style={{ flex: 1, marginHorizontal: 8 }}>
				<List.Item left={<List.Avatar type="text" text="B" />} title="Sample" />
			</Card>
		</View>
	))
	.add('ListItem Skeleton with description prop', () => (
		<BlueBaseApp plugins={[Plugin, MUIplugin]}>
			<Placeholder Animation={Fade}>
				<PlaceholderListItem description={true} />
			</Placeholder>
		</BlueBaseApp>
	))
	.add('ListItem Skeleton with description and avatar', () => (
		<>
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<Placeholder Animation={Fade}>
					<PlaceholderListItem avatar={true} description={true} />
				</Placeholder>
			</BlueBaseApp>
			<List.Item
				left={<List.Avatar type="text" text="B" />}
				title="Sample"
				description="Reference"
			/>
		</>
	))

	.add('ListItem Skeleton with all props avatar circle', () => (
		<>
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<Placeholder Animation={Fade}>
					<PlaceholderListItem avatar={true} description={true} variant="circle" />
				</Placeholder>
			</BlueBaseApp>
			<List.Item
				left={<List.Avatar type="text" text="B" />}
				title="Sample"
				description="Reference"
			/>
		</>
	))
	.add('ListItem Skeleton with all props avatar rounded', () => (
		<>
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<Placeholder Animation={Fade}>
					<PlaceholderListItem avatar={true} description={true} variant="rounded" />
				</Placeholder>
			</BlueBaseApp>
			<List.Item
				left={<List.Avatar type="text" text="B" variant="rounded" style={{ borderRadius: 4 }} />}
				title="Sample"
				description="Reference"
			/>
		</>
	))
	.add('ListItem Skeleton with all props avatar square', () => (
		<>
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<Placeholder Animation={Fade}>
					<PlaceholderListItem avatar={true} description={true} variant="square" />
				</Placeholder>
			</BlueBaseApp>
			<List.Item
				left={<List.Avatar type="text" text="B" variant="square" style={{ borderRadius: 0 }} />}
				title="Sample"
				description="Reference"
			/>
		</>
	))
	.add('ListItem Skeleton with all props avatar icon', () => (
		<>
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<Placeholder Animation={Fade}>
					<PlaceholderListItem
						avatar={true}
						description={true}
						variant="icon"
						styles={{
							media: {
								height: 26,
								width: 24,
							},
						}}
					/>
				</Placeholder>
			</BlueBaseApp>
			<List.Item left={<List.Icon name="delete" />} title="Sample" description="Reference" />
		</>
	))
	.add('ListItem Skeleton with all props avatar image', () => (
		<>
			<BlueBaseApp plugins={[Plugin, MUIplugin]}>
				<Placeholder Animation={Fade}>
					<PlaceholderListItem
						avatar={true}
						description={true}
						variant="rounded"
						styles={{
							media: {
								height: 32,
								width: 32,
							},
						}}
					/>
				</Placeholder>
			</BlueBaseApp>
			<List.Item
				left={
					<BlueBaseImage
						source={{ uri: 'https://placeimg.com/50/50/any' }}
						style={{ borderRadius: 4, height: 32, width: 32 }}
					/>
				}
				title="Sample"
				description="Reference"
			/>
		</>
	));
