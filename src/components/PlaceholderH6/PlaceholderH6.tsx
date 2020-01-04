import { View, ViewProps } from 'react-native';

import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
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
		<View
			style={{
				flex: 1,
				paddingVertical: 2.5,
			}}
		>
			<PlaceholderLine height={height - 2} noMargin {...props} />
		</View>
	);
};
