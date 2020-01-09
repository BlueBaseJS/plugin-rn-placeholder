import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from '@bluebase/core';

export interface PlaceholderH6Props {
	height?: number;
	color?: string;
	width?: number;
	noMargin?: boolean;
	style?: ViewProps['style'];
}

export const PlaceholderH6 = (props: PlaceholderH6Props) => {
	const { theme } = useTheme();

	const height = theme.typography.h6.fontSize!;

	return (
		<PlaceholderLine
			height={height - 2}
			noMargin
			{...props}
			style={[
				{ marginBottom: 2.5, marginTop: 2.5, borderRadius: theme.shape.borderRadius },
				props.style,
			]}
		/>
	);
};
