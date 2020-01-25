import { View, ViewStyle } from 'react-native';
import { getComponent, useTheme } from '@bluebase/core';

import { ListAvatarDefaultProps } from '@bluebase/components';
import { PlaceholderAvatarProps } from '../PlaceholderAvatar';
import { PlaceholderBody1Props } from '../PlaceholderBody1';
import { PlaceholderBody2Props } from '../PlaceholderBody2';
import { PlaceholderMedia } from 'rn-placeholder';
import React from 'react';

const PlaceholderAvatar = getComponent<PlaceholderAvatarProps>('PlaceholderAvatar');
const PlaceholderBody1 = getComponent<PlaceholderBody1Props>('PlaceholderBody1');
const PlaceholderBody2 = getComponent<PlaceholderBody2Props>('PlaceholderBody2');

export interface PlaceholderListItemProps {
	title?: boolean;
	description?: boolean;
	avatar?: boolean;

	/**
	 * Variants to change avatar's shape
	 */
	variant?: 'circle' | 'rounded' | 'icon' | 'square';

	style?: ViewStyle;
}

/**
 * PlaceholderListItem used for listing Places. A placeList represents a physical location in the Mevris Platform.
 */

export const PlaceholderListItem = (props: PlaceholderListItemProps) => {
	const { theme } = useTheme();
	const { avatar, description, title, variant, style } = props;

	return (
		<View
			testID="skeleton-root"
			style={{
				alignItems: 'center',
				flexDirection: 'row',
				// paddingHorizontal: theme.spacing.unit * 2,
				paddingVertical: theme.spacing.unit * 1.25,
				...style,
			}}
		>
			{avatar ? (
				variant === 'icon' ? (
					<PlaceholderMedia
						style={{
							alignSelf: 'center',
							borderRadius: theme.shape.borderRadius,
							height: theme.spacing.unit * 3,
							marginHorizontal: theme.spacing.unit * 2,
							width: theme.spacing.unit * 3,
						}}
						testID="skeleton-avatar"
					/>
				) : (
					<PlaceholderAvatar
						{...ListAvatarDefaultProps}
						variant={variant}
						style={{ marginLeft: theme.spacing.unit * 2 }}
					/>
				)
			) : null}
			<View
				style={{
					flex: 1,
					paddingLeft: theme.spacing.unit * 2,
				}}
			>
				{title ? (
					<PlaceholderBody1
						width={16}
						style={{ marginTop: theme.spacing.unit / 2, marginBottom: theme.spacing.unit / 2 }}
					/>
				) : null}
				{description ? (
					<PlaceholderBody2
						width={32}
						style={{ marginTop: theme.spacing.unit / 2, marginBottom: theme.spacing.unit / 2 }}
					/>
				) : null}
			</View>
		</View>
	);
};

PlaceholderListItem.defaultProps = {
	avatar: false,
	description: false,
	title: true,
	variant: 'circle',
};
