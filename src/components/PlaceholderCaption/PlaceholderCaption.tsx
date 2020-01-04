import { View, ViewProps } from 'react-native';

import { PlaceholderLine } from 'rn-placeholder';
import React from 'react';
import { useTheme } from '@bluebase/core';

export interface PlaceholderCaptionProps {
	height?: number;
	color?: string;
	width?: number;
	noMargin?: boolean;
	style?: ViewProps['style'];
}

export const PlaceholderCaption = (props: PlaceholderCaptionProps) => {
	const { theme } = useTheme();

	const height = theme.typography.caption.fontSize!;

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
