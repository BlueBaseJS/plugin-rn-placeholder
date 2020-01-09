import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from '@bluebase/core';

export interface PlaceholderBody2Props {
	height?: number;
	color?: string;
	width?: number;
	noMargin?: boolean;
	style?: ViewProps['style'];
}

export const PlaceholderBody2 = (props: PlaceholderBody2Props) => {
	const { theme } = useTheme();

	const height = theme.typography.body2.fontSize!;

	return (
		<PlaceholderLine
			height={height - 2}
			noMargin
			{...props}
			style={[
				{ marginBottom: 2, marginTop: 2, borderRadius: theme.shape.borderRadius },
				props.style,
			]}
		/>
	);
};
