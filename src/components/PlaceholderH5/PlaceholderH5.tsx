import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from '@bluebase/core';

export interface PlaceholderH5Props {
	height?: number;
	color?: string;
	width?: number;
	noMargin?: boolean;
	style?: ViewProps['style'];
}

export const PlaceholderH5 = (props: PlaceholderH5Props) => {
	const { theme } = useTheme();

	const height = theme.typography.h5.fontSize!;

	return (
		<PlaceholderLine
			height={height - 2}
			noMargin
			{...props}
			style={[
				{ marginBottom: 3, marginTop: 3, borderRadius: theme.shape.borderRadius },
				props.style,
			]}
		/>
	);
};
