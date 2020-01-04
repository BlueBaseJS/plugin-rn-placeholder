import { View, ViewProps } from 'react-native';

import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
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
		<View
			style={{
				flex: 1,
				paddingVertical: 3.5,
			}}
		>
			<PlaceholderLine height={height - 2} noMargin {...props} />
		</View>
	);
};
