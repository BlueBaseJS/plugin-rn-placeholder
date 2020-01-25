import { AvatarDefaultProps, AvatarProps } from '@bluebase/components';

import { PlaceholderMedia } from 'rn-placeholder';
import React from 'react';
import { ViewStyle } from 'react-native';
import { useTheme } from '@bluebase/core';

export interface PlaceholderAvatarStyles {
	root: ViewStyle;
}

export interface PlaceholderAvatarProps extends Omit<AvatarProps, 'type'> {}

export const PlaceholderAvatar = (props: PlaceholderAvatarProps) => {
	const { theme } = useTheme();
	const { variant, size, style } = props;

	const getBorderRadius = () => {
		if (variant === 'circle') {
			return size! / 2;
		} else if (variant === 'rounded') {
			return theme.shape.borderRadius;
		} else {
			return 0;
		}
	};

	return (
		<PlaceholderMedia
			isRound={variant === 'circle'}
			style={{
				borderRadius: getBorderRadius(),
				height: size,
				width: size,
				// marginLeft: theme.spacing.unit * 2,
				...style,
			}}
		/>
	);
};

PlaceholderAvatar.defaultProps = AvatarDefaultProps;
