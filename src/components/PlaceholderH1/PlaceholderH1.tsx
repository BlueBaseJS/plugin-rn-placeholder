import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from '@bluebase/core';

export interface PlaceholderH1Props {
	height?: number;
	color?: string;
	width?: number;
	noMargin?: boolean;
	style?: ViewProps['style'];
}

export const PlaceholderH1 = (props: PlaceholderH1Props) => {
	const { theme } = useTheme();

	const height = theme.typography.h1.fontSize!;

	return (
		<PlaceholderLine
			height={height - 14}
			noMargin
			{...props}
			style={[
				{ marginBottom: 14, marginTop: 14, borderRadius: theme.shape.borderRadius },
				props.style,
			]}
		/>
	);
};
