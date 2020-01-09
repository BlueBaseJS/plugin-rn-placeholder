import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from '@bluebase/core';

export interface PlaceholderH3Props {
	height?: number;
	color?: string;
	width?: number;
	noMargin?: boolean;
	style?: ViewProps['style'];
}

export const PlaceholderH3 = (props: PlaceholderH3Props) => {
	const { theme } = useTheme();

	const height = theme.typography.h3.fontSize!;

	return (
		<PlaceholderLine
			height={height - 9}
			noMargin
			{...props}
			style={[
				{ marginBottom: 8, marginTop: 8, borderRadius: theme.shape.borderRadius },
				props.style,
			]}
		/>
	);
};
