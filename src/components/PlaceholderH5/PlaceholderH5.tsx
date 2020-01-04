import { View, ViewProps } from 'react-native';

import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
import { useTheme } from '@bluebase/core';

export interface PlaceholderH5Props {
	height?: number;
	color?: string;
	width?: number;
	noMargin?: boolean;
	style?: ViewProps['style'];
}

export const PlaceholderH5 = (props: PlaceholderH5Props) => {
	const { theme } = useTheme();

	const height = theme.typography.h5.fontSize!;

	return (
		<View
			style={{
				flex: 1,
				paddingVertical: 3,
			}}
		>
			<PlaceholderLine height={height - 2} noMargin {...props} />
		</View>
	);
};
