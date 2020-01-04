import { View, ViewProps } from 'react-native';

import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
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
		<View
			style={{
				flex: 1,
				paddingVertical: 10,
			}}
		>
			<PlaceholderLine height={height - 11} noMargin {...props} />
		</View>
	);
};
