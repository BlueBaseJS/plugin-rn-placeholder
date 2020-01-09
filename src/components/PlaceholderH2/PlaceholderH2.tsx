import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from '@bluebase/core';

export interface PlaceholderH2Props {
	height?: number;
	color?: string;
	width?: number;
	noMargin?: boolean;
	style?: ViewProps['style'];
}

export const PlaceholderH2 = (props: PlaceholderH2Props) => {
	const { theme } = useTheme();

	const height = theme.typography.h2.fontSize!;

	return (
		<PlaceholderLine
			height={height - 11}
			noMargin
			{...props}
			style={[
				{ marginBottom: 10, marginTop: 10, borderRadius: theme.shape.borderRadius },
				props.style,
			]}
		/>
	);
};
