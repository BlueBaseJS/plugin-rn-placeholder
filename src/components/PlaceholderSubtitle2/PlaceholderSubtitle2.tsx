import { View, ViewProps } from 'react-native';

import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
import { useTheme } from '@bluebase/core';

export interface PlaceholderSubtitle2Props {
	height?: number;
	color?: string;
	width?: number;
	noMargin?: boolean;
	style?: ViewProps['style'];
}

export const PlaceholderSubtitle2 = (props: PlaceholderSubtitle2Props) => {
	const { theme } = useTheme();

	const height = theme.typography.subtitle2.fontSize!;

	return (
		<View
			style={{
				flex: 1,
				paddingVertical: 2,
			}}
		>
			<PlaceholderLine height={height - 2} noMargin {...props} />
		</View>
	);
};
