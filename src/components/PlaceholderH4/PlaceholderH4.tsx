import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from '@bluebase/core';

export interface PlaceholderH4Props {
	height?: number;
	color?: string;
	width?: number;
	noMargin?: boolean;
	style?: ViewProps['style'];
}

export const PlaceholderH4 = (props: PlaceholderH4Props) => {
	const { theme } = useTheme();

	const height = theme.typography.h4.fontSize!;

	return (
		<PlaceholderLine
			height={height - 2}
			noMargin
			{...props}
			style={[
				{ marginBottom: 3.5, marginTop: 3.5, borderRadius: theme.shape.borderRadius },
				props.style,
			]}
		/>
	);
};
