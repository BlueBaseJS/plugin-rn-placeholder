import { Card, View } from '@bluebase/components';
import { Theme, useStyles } from '@bluebase/core';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Fade, Placeholder, PlaceholderLine, PlaceholderMedia } from 'rn-placeholder';

export interface PlaceholderCardStyles {
	root: ViewStyle;
	content: TextStyle;
	title: TextStyle;
	titleHeight: number;
	descriptionHeight: number;
}

export interface PlaceholderCardProps {
	/** Width of the card */
	width: number;
	mediaHeight?: number;
	style?: StyleProp<ViewStyle>;
	styles?: Partial<PlaceholderCardStyles>;
}

const defaultStyles = (theme: Theme): PlaceholderCardStyles => ({
	root: {
		// height: 230,
	},

	content: {
		padding: theme.spacing.unit,
	},

	title: {
		marginBottom: theme.spacing.unit,
	},

	titleHeight: theme.typography.subtitle1.fontSize! + 2,

	descriptionHeight: theme.typography.caption.fontSize! + 2,
});


/**
 * PlaceholderCard used for listing Places. A place represents a physical location in the Mevris Platform.
 */
export const PlaceholderCard = (props: PlaceholderCardProps) => {
	const { width, mediaHeight } = props;
	const styles = useStyles<PlaceholderCardStyles>('PlaceholderCard', props, defaultStyles);

	return (
		<Card style={{ ...styles.root, width }}>
			<Placeholder Animation={Fade}>
				<PlaceholderMedia size={width} style={{ borderRadius: 0, height: mediaHeight ?? width }} isRound={false} />
				<View style={styles.content}>
					<PlaceholderLine width={70} height={styles.titleHeight} style={styles.title} noMargin />
					<PlaceholderLine width={30} height={styles.descriptionHeight} noMargin />
				</View>
			</Placeholder>
		</Card>
	);
};

PlaceholderCard.defaultProps = {
	width: 190,
};
