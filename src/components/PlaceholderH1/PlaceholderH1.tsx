import { View, ViewProps } from 'react-native';

import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
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
		<View
			style={{
				flex: 1,
				paddingVertical: 14,
			}}
		>
			<PlaceholderLine height={height - 14} noMargin {...props} />
		</View>
	);
};
