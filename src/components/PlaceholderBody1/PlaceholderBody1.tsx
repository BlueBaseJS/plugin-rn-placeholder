import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from '@bluebase/core';

export interface PlaceholderBody1Props {
	height?: number;
	color?: string;
	width?: number;
	noMargin?: boolean;
	style?: ViewProps['style'];
}

export const PlaceholderBody1 = (props: PlaceholderBody1Props) => {
	const { theme } = useTheme();

	const height = theme.typography.body1.fontSize!;

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
