import { View, ViewProps } from 'react-native';

import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
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
		<View
			style={{
				flex: 1,
				paddingVertical: 8,
			}}
		>
			<PlaceholderLine height={height - 9} noMargin {...props} />
		</View>
	);
};
